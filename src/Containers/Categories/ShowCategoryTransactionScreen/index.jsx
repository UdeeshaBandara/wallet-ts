import React, { useCallback, useEffect, useRef, useState } from "react";
import { BackHandler, FlatList, SectionList, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import moment from "moment";

import Category from "../../../Database/Model/Category";
import Transaction from "../../../Database/Model/Transaction";

import { DEFAULT_CURRENCY } from "../../../Util/Constants";
import { getCurrencyLongName, getDayName, renderTransactionHeader, renderTransactions } from "../../../Util/Common";
import { getItemFromAsyncStorage } from "../../../Util/Storage";
import { navigate } from "../../../Navigators/Root";
import { useTabMenu } from "../../../Navigators/TabContext";

import {
  AccountCategoryHeader,
  AccountCategorySubCard,
  CategoryCreateAndEdit,
  DeleteAdd,
  TitleBalanceAdd,
  TransactionViewer,
} from "../../../Components";

import { useTheme } from "../../../Theme";
import styles from "./styles";


export default function ShowCategoryTransactionScreen({ navigation, route }) {
  const { Layout } = useTheme();
  const { dateObject, updateFilterState, filterType, filterTimestamps, filterValue, setFilterValue } = useTabMenu();
  const { categoryId } = route.params;

  const categoryCreateEditModalRef = useRef(null);
  const deleteModalRef = useRef(null);
  const bottomSheetModalRef = useRef(null);
  const headerDetails = useRef([]);
  const initialLoad = useRef(true);
  const previousFilterType = useRef(filterType.current);
  const previousFilterTimestamps = useRef(JSON.parse(JSON.stringify(filterTimestamps.current)));

  const [previousFilterState, setPreviousFilterState] = useState(dateObject);
  const [isTransactions, setIsTransactions] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenCategoryModal, setIsOpenCategoryModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [category, setCategory] = useState({
    accountBalance: 0,
    income: 0,
    income_count: 0,
    expenses: 0,
    expense_count: 0,
  });
  const [transactionList, setTransactionList] = useState({
    transactions: [],
    accounts: [],
    categories: [],
  });
  const [categoryEdit, setCategoryEdit] = useState(Date.now());
  const [currencyName, setCurrencyName] = useState("United States Dollar");
  const [userDefaultCurrencySymbol, setUserDefaultCurrencySymbol] = useState("USD");


  useEffect(() => {
    if (!initialLoad.current)
      categoryCreateEditModalRef.current.present();

  }, [category]);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, [isOpenDeleteModal, isOpenCategoryModal]);


  const handleShowModal = useCallback(text => {
    deleteModalRef.current?.present();
  }, []);

  const handleCloseModal = useCallback(() => {
    deleteModalRef.current?.dismiss();
  }, []);

  const handleShowCategoryCreateEdit = useCallback(() => {
    categoryCreateEditModalRef.current?.present();
  }, []);

  const handleCloseCategoryCreateEdit = useCallback(async () => {
    let defaultCurrency = await getItemFromAsyncStorage(DEFAULT_CURRENCY);
    await getTransactions(filterTimestamps.current, defaultCurrency);
    await getDetailsByCategoryId(filterTimestamps.current, defaultCurrency);
    categoryCreateEditModalRef.current?.dismiss();
  }, []);

  const onMonthChange = useCallback(async () => {
    let defaultCurrency = await getItemFromAsyncStorage(DEFAULT_CURRENCY);
    await getTransactions(filterTimestamps.current, defaultCurrency);
    await getDetailsByCategoryId(filterTimestamps.current, defaultCurrency);
  }, []);

  const handleShowFilterModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseFilterModal = useCallback(() => {

    bottomSheetModalRef.current?.dismiss();
  }, []);

  const backAction = () => {
    if (isOpenDeleteModal) {
      deleteModalRef.current?.close();
      return true;
    } else if (isOpenCategoryModal) {
      categoryCreateEditModalRef.current?.close();
      return true;
    } else {
      navigation.goBack();
      return true;
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      if (filterTimestamps.current.length === 0) {
        filterTimestamps.current[0] = moment(new Date()).utc().startOf("month").format("X");
        filterTimestamps.current[1] = moment(new Date()).utc().endOf("month").format("X");
      }
      getItemFromAsyncStorage(DEFAULT_CURRENCY).then((value) => {
        getTransactions(filterTimestamps.current, value);
        getDetailsByCategoryId(filterTimestamps.current, value);
        setUserDefaultCurrencySymbol(value);
        getCurrencyLongName(value).then((currencyName) => {
          setCurrencyName(currencyName);
        });

      });
    }, []),
  );

  //for the category deletion, we will follow a soft deletion mechanism where we change a flag that related to deleting category
  // and filter using that flag when retrieving categories rather than completely deleting it from table
  const onDelete = async () => {

    await Category.softDeleteCategory(categoryId);
    handleCloseModal();
    navigation.pop();

  };

  const getDetailsByCategoryId = async (timestamps = [], currency = userDefaultCurrencySymbol) => {

    let categoryWithExpenseAndIncome = await Category.getDetailsByCategoryId(filterType,timestamps,categoryId,currency);

    if (categoryWithExpenseAndIncome.length > 0) {
      setCategory(categoryWithExpenseAndIncome[0]);
      setCategoryEdit(Date.now());
    }
  };


  const getTransactions = async (timestamps = [], currency = userDefaultCurrencySymbol) => {

    let transactions = await Transaction.getTransactionsByCategory(categoryId,filterType,timestamps);

    let accounts = await Promise.all(transactions.map(transaction => transaction.account.fetch()));

    let categories = await Promise.all(transactions.map(transaction => transaction.category.fetch()));

    headerDetails.current = [];
    transactions.forEach((trans, index) => {
      if (trans._raw.purpose != null && trans._raw.purpose === "1")
        return;
      findHeaderDetails(trans, index, transactions, accounts, categories, currency);
    });

    setTransactionList({
      ...transactionList,
      transactions: headerDetails.current,
      accounts: accounts,
      categories: categories,
    });
    setIsTransactions(transactions.length > 0);

  };

  const findHeaderDetails = (item, index, transactions, accounts, categories, currency) => {
    if (!headerDetails.current.some(c => c.title === moment(item._raw.time * 1000).format("MMMM DD"))) {

      let lastIndex = transactions.map(i =>
        (moment(i._raw.time * 1000).format("MMMM DD") === moment(item._raw.time * 1000).format("MMMM DD"))).lastIndexOf(true);
      //get total amount for headers
      transactions.forEach((trx, idx) => {
        trx._raw.account = accounts[idx]._raw;

        //adding to account details
        if (trx._raw.purpose != null && trx._raw.purpose === "2") {
          trx._raw.toAccount = accounts[idx + 1]._raw;
          trx._raw.toTransaction = transactions[idx + 1]._raw;
        }
        trx._raw.category = categories[idx]._raw;
      });

      headerDetails.current.push({
        index: index,
        title: moment(item._raw.time * 1000).format("MMMM DD"),
        currency: item._raw.currency,
        dayName: getDayName(item),
        amount: transactions.slice(index, lastIndex + 1).reduce((accumulator, object, accIndex) => {
          return accumulator + (object._raw.purpose !== "1" && object._raw.purpose !== "2" && accounts[accIndex]._raw.currency === currency ? (object._raw.type === "2" ? (-Number(object._raw.amount)) : Number(object._raw.amount)) : 0);
        }, 0),
        data: [{
          list: {
            transactions: transactions.slice(index, lastIndex + 1),
          },
        }],
      });
    }
  };


  return (
    <View
      style={[Layout.fill, { backgroundColor: category.color }]}>
      <View style={styles.parentContainer}>
        <FlatList
          renderItem={null}
          data={[]}
          ListHeaderComponent={
            <View style={styles.subContainer}>
              <AccountCategoryHeader
                onClose={() => navigation.goBack()}
                title={category.name}
                onDelete={handleShowModal}
                onEdit={handleShowCategoryCreateEdit}
                colorCode={category.color}
              />
              <TitleBalanceAdd
                title={category.name}
                balance={category.accountBalance.toString()}
                currency={userDefaultCurrencySymbol}
                colorCode={category.color}
                icon={category.icon}
              />
              <View style={styles.accountCardView}>
                <View style={{ flex: 1, paddingEnd: 5 }}>
                  <AccountCategorySubCard
                    title="Income"
                    balance={Number(category.income).toFixed(2).toString()}
                    transactions={category.income_count}
                    currencyName={currencyName}
                    onPressAdd={() =>
                      navigate("AddTransactionScreen", {
                        type: "income",
                        isFromCategory: true,
                        existingDetails: { categories: category },
                      })
                    }
                    colorCode={category.color}
                  />
                </View>
                <View style={{ flex: 1, paddingStart: 5 }}>
                  <AccountCategorySubCard
                    title="Expense"
                    balance={Number(category.expenses).toFixed(2).toString()}
                    transactions={category.expense_count}
                    currencyName={currencyName}
                    onPressAdd={() =>
                      navigate("AddTransactionScreen", {
                        type: "expense",
                        isFromCategory: true,
                        existingDetails: { categories: category },
                      })
                    }
                    colorCode={category.color}
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
                bottomSheetModalRef={bottomSheetModalRef}
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
          handleCloseModal={handleCloseModal}
          heading1="Confirm deletion"
          message="Note: Deleting this category will remove it permanently."
          onDelete={onDelete}
          onChange={idx => setIsOpenDeleteModal(idx >= 1)}
          nextDefault={2}
        />
        <CategoryCreateAndEdit
          categoryCreateEditModalRef={categoryCreateEditModalRef}
          handleCloseModal={handleCloseCategoryCreateEdit}
          type="edit"
          onChange={idx => setIsOpenCategoryModal(idx >= 1)}
          existingDetails={category}
          key={categoryEdit}
        />
      </View>
    </View>
  );
}
