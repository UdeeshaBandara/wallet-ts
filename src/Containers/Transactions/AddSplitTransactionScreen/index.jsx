import React, { useCallback, useMemo, useRef, useState } from "react";
import { Alert, LayoutAnimation, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import moment from "moment";

import Transaction from "../../../Database/Model/Transaction";

import { useTabMenu } from "../../../Navigators/TabContext";

import {
  Calculator,
  CustomDatePicker, DropDown,
  MoneyAdd,
  OutlinedRoundButton,
} from "../../../Components";
import CalenderIcon from "../../../Assets/SVGIcons/CalenderIcon";
import CancelIcon from "../../../Assets/SVGIcons/CancelIcon";

import { Colors } from "../../../Theme/Variables";
import styles from "./styles";
import { useTheme } from "../../../Theme";

export default function AddSplitTransactionScreen({ navigation, route }) {
  const { Layout } = useTheme();
  const { type, isEditMode, isFromAccount, isFromCategory, existingDetails } = route.params;
  const { isNewAccountAdded, isNewFromAccountAdded } = useTabMenu();

  const snapPoints = useMemo(
    () => ["25%", Platform.OS === "android" ? "82%" : "80%"],
    [],
  );

  const bottomSheetCalculatorModalRef = useRef(null);
  const deleteModalRef = useRef(null);
  const initialDate = useRef(moment(new Date()).format("X"));

  const [transactionType, setTransactionType] = useState(type);
  const [title, setTitle] = useState(isEditMode ? existingDetails.transactions.title : "");
  const [selectedAccount, setSelectedAccount] = useState({
    name: isEditMode || isFromAccount ? existingDetails.accounts.name : "",
    accountId: isEditMode || isFromAccount ? existingDetails.accounts.id : "",
    currency: isEditMode || isFromAccount ? existingDetails.accounts.currency : "",
    color: isEditMode || isFromAccount ? existingDetails.accounts.color : "",
    icon: isEditMode || isFromAccount ? existingDetails.accounts.icon : "",
  });
  const [amount, setAmount] = useState(isEditMode ? existingDetails.transactions.amount : "0");
  const [selectedDate, setSelectedDate] = useState(
    isEditMode
      ? `${moment(existingDetails.transactions.time, "X").format("MMM DD HH:mm")}`
      : `${moment(new Date()).format("MMM DD HH:mm")}`,
  );
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isMinimize, setIsMinimize] = useState(false);
  const [isOpenCalculatorModal, setIsOpenCalculatorModal] = useState(false);
  const [verticalScrollValue, setVerticalScrollValue] = useState(0);

  const minimizeMoneyAdd = useCallback(() => {
    requestAnimationFrame(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setIsMinimize(isMinimize => !isMinimize);
    });
  }, []);

  const handleShowCalculatorModal = useCallback(() => {
    bottomSheetCalculatorModalRef.current?.present();
  }, []);

  const handleCloseCalculatorModal = useCallback(() => {
    bottomSheetCalculatorModalRef.current?.dismiss();
  }, []);

  const saveNewTransaction = useCallback(
    async (accountId, currency) => {
      if (amount !== "0") {
        if (isEditMode) await updateTransaction(accountId, currency);
        else await addTransactionToDb(accountId, currency);
      } else
        Alert.alert("Failed to save", "Please enter a valid amount", [
          {
            text: "Try again",
          },
        ]);
    },
    [amount, title, transactionType],
  );

  const onCalculatorSubmit = useCallback((amountRef, accountFromCal) => {
    setAmount(amountRef);
    setSelectedAccount({
      ...selectedAccount,
      name: accountFromCal.name,
      accountId: accountFromCal.accountId,
      currency: accountFromCal.currency,
      color: accountFromCal.color,
      icon: accountFromCal.icon,
    });

    bottomSheetCalculatorModalRef.current?.dismiss();

  }, []);

  const friends = ["Kasun", "Amal", "Nimal", "Kamal"];

  const addTransactionToDb = async (accountId, currency, amount) => {
    if (accountId === "" || accountId === undefined) {
      Alert.alert("Failed to save", "Something went wrong with account selection.", [
        {
          text: "Try again",
        },
      ]);
      return;
    }

    const transaction = {
      accountId: accountId,
      type: transactionType === "income" ? "1" : "2",
      amount: amount,
      currency: currency,
      time: Number(initialDate.current),
      title: title,
      description: "",
      categoryId: "11",
      //adding purpose as 0 for non transfer type transactions
      purpose: "4",
    };

    await Transaction.createTransaction(transaction);

    navigation.pop();
  };

  const updateTransaction = async (accountId, currency) => {
    const transactionUpdate = {
      id: existingDetails.transactions.id,
      accountId: accountId,
      type: transactionType === "income" ? "1" : "2",
      amount: amount,
      currency: currency,
      time: Number(existingDetails.transactions.time),
      title: title,
      description: "",
      categoryId: "11",
      //adding purpose as 4 for split transactions
      purpose: "4",
    };

    await Transaction.updateTransactionById(transactionUpdate);

    navigation.pop();
  };

  const onDateSelect = calendarValue => {
    setIsCalendarOpen(false);
    initialDate.current = moment(calendarValue).format("X");
    if (isEditMode)
      existingDetails.transactions.time = moment(calendarValue).format("X");
    setSelectedDate(moment(calendarValue).format("MMM DD HH:mm"));
  };


  return (
    <SafeAreaView
      style={[
        Layout.fill, styles.parentContainer,
      ]}>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <OutlinedRoundButton
            icon={<CancelIcon />}
            onPress={() => {
              navigation.pop();
            }}
          />
        </View>
        <TextInput
          placeholderTextColor="#93929A"
          placeholder={
            transactionType === "income"
              ? "Income title"
              : "Expense title"
          }
          style={styles.input}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <DropDown data={friends} transactionType={transactionType} />
        <View
          style={[
            styles.cardBackground,
            { paddingVertical: 19, justifyContent: "space-between" },
          ]}>
          <View style={styles.subRow}>
            <CalenderIcon />
            <Text
              style={[styles.descriptionText, { color: Colors.gray003 }]}>
              Created on
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setIsCalendarOpen(true)}>
              <Text
                style={[
                  styles.descriptionText,
                  styles.descriptionTextExtensions,
                ]}>
                {selectedDate}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

      <View style={styles.bottomView}>
        <MoneyAdd
          title={transactionType === "income" ? "Add money to" : "Pay with"}
          minimizeMoneyAddModal={minimizeMoneyAdd}
          showCalculatorModal={handleShowCalculatorModal}
          amount={amount}
          isMinimize={isMinimize}
          onMoneyAdd={saveNewTransaction}
          selectedAccountRef={selectedAccount}
          isEditMode={isEditMode}
          isFromAccount={isFromAccount}
          setSelectedAccountRef={setSelectedAccount}
          isNewAccountAdded={isNewAccountAdded}
          verticalScrollValue={verticalScrollValue}
          setVerticalScrollValue={setVerticalScrollValue}
        />
      </View>
      <BottomSheetModal
        ref={bottomSheetCalculatorModalRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        enableTouchOutsideToClose={false}
        enableHandlePanningGesture={false}
        enableContentPanningGesture={false}
        style={styles.bottomSheetHeader}
        handleIndicatorStyle={{ display: "none" }}
        onChange={idx => setIsOpenCalculatorModal(idx >= 1)}>
        <View style={styles.contentContainer}>
          <Calculator
            handleCloseModal={handleCloseCalculatorModal}
            onSubmit={onCalculatorSubmit}
            amountRef={amount}
            selectedAccountRef={selectedAccount}
            isTransfer={type === "transfer"}
            isNewAccountAdded={isNewAccountAdded}
            verticalScrollValue={verticalScrollValue}
            setVerticalScrollValue={setVerticalScrollValue}
          />
        </View>
      </BottomSheetModal>
      <CustomDatePicker
        handleClose={() => setIsCalendarOpen(false)}
        onSetSelectedDate={text => onDateSelect(text)}
        open={isCalendarOpen}
        date={
          isEditMode
            ? moment.unix(existingDetails.transactions.time).toDate()
            : new Date()
        }
        mode="datetime"
      />
    </SafeAreaView>
  );
}

