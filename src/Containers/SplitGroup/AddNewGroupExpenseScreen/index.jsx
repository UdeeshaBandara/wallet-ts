import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  Alert,
  LayoutAnimation,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import moment from "moment/moment";
import { useTabMenu } from "../../../Navigators/TabContext";

import { Calculator, CustomDatePicker, DropDown, MoneyAdd, OutlinedRoundButton } from "../../../Components";
import CalenderIcon from "../../../Assets/SVGIcons/CalenderIcon";
import CancelIcon from "../../../Assets/SVGIcons/CancelIcon";
import { GroupMember } from "../../../Components";

import { Colors } from "../../../Theme/Variables";
import { useTheme } from "../../../Theme";
import styles from "./styles";

export default function AddNewGroupExpenseScreen({ navigation, route }) {
  const { Layout } = useTheme();
  const { isEditMode,existingDetails } = route.params;
  const { isNewAccountAdded } = useTabMenu();

  const snapPoints = useMemo(
    () => ["25%", Platform.OS === "android" ? "82%" : "80%"],
    [],
  );

  const initialDate = useRef(moment(new Date()).format("X"));
  const bottomSheetCalculatorModalRef = useRef(null);

  const [title, setTitle] = useState(isEditMode ? existingDetails.transactions.title : "");
  const [selectedDate, setSelectedDate] = useState(
    isEditMode
      ? `${moment(existingDetails.transactions.time, "X").format("MMM DD HH:mm")}`
      : `${moment(new Date()).format("MMM DD HH:mm")}`,
  );
  const [selectedAccount, setSelectedAccount] = useState({
    name: isEditMode ? existingDetails.accounts.name : "",
    accountId: isEditMode ? existingDetails.accounts.id : "",
    currency: isEditMode ? existingDetails.accounts.currency : "",
    color: isEditMode ? existingDetails.accounts.color : "",
    icon: isEditMode ? existingDetails.accounts.icon : "",
  });
  const [amount, setAmount] = useState(isEditMode ? existingDetails.transactions.amount : "0");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isMinimize, setIsMinimize] = useState(false);
  const [isOpenCalculatorModal, setIsOpenCalculatorModal] = useState(false);
  const [isCheckBoxSelected, setIsCheckBoxSelected] = useState(false);
  const [verticalScrollValue, setVerticalScrollValue] = useState(0);

  const friends = ["Kasun", "Amal", "Nimal", "Kamal"];

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
  const onDateSelect = calendarValue => {
    setIsCalendarOpen(false);
    initialDate.current = moment(calendarValue).format("X");
    setSelectedDate(moment(calendarValue).format("MMM DD HH:mm"));
  };

  const saveNewGroupExpense = useCallback(
    async (accountId, currency) => {
      if (amount !== "0") {
        if (isEditMode) await updateGroupExpense(accountId, currency);
        else await addGroupExpense(accountId, currency);
      } else
        Alert.alert("Failed to save", "Please enter a valid amount", [
          {
            text: "Try again",
          },
        ]);
    },
    [amount, title],
  );

  const addGroupExpense = async (accountId, currency) => {

  }

  const updateGroupExpense = async (accountId, currency) => {

  }

  return (
    <SafeAreaView
      style={[
        Layout.fill,styles.parentContainer,
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
             "Title"
          }
          style={styles.input}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <ScrollView contentContainerStyle={{ paddingBottom: 300 }}>
          <View>
            <DropDown data={friends} transactionType={"income"} />
            <GroupMember isSelectAll={true} isChecked={isCheckBoxSelected} onPress={()=>{
              setIsCheckBoxSelected(isCheckBoxSelected => !isCheckBoxSelected);
            }} />
            {friends?.map((item, idx) => (
              <GroupMember name={item} amount={idx} currency={"USD"} isSelectAll={false} isChecked={isCheckBoxSelected} onPress={() => {
                setIsCheckBoxSelected(isCheckBoxSelected => !isCheckBoxSelected);
              }}  key={idx}/>
            ))}
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
        </ScrollView>
      </View>

      <View style={styles.bottomView}>
        <MoneyAdd
          title={"Pay with"}
          minimizeMoneyAddModal={minimizeMoneyAdd}
          showCalculatorModal={handleShowCalculatorModal}
          amount={amount}
          isMinimize={isMinimize}
          onMoneyAdd={saveNewGroupExpense}
          selectedAccountRef={selectedAccount}
          isEditMode={isEditMode}
          isFromAccount={false}
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
            isTransfer={false}
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

