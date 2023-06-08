import React, { useEffect, useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Animated from 'react-native-reanimated';

import Account from "../../Database/Model/Account";

import {
  getTextColor,
  getFormattedBalanceWithCents,
  getIconByName,
  handleScrollValues,
} from "../../Util/Common";
import { navigate } from "../../Navigators/Root";

import { AccountAndCategoryIcons } from "../../Assets/SVGIcons/AccountAndCategoryIcons";
import { IconChip } from "../Chips";
import MaximizeIcon from "../../Assets/SVGIcons/MaximizeIcon";
import MinimizeIcon from "../../Assets/SVGIcons/MinimizeIcon";
import PlusBlackIcon from "../../Assets/SVGIcons/PlusBlackIcon";
import PlusIcon from "../../Assets/SVGIcons/PlusIcon";
import { SaveCloseController } from "../SaveCloseController";
import SaveIcon from "../../Assets/SVGIcons/SaveIcon";

import styles from "./styles";
import { Colors } from "../../Theme/Variables";

export const MoneyAdd = ({
                           title,
                           minimizeMoneyAddModal,
                           onMoneyAdd,
                           showCalculatorModal,
                           amount,
                           isMinimize,
                           isEditMode,
                           isFromAccount,
                           selectedAccountRef,
                           setSelectedAccountRef,
                           isNewAccountAdded,
                           verticalScrollValue,
                           setVerticalScrollValue,
                         }) => {

  const loadAccountAndCategoryIcons = useMemo(()=>{
    return AccountAndCategoryIcons;
  },[])

  const [accountList, setAccountList] = useState([]);
  const [fullScrollWidth, setFullScrollWidth] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      getAccounts();
    }, []),
  );

  const getAccounts = async () => {

    let accounts = await Account.getAllAccounts();

    if (isEditMode || isFromAccount) {
      setSelectedAccountRef({
        ...selectedAccountRef,
        name: selectedAccountRef.name,
        accountId: selectedAccountRef.accountId,
        currency: selectedAccountRef.currency,
        color: selectedAccountRef.color,
        icon: selectedAccountRef.icon,
      });
    } else if (accounts.length > 0)
      setSelectedAccountRef({
        ...selectedAccountRef,
        name: accounts[0].name,
        accountId: accounts[0].id,
        currency: accounts[0].currency,
        color: accounts[0].color,
        icon: accounts[0].icon,
      });

    if (isNewAccountAdded.current) {
      isNewAccountAdded.current = false;
      setSelectedAccountRef({
        ...selectedAccountRef,
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

  //handle scroll position of account list view
  useEffect(() => {
    handleScrollValues(
      accountList,
      selectedAccountRef.accountId,
      setVerticalScrollValue,
      fullScrollWidth
    );
  }, [accountList, isNewAccountAdded, selectedAccountRef, fullScrollWidth]);

  return (
    <View style={styles.parentContainer}>
      <Animated.View style={styles.subContainer}>
        {isMinimize ? (
          <>
            <View style={styles.minimizeRow}>
              <TouchableOpacity
                style={styles.amountRowMinimize}
                onPress={showCalculatorModal}>
                <Text
                  style={[styles.txtAmount, amount.split(".")[0].length > 5 && { fontSize: 24 }]}>{getFormattedBalanceWithCents(Number(amount.split(".")[0]).toFixed(2)).balanceWithThousandSeparator }</Text>
                <Text style={[styles.txtCurrency, amount.split(".")[0].length > 5 && { fontSize: 24 }]}>
                  .{amount.split(".")[1] ? amount.split(".")[1] : "00"}
                </Text>
                <Text style={[styles.txtCurrency, amount.split(".")[0].length > 5 && { fontSize: 24 }]}>
                  {" "}
                  {selectedAccountRef.currency}
                </Text>
              </TouchableOpacity>
              <View style={styles.cashColumnMinimize}>
                <Text style={styles.txtCashHeading}>{title}</Text>
                <Text  numberOfLines={3}  style={styles.txtCash}>{selectedAccountRef.name}</Text>
              </View>
            </View>
          </>
        ) : (
          <>
            <Text style={styles.accountText}>{title}</Text>
            <ScrollView onContentSizeChange={data => setFullScrollWidth(data)} horizontal={true} contentOffset={{ x: verticalScrollValue, y: 0 }}>
              <>
                {accountList?.map((item, idx) => (
                  <TouchableOpacity
                    style={{ marginRight: 10 }}
                    key={idx}
                    onPress={() => {
                      if (item.accountId === -1) {
                        navigate("NewAccountScreen", { screenName: "NewAccount", account: {}, isFromAddTransaction : true });
                      } else {
                        setSelectedAccountRef({
                          ...selectedAccountRef,
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
                        selectedAccountRef.accountId === item.id
                          ? item.color
                          : "#F8F8F8"
                      }
                      icon={
                        item.accountId === -1 ? <PlusBlackIcon /> : getIconByName(item.icon, loadAccountAndCategoryIcons,(selectedAccountRef.accountId === item.id ? item.color: Colors.primaryYellow))
                      }
                      text={item.name}
                      textColor={
                        selectedAccountRef.accountId === item.id
                          ?  getTextColor(item.color)
                          : "black"
                      }
                      fixedWidth={{ active: true, width: 160 }}
                    />
                  </TouchableOpacity>
                ))}
              </>
            </ScrollView>
            <TouchableOpacity
              style={styles.amountRow}
              onPress={showCalculatorModal}>
              <Text style={styles.txtAmount}>
                {parseFloat(amount.split(".")[0]).toLocaleString()}
              </Text>
              <Text style={styles.txtCurrency}>
                .{amount.split(".")[1] ? amount.split(".")[1] : "00"}
              </Text>
              <Text style={styles.txtCurrency}>
                {" "}
                {selectedAccountRef.currency}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Animated.View>
      <SaveCloseController
        closeIcon={isMinimize ? <MaximizeIcon /> : <MinimizeIcon />}
        handleClose={minimizeMoneyAddModal}
        handleSubmit={() =>
          onMoneyAdd(selectedAccountRef.accountId, selectedAccountRef.currency)
        }
        submitButtonText={isEditMode ? "Save" : "Add"}
        submitButtonIcon={
          isEditMode ? <SaveIcon isWhite={true} /> : <PlusIcon />
        }
      />
    </View>
  );
};
