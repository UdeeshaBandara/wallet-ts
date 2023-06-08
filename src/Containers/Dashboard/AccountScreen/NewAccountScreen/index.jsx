import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  useMemo,
} from "react";
import {
  BackHandler,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import moment from "moment";

import Account from "../../../../Database/Model/Account";
import Transaction from "../../../../Database/Model/Transaction";

import { DEFAULT_CURRENCY } from "../../../../Util/Constants";
import { getCurrencyLongName, getIconByName } from "../../../../Util/Common";
import { getItemFromAsyncStorage } from "../../../../Util/Storage";
import { useTabMenu } from "../../../../Navigators/TabContext";

import {
  AccountAndCategoryIconPicker,
  AccountBalanceAdd,
  BottomSheet,
  CheckBox,
  ColorPicker,
  RoundIconButton,
  SaveCloseController,
} from "../../../../Components";
import { AccountAndCategoryIcons } from "../../../../Assets/SVGIcons/AccountAndCategoryIcons/index";
import { Calculator } from "../../../../Components";
import DefaultAccountIcon from "../../../../Assets/SVGIcons/AccountAndCategoryIcons/Default/DefaultAccountIcon";
import PlusIcon from "../../../../Assets/SVGIcons/PlusIcon";
import SaveIcon from "../../../../Assets/SVGIcons/SaveIcon";

import { useTheme } from "../../../../Theme";
import styles from "./styles";


export default function NewAccountScreen({ navigation, route }) {
  const { Layout, Colors } = useTheme();
  const { screenName, account, isFromAddTransaction } = route.params;

  const { isNewAccountAdded, isNewFromAccountAdded } = useTabMenu();

  const loadAccountAndCategoryIcons = useMemo(() => {
    return AccountAndCategoryIcons;
  }, []);

  const calculatorModalRef = useRef(null);
  const currencyModalRef = useRef(null);
  const isAmountEdited = useRef(false);
  const isNegativeTransaction = useRef(false);
  const transactionAmount = useRef(0);
  const snapPointsCalculator = useMemo(() => ["25%", "80%"], []);
  const iconPickerModalRef = useRef(null);

  const [iconPickerKey, setIconPickerKey] = React.useState(0);
  const [accountObj, setAccountObj] = useState({
    name: screenName === "NewAccount" ? "" : account.name,
    currency: screenName === "NewAccount" ? "USD" : account.currency,
    currencyName: screenName === "NewAccount" ? "United States Dollars" : "",
    color: screenName === "NewAccount" ? Colors.primaryPurple : account.color,
    accountBalance: screenName === "NewAccount" ? 0 : account.accountBalance,
    icon: screenName === "NewAccount" ? "DefaultAccountIcon" : account.icon,
  });
  const [includeAccount, setIncludeAccount] = useState(account.excluded === "1");
  const [isOpenCurrencyModal, setIsOpenCurrencyModal] = useState(false);
  const [isOpenCalculatorModal, setIsOpenCalculatorModal] = useState(false);
  const [currencyModalKey, setCurrencyModalKey] = useState(0);

  useEffect(() => {

    getItemFromAsyncStorage(DEFAULT_CURRENCY).then(async (value) => {
      let currencyName = await getCurrencyLongName(screenName === "NewAccount" ? value : accountObj.currency);
      setAccountObj({
        ...accountObj,
        currencyName: currencyName,
        currency: (screenName === "NewAccount" ? value : accountObj.currency),
      });
    });

  }, []);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, [isOpenCurrencyModal, isOpenCalculatorModal]);

  const handleShowCalculator = useCallback(() => {
    calculatorModalRef.current?.present();
  }, []);
  const handleCloseCalculator = useCallback(() => {
    calculatorModalRef.current?.dismiss();
  }, []);

  const handleCloseCurrencyList = useCallback(() => {
    setCurrencyModalKey(Math.random());
    currencyModalRef.current?.dismiss();
  }, []);

  const handleShowCurrencyList = useCallback(() => {
    currencyModalRef.current?.present();
  }, []);

  const onSelectCurrency = useCallback(async (amountRef) => {
    let currencyName = await getCurrencyLongName(amountRef);
    setAccountObj({
      ...accountObj,
      currencyName: currencyName,
      currency: amountRef,
    });
    setCurrencyModalKey(Math.random());
    currencyModalRef.current?.dismiss();
  }, [accountObj]);

  const handleShowIconPicker = useCallback(() => {
    iconPickerModalRef?.current.present();
  }, []);

  const handleCloseIconPicker = useCallback(() => {
    iconPickerModalRef?.current.close();
    setIconPickerKey(Math.random());
  }, []);

  const handleSubmitIconPicker = useCallback((icon) => {
    setAccountObj({ ...accountObj, icon: icon });
    iconPickerModalRef?.current.close();
    setIconPickerKey(Math.random());
  }, [accountObj.name, accountObj.accountBalance, accountObj.currencyName, accountObj.currency, accountObj.color]);


  const backAction = () => {
    if (isOpenCurrencyModal) {
      setCurrencyModalKey(Math.random());
      currencyModalRef.current?.close();
      return true;
    } else if (isOpenCalculatorModal) {
      calculatorModalRef.current?.close();
      return true;
    } else {
      goBack();
      return true;
    }
  };

  const onCalculatorSubmit = amount => {
    if (accountObj.accountBalance !== amount) {
      isAmountEdited.current = true;
      if ((Math.sign(Number(amount)) === -1 && Math.sign(Number(accountObj.accountBalance)) === -1) || (Math.sign(Number(amount)) === -1 && Math.sign(Number(accountObj.accountBalance)) !== -1) || (Math.sign(Number(accountObj.accountBalance)) === -1)) {
        isNegativeTransaction.current = true;
      } else{
        isNegativeTransaction.current = Number(amount) < Number(accountObj.accountBalance);
      }
      transactionAmount.current = isNegativeTransaction.current ? (Number(accountObj.accountBalance) - Number(amount)) : Number(amount) - (Math.sign(Number(accountObj.accountBalance)) === -1 ? (Number(accountObj.accountBalance) * -1) : Number(accountObj.accountBalance));

    }
    setAccountObj({ ...accountObj, accountBalance: Number(amount) });
    handleCloseCalculator();
  };

  const addOrUpdateAccountTransaction = async () => {
    if (accountObj.name.trim() !== "") {
      account.name = accountObj.name;
      account.currency = accountObj.currency;
      account.color = accountObj.color;
      account.accountBalance = accountObj.accountBalance;
      account.icon = accountObj.icon;
      if (screenName === "NewAccount") {
        let accountToCreate = {

          name : accountObj.name,
          bgColor : accountObj.color,
          icon : accountObj.icon,

        };
        let newAccountInfo = await Account.addAccountsToDb(accountToCreate,accountObj.currency,includeAccount);
        account.id = newAccountInfo.id;
        if (isFromAddTransaction)
          isNewAccountAdded.current = !isNewFromAccountAdded.current;
      } else {
        await Account.updateAccountById(account.id,accountObj,includeAccount);
      }
      if (isAmountEdited.current){

        const transaction = {
          accountId: account.id,
          type: isNegativeTransaction.current ? "2" : "1",
          amount: transactionAmount.current.toString(),
          currency: accountObj.currency,
          time: Number(moment(new Date()).format("X")),
          title: "Adjust balance",
          description: '',
          categoryId: "11",
          //adding purpose as 3 for balance adjusting transactions
          purpose: "3",
        };

        await Transaction.createTransaction(transaction);
      }

      navigation.pop();
    } else {
      return null;
    }
  };

  const goBack = () => {
    isNewFromAccountAdded.current = false;
    navigation.goBack();
  };


  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <View style={styles.parentContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.heading}>
            {screenName === "NewAccount" ? "New account" : "Edit account"}
          </Text>
          <View style={[Layout.rowHCenter, styles.accountNameIconView]}>
            <RoundIconButton
              icon={getIconByName(accountObj.icon, loadAccountAndCategoryIcons, accountObj.color)}
              bgColor={accountObj.color}
              isSmall={true}
              onPress={handleShowIconPicker}
            />
            <TextInput
              placeholder="Account name"
              placeholderTextColor={Colors.gray002}
              style={styles.input}
              value={accountObj.name}
              onChangeText={text =>
                setAccountObj({ ...accountObj, name: text })
              }
            />
          </View>
          <View style={styles.colorContainer}>
            <Text style={styles.txtColor}>Choose color</Text>
            <View style={styles.colorView}>
              <ColorPicker
                onPickColor={item =>
                  setAccountObj({ ...accountObj, color: item })
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.subContainer}>
          <TouchableOpacity
            style={styles.btnCurrency}
            onPress={handleShowCurrencyList}>
            <Text style={styles.currency}>{accountObj.currency}</Text>
            <Text style={styles.name}>{accountObj.currencyName}</Text>
          </TouchableOpacity>
          <View style={[Layout.rowHCenter, styles.includeView]}>
            <CheckBox
              onPress={() => setIncludeAccount(!includeAccount)}
              isChecked={!includeAccount}
            />
            <Text style={styles.txtInclude}>Include account</Text>
          </View>
          <View style={styles.balanceContainer}>
            <AccountBalanceAdd
              amount={accountObj.accountBalance.toFixed(2).toString()}
              currency={accountObj.currency}
              onPress={handleShowCalculator}
            />
          </View>
        </View>
        <SaveCloseController
          handleClose={() => goBack()}
          submitButtonText={screenName === "NewAccount" ? "Add" : "Save"}
          submitButtonIcon={
            screenName === "NewAccount" ? (
              <PlusIcon isWhite={true} />
            ) : (
              <SaveIcon isWhite={true} />)}
          handleSubmit={() => addOrUpdateAccountTransaction()}
          disabled={accountObj.name.trim() === ""}
        />
        {/* Commenting the Currency modal as the app allows to create/edit accounts using only user's default currency */}
        {/* <SelectCurrency
          key={currencyModalKey}
          currencyModalRef={currencyModalRef}
          onEditCurrency={onSelectCurrency}
          handleCloseModal={handleCloseCurrencyList}
          onChange={idx => setIsOpenCurrencyModal(idx >= 1)}
          currencyObj={accountObj}
          setCurrencyObj={setAccountObj}
        /> */}
        <BottomSheet
          snapPoints={snapPointsCalculator}
          bottomSheetModalRef={calculatorModalRef}
          onChange={idx => setIsOpenCalculatorModal(idx >= 1)}>
          <View>
            <Calculator
              handleCloseModal={handleCloseCalculator}
              onSubmit={onCalculatorSubmit}
              screenTitle="BufferScreen"
              selectedAccountRef={{ name: "", accountId: "", currency: accountObj.currency }}
              amountRef={accountObj.accountBalance.toString()}
            />
          </View>
        </BottomSheet>
      </View>
      < AccountAndCategoryIconPicker bottomSheetRef={iconPickerModalRef} key={iconPickerKey}
                                     closeBottomSheet={handleCloseIconPicker} colorCode={accountObj.color}
                                     pickedIcon={accountObj.icon} handleSubmit={handleSubmitIconPicker} />
    </SafeAreaView>
  );
}
