import React, { useCallback, useRef, useState } from "react";
import { FlatList, SectionList, View } from "react-native";

import { navigate } from "../../../Navigators/Root";
import { renderTransactionHeader, renderTransactions } from "../../../Util/Common";
import { useTabMenu } from "../../../Navigators/TabContext";

import {
  AccountCategoryHeader,
  AccountCategorySubCard,
  DeleteAdd,
  TitleBalanceAdd,
  TransactionViewer,
} from "../../../Components";

import styles from "./styles";
import { useTheme } from "../../../Theme";

export default function ShowSplitTransactionScreen({ navigation, route }) {
  const { Layout } = useTheme();
  const { dateObject, updateFilterState, filterType, filterTimestamps, filterValue, setFilterValue } = useTabMenu();
  const deleteModalRef = useRef(null);
  const filterModalRef = useRef(null);
  const previousFilterType = useRef(filterType.current);
  const previousFilterTimestamps = useRef(JSON.parse(JSON.stringify(filterTimestamps.current)));

  const [splitGroup, setSplitGroup] = useState({
    accountBalance: 0,
    income: 0,
    income_count: 0,
    expenses: 0,
    expense_count: 0,
    color: "green",
    name:"Sample"
  });
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [currencyName, setCurrencyName] = useState("United States Dollar");
  const [userDefaultCurrencySymbol, setUserDefaultCurrencySymbol] = useState("USD");
  const [transactionList, setTransactionList] = useState({
    transactions: [],
    accounts: [],
    categories: [],
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [previousFilterState, setPreviousFilterState] = useState(dateObject);
  const [isTransactions, setIsTransactions] = useState(false);

  const onMonthChange = useCallback(async () => {
  }, []);

  const handleDeleteShowModal = useCallback(text => {
    deleteModalRef.current.present();
  }, []);

  const handleDeleteCloseModal = useCallback(() => {
    deleteModalRef.current.dismiss();
  }, []);

  const handleShowNewSplitGroup = useCallback(() => {
    navigate('NewSplitGroupScreen')
  }, []);

  const handleShowFilterModal = useCallback(() => {
    filterModalRef.current?.present();
  }, []);

  const handleCloseFilterModal = useCallback(() => {

    filterModalRef.current?.dismiss();
  }, []);

  const onDelete = async () => {

    handleDeleteCloseModal();
    navigation.pop();

  };

  return (
    <View
      style={[Layout.fill, { backgroundColor: splitGroup.color }]}>
      <View style={styles.parentContainer}>
        <FlatList
          renderItem={null}
          data={[]}
          ListHeaderComponent={
            <View style={styles.subContainer}>
              <AccountCategoryHeader
                onClose={() => navigation.goBack()}
                title="City Trip"
                onDelete={handleDeleteShowModal}
                onEdit={handleShowNewSplitGroup}
                colorCode={splitGroup.color}
              />
              <TitleBalanceAdd
                title={splitGroup.name}
                balance={splitGroup.accountBalance.toString()}
                currency={userDefaultCurrencySymbol}
                colorCode={splitGroup.color}
                icon={splitGroup.icon}
                isSplitGroup={true}
              />

              <View style={styles.accountCardView}>
                <View style={{ flex: 1, paddingEnd: 5 }}>
                  <AccountCategorySubCard
                    title="Income"
                    balance={Number(splitGroup.income).toFixed(2).toString()}
                    transactions={splitGroup.income_count}
                    currencyName={currencyName}
                    onPressAdd={() => navigate("AddSplitTransactionScreen",{ type: "income",})}
                    colorCode={splitGroup.color}
                  />
                </View>
                <View style={{ flex: 1, paddingStart: 5 }}>
                  <AccountCategorySubCard
                    title="Expense"
                    balance={Number(splitGroup.expenses).toFixed(2).toString()}
                    transactions={splitGroup.expense_count}
                    currencyName={currencyName}
                    onPressAdd={() => navigate("AddSplitTransactionScreen",{ type: "expense",})}
                    colorCode={splitGroup.color}
                  />
                </View>
              </View>
            </View>
          }
          ListFooterComponent={
            <View style={styles.bottomView}>
              <TransactionViewer
                dateObject={dateObject}
                updateFilterState={updateFilterState}
                filterType={filterType}
                filterTimestamps={filterTimestamps}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                handleShowFilterModal={handleShowFilterModal}
                bottomSheetModalRef={filterModalRef}
                handleCloseFilterModal={handleCloseFilterModal}
                isTransactions={isTransactions}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                onMonthChange={onMonthChange}
                setPreviousFilterState={setPreviousFilterState}
                previousFilterState={previousFilterState}
                previousFilterType={previousFilterType}
                previousFilterTimestamps={previousFilterTimestamps}
              >
                <View style={[Layout.column]}>
                  <SectionList
                    ListFooterComponent={<View />}
                    ListFooterComponentStyle={{ height: 350 }}
                    sections={transactionList.transactions}
                    renderSectionHeader={item =>
                      renderTransactionHeader(item.section, userDefaultCurrencySymbol)
                    }
                    renderItem={item =>
                      renderTransactions(item, navigation)
                    }
                  />
                </View>
              </TransactionViewer>
            </View>
          }
        />
        <DeleteAdd
          deleteModalRef={deleteModalRef}
          handleCloseModal={handleDeleteCloseModal}
          heading1="Confirm deletion"
          message="Note: Deleting this category will remove it permanently."
          onDelete={onDelete}
          onChange={idx => setIsOpenDeleteModal(idx >= 1)}
          nextDefault={2}
        />
      </View>
    </View>
  );
}

