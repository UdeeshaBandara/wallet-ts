import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Account from "../../Database/Model/Account";

import { calculatorKeys } from "../../Util/Constants";
import {
  getTextColor,
  getIconByName,
  getThousandFormatterForCalculator,
  handleScrollValues,
} from "../../Util/Common";
import { navigate } from "../../Navigators/Root";

import { AccountAndCategoryIcons } from "../../Assets/SVGIcons/AccountAndCategoryIcons";
import { CalculatorKey } from "./CalculatorKey";
import CalculatorDeleteIcon from "../../Assets/SVGIcons/CalculatorDeleteIcon";
import CorrectIcon from "../../Assets/SVGIcons/CorrectIcon";
import ExtendedCalculator from "./ExtendedCalculator";
import { IconChip } from "../Chips";
import PlusBlackIcon from "../../Assets/SVGIcons/PlusBlackIcon";
import { SaveCloseController } from "../SaveCloseController";

import { Colors } from "../../Theme/Variables";
import styles from "./styles";


export const Calculator = ({
                             handleCloseModal,
                             onSubmit,
                             screenTitle,
                             amountRef,
                             selectedAccountRef,
                             currency,
                             isTransfer = false,
                             isNewAccountAdded = useRef(false),
                             verticalScrollValue,
                             setVerticalScrollValue,
                           }) => {
  const loadAccountAndCategoryIcons = useMemo(()=>{
    return AccountAndCategoryIcons;
  },[])

  const extendedCalculatorRef = useRef(null);

  const [amount, setAmount] = useState(amountRef);
  const [fullScrollWidth, setFullScrollWidth] = useState(0);
  const [accountList, setAccountList] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState({
    name: selectedAccountRef.name,
    accountId: selectedAccountRef.accountId,
    currency: selectedAccountRef.currency,
    color: selectedAccountRef.color,
    icon: selectedAccountRef.icon,
  });

  useEffect(() => {
    getAccounts();
  }, []);

  const handleShowExtendedCalculator = useCallback(() => {
    extendedCalculatorRef.current?.present();
  }, []);

  const handleCloseExtendedCalculator = useCallback(() => {
    extendedCalculatorRef.current?.forceClose();
  }, []);

  const handleCalculatorDigitButtonPress = item => {
    let amountExcludingCents = amount.replace(".", ""); // to count the amount.length excluding cents character

    if (amountExcludingCents.length < 10) {
      if (amount === "0") setAmount(item);
      else setAmount(amount + item);
    }
  };

  const handleCalculatorDeleteButtonPress = () => {
    if (amount.length === 1) setAmount("0");
    else setAmount(amount.substring(0, amount.length - 1));
  };

  const getAccounts = async () => {
    let accounts = await Account.getAllAccounts();

    if ( isNewAccountAdded.current) {
      isNewAccountAdded.current = false;
      setSelectedAccount({
        ...selectedAccount,
        name: accounts[accounts.length - 1].name,
        accountId: accounts[accounts.length - 1].id,
        currency: accounts[accounts.length - 1].currency,
        color: accounts[accounts.length - 1].color,
        icon: accounts[accounts.length - 1].icon,
      });
    }

    accounts.push({ name: "Add account", accountId: -1, currency: "usd" });
    setAccountList(accounts);
  };

  const handleSetCalculateAmount = value => {
    setAmount(value);
    extendedCalculatorRef.current?.close();
  };

  //handle scroll position of of account list view
  useEffect(() => {
    handleScrollValues(
      accountList,
      selectedAccountRef.accountId,
      setVerticalScrollValue,
      fullScrollWidth
    );
  }, [accountList, fullScrollWidth]);

  return (
    <View style={styles.parentContainer}>
      <View style={styles.subContainer}>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          enableAutomaticScroll
          style={{ height: "75%" }}>
          <>
            {screenTitle === "BufferScreen" ? null : (
              <Text style={styles.accountText}>Account</Text>
            )}
            {isTransfer && <Text style={styles.accountTextTo}>To</Text>}
            {screenTitle === "BufferScreen" ? null : (
              <ScrollView
                horizontal={true}
                onContentSizeChange={data => setFullScrollWidth(data)}
                contentOffset={{ x: verticalScrollValue, y: 0 }}>
                <>
                  {accountList?.map((item, idx) => (
                    <TouchableOpacity
                      style={{ marginRight: 10 }}
                      key={idx}
                      onPress={() => {
                        if (item.accountId === -1) {
                          handleCloseModal(true);
                          navigate("NewAccountScreen", { screenName: "NewAccount", account: {}, isFromAddTransaction: true });
                        } else {
                          setSelectedAccount({
                            ...selectedAccount,
                            name: item.name,
                            accountId: item.id,
                            currency: item.currency,
                            color: item.color,
                            icon: item.icon,
                          });
                        }
                      }}>
                      <IconChip
                        bgColor={
                          selectedAccount.accountId === item.id
                            ? item.color
                            : "#F8F8F8"
                        }
                        icon={
                          item.accountId === -1 ? <PlusBlackIcon /> : getIconByName(item.icon, loadAccountAndCategoryIcons, (selectedAccount.accountId === item.id ? item.color: Colors.primaryYellow))
                        }
                        text={item.name}
                        textColor={
                          selectedAccount.accountId === item.id
                            ? getTextColor(item.color)
                            : "black"
                        }
                        fixedWidth={{ active: true, width: 160 }}
                      />
                    </TouchableOpacity>
                  ))}
                </>
              </ScrollView>
            )}

            <Text style={styles.txtCurrency}>
              <Text style={styles.txtAmount}>
                {getThousandFormatterForCalculator(amount)}
              </Text>{" "}
              {selectedAccount.currency || currency}
            </Text>
            <FlatList
              columnWrapperStyle={styles.columnWrapperStyle}
              data={calculatorKeys.simpleCalculatorData}
              scrollEnabled={false}
              renderItem={({ item, index }) => {
                return index !==
                calculatorKeys.simpleCalculatorData.length - 1 ? (
                  <CalculatorKey
                    textValue={item}
                    onPress={() => {
                      handleCalculatorDigitButtonPress(item);
                    }}
                    onPressSet={handleSetCalculateAmount}
                  />
                ) : (
                  <CalculatorKey
                    icon={<CalculatorDeleteIcon />}
                    onPress={handleCalculatorDeleteButtonPress}
                  />
                );
              }}
              numColumns={3}
              keyExtractor={(item, index) => index}
            />
          </>
        </KeyboardAwareScrollView>
      </View>

      <ExtendedCalculator
        extendedCalculatorModalRef={extendedCalculatorRef}
        handleCloseModal={handleCloseExtendedCalculator}
        onPressSet={handleSetCalculateAmount}
        amountRef={amount}
      />
      <View style={{ height: "28%" }}>
        <SaveCloseController
          handleClose={() => handleCloseModal(false)}
          handleSubmit={() => {
            if (amount !== "-")
              onSubmit(amount, selectedAccount);
          }}
          submitButtonText={"Enter"}
          submitButtonIcon={<CorrectIcon />}
          handleExtendedCalculator={handleShowExtendedCalculator}
        />
      </View>
    </View>
  );
};
