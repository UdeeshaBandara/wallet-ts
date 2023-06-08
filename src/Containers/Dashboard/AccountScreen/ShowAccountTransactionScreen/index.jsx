import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { BackHandler, FlatList, SectionList, View } from "react-native";
import moment from "moment";

import Account from "../../../../Database/Model/Account";
import Transaction from "../../../../Database/Model/Transaction";
import TrnLinkRecord from "../../../../Database/Model/TrnLinkRecord";

import { database } from "../../../../../index";
import { DEFAULT_CURRENCY } from "../../../../Util/Constants";
import { navigate } from "../../../../Navigators/Root";
import {
  getCurrencyLongName,
  getDayName,
  renderTransactionHeader,
  renderTransactions,
} from "../../../../Util/Common";
import { getItemFromAsyncStorage } from "../../../../Util/Storage";
import { useTabMenu } from "../../../../Navigators/TabContext";

import {
  AccountCategoryHeader,
  AccountCategorySubCard,
  DeleteAdd,
  TitleBalanceAdd,
  TransactionViewer,
} from "../../../../Components";

import { useTheme } from "../../../../Theme";
import styles from "./styles";

export default function ShowAccountTransactionScreen({ navigation, route }) {
  const { Layout } = useTheme();
  const { dateObject, updateFilterState, filterType, filterTimestamps, filterValue, setFilterValue } = useTabMenu();
  const { accountId } = route.params;
  const deleteModalRef = useRef(null);
  const bottomSheetModalRef = useRef(null);
  const headerDetails = useRef([]);
  const previousFilterType = useRef(filterType.current);
  const previousFilterTimestamps = useRef(JSON.parse(JSON.stringify(filterTimestamps.current)));

  const [previousFilterState, setPreviousFilterState] = useState(dateObject);
  const [isTransactions, setIsTransactions] = useState(true);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [account, setAccount] = useState({
    accountBalance: 0,
    income: 0,
    income_count: 0,
    expense: 0,
    expense_count: 0,
    icon: "",
  });
  const [currencySymbol, setCurrencySymbol] = useState("USD");
  const [currencyName, setCurrencyName] = useState("United States Dollar");
  const [defaultCurrencySymbol, setDefaultCurrencySymbol] = useState("USD");
  const [transactionList, setTransactionList] = useState({
    transactions: [],
    accounts: [],
    categories: [],
  });

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, [isOpenDeleteModal]);

  useFocusEffect(
    React.useCallback(() => {
      if (filterTimestamps.current.length === 0) {
        filterTimestamps.current[0] = moment(new Date()).utc().startOf("month").format("X");
        filterTimestamps.current[1] = moment(new Date()).utc().endOf("month").format("X");
      }

      getItemFromAsyncStorage(DEFAULT_CURRENCY).then((value) => {

        setDefaultCurrencySymbol(value);
        getDetailsByAccountId(filterTimestamps.current, value);
      });

    }, []),
  );

  const handleShowModal = useCallback(text => {
    deleteModalRef.current?.present();
  }, []);

  const handleCloseModal = useCallback(text => {
    deleteModalRef.current?.dismiss();
  }, []);

  const handleShowFilterModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseFilterModal = useCallback(() => {

    bottomSheetModalRef.current?.dismiss();
  }, []);

  const onMonthChange = useCallback(async () => {
    let defaultCurrency = await getItemFromAsyncStorage(DEFAULT_CURRENCY);
    await getDetailsByAccountId(filterTimestamps.current, defaultCurrency);

  }, []);

  const backAction = () => {
    if (isOpenDeleteModal) {
      deleteModalRef.current?.close();
      return true;
    } else if (!isOpenDeleteModal) {
      navigation.goBack();
      return true;
    }
  };

  const getDetailsByAccountId = async (timestamps = [], defaultCurrencyParam) => {

    let currentDate = new Date();
    let currentDayTimestamp = moment(currentDate).utc().endOf("day").format("X");

    let accountWithExpenseAndIncome = await Account.getDetailsByAccountId(filterType, timestamps, accountId, currentDayTimestamp);

    if (accountWithExpenseAndIncome.length > 0) {
      setAccount(accountWithExpenseAndIncome[0]);
    }
    setCurrencySymbol(accountWithExpenseAndIncome.length > 0 ? accountWithExpenseAndIncome[0].currency : "USD");
    let currencyName = await getCurrencyLongName(accountWithExpenseAndIncome.length > 0 ? accountWithExpenseAndIncome[0].currency : "USD");
    setCurrencyName(currencyName);
    await getTransactions(filterTimestamps.current, defaultCurrencyParam, (accountWithExpenseAndIncome.length > 0 ? accountWithExpenseAndIncome[0].currency : "USD"));
  };

  //in order to retrieve account wise transactions, pass purpose type as 0 to retrieve normal income/expense transactions
  //then retrieve transfer transactions ids from trn_links table and pass those transaction ids into where in clause
  const getTransactions = async (timestamps = [], defaultCurrencyParam, accountCurrency) => {

    let transactions = await Transaction.getTransactionsByAccount(accountId, filterType, timestamps);

    let accounts = await Promise.all(transactions.map(transaction => transaction.account.fetch()));

    let categories = await Promise.all(transactions.map(transaction => transaction.category.fetch()));

    headerDetails.current = [];
    transactions.forEach((trans, index) => {
      if (trans._raw.purpose != null && trans._raw.purpose === "1" && transactions[index] !== null && transactions[index]._raw.purpose === "2")
        return;
      findHeaderDetails(trans, index, transactions, accounts, categories, defaultCurrencyParam, accountCurrency);
    });

    setTransactionList({
      ...transactionList,
      transactions: headerDetails.current,
      accounts: accounts,
      categories: categories,
    });
    setIsTransactions(transactions.length > 0);
  };

  const findHeaderDetails = (item, index, transactions, accounts, categories, defaultCurrencyParam, accountCurrency) => {
    if (!headerDetails.current.some(c => c.title === moment(item._raw.time * 1000).format("MMMM DD"))) {

      let lastIndex = transactions.map(i =>
        (moment(i._raw.time * 1000).format("MMMM DD") === moment(item._raw.time * 1000).format("MMMM DD"))).lastIndexOf(true);
      let sum = 0;
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
        amount: defaultCurrencyParam === accountCurrency ? getHeaderTotalAmount(transactions, index, lastIndex) : 0,
        data: [{
          list: {
            transactions: transactions.slice(index, lastIndex + 1),
          },
        }],
      });
    }
  };

  const getHeaderTotalAmount = (transactions, index, lastIndex) => {
    return transactions.slice(index, lastIndex + 1).reduce((accumulator, object) => {
      return accumulator + (object._raw.purpose !== "1" && object._raw.purpose !== "2" ? (object._raw.type === "2" ? (-Number(object._raw.amount)) : Number(object._raw.amount)) : 0);
    }, 0);
  };

  //method to delete entire account and associated transactions
  const onDelete = async () => {

    await database.write(async async => {

      //First remove all non-transfer transactions
      await Transaction.deleteNonTransferTransactions(accountId);

      //retrieve sender's transactions
      let senderAccountTransferTransactions = await TrnLinkRecord.getSenderAccountTransactions(accountId);

      //if such transactions are there, remove those along with their receiving transactions
      if (senderAccountTransferTransactions.length > 0) {

        let senderAccountTransferTransactionsIds = senderAccountTransferTransactions.map(a => a._raw.from_trn_id);

        await Transaction.deleteTransferOutTransactions(senderAccountTransferTransactionsIds);

        await TrnLinkRecord.deleteTransferOutTransaction(accountId);
      }

      //retrieve receiving transactions for deleting account
      let receiverAccountTransferTransactions = await TrnLinkRecord.receiverAccountTransactions(accountId);


      if (receiverAccountTransferTransactions.length > 0) {
        //if receiving transactions are available then search for their relevant parent transaction(sender transactions from other accounts)
        let receiverTransferTransactionsIds = receiverAccountTransferTransactions.map(a => a._raw.from_trn_id);

        let updatedTransaction = await Transaction.getSenderTransactionFromParent(receiverTransferTransactionsIds);

        const transactionLinkUpdates = [];

        //assign self account id for receiving transactions in trans_link table
        receiverAccountTransferTransactions.forEach((singleCashReceivedTransaction, index) => {
          transactionLinkUpdates.push(
            singleCashReceivedTransaction.prepareUpdate(singleRecordPrepare => {
              singleRecordPrepare.from_account_id = receiverAccountTransferTransactions[index].to_account_id;
            }),
          );
        });

        await database.batch(...transactionLinkUpdates);

        const transactionsUpdate = [];

        //assign self account id for sender transactions in transactions table
        updatedTransaction.forEach((trnUpdate, index) => {

          transactionsUpdate.push(
            trnUpdate.prepareUpdate(singleTrnPrepare => {
              singleTrnPrepare._raw.account_id = receiverAccountTransferTransactions[index].to_account_id;
            }),
          );
        });

        await database.batch(...transactionsUpdate);
      }

      //after deleting all related transactions, deleting the account from accounts table
      await Account.deleteAccountById(accountId);

    });
    navigation.pop();
  };


  return (
    <View
      style={[
        Layout.fill,
        { backgroundColor: account.color },
      ]}>
      <View style={styles.parentContainer}>
        <FlatList
          ListHeaderComponent={
            <View style={styles.subContainer}>
              <AccountCategoryHeader
                onClose={() => navigation.goBack()}
                onEdit={() =>
                  navigate("NewAccountScreen", { screenName: "EditAccount", account: account })
                }
                onDelete={handleShowModal}
                colorCode={account.color}
              />
              <TitleBalanceAdd title={account.name} balance={Number(account.accountBalance).toFixed(2).toString()}
                               currency={currencySymbol} isExcluded={account.excluded === "1"}
                               colorCode={account.color} icon={account.icon} />
              <View style={styles.accountCardView}>
                <View style={{ flex: 1, paddingEnd: 5 }}>
                  <AccountCategorySubCard
                    title="Income"
                    balance={Number(account.income).toFixed(2).toString()}
                    transactions={account.income_count}
                    currencyName={currencyName}
                    onPress={() =>
                      navigation.navigate("DisplayTransactionScreen", {
                        type: "income",
                        currencyForAccount: currencySymbol,
                        accountId: accountId,
                        isFromAccount: true,
                      })
                    }
                    onPressAdd={() =>
                      navigate("AddTransactionScreen", {
                        type: "income",
                        existingDetails: { accounts: account },
                        isFromAccount: true, isFromCategory: false,
                      })
                    }
                    colorCode={account.color}
                  />
                </View>
                <View style={{ flex: 1, paddingStart: 5 }}>
                  <AccountCategorySubCard
                    title="Expense"
                    balance={Number(account.expense).toFixed(2).toString()}
                    transactions={account.expense_count}
                    currencyName={currencyName}
                    onPress={() =>
                      navigation.navigate("DisplayTransactionScreen", {
                        type: "expense",
                        currencyForAccount: currencySymbol,
                        accountId: accountId,
                        isFromAccount: true,

                      })
                    }
                    onPressAdd={() =>
                      navigate("AddTransactionScreen", {
                        type: "expense",
                        existingDetails: { accounts: account },
                        isFromAccount: true, isFromCategory: false,
                      })
                    }
                    colorCode={account.color}
                  />
                </View>
              </View>
            </View>
          }
          renderItem={null}
          ListFooterComponent={
            <View style={styles.bottomView}>
              <TransactionViewer
                dateObject={dateObject}
                updateFilterState={updateFilterState}
                filterType={filterType}
                filterTimestamps={filterTimestamps}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                isTransactions={isTransactions}
                onMonthChange={onMonthChange}
                handleShowFilterModal={handleShowFilterModal}
                bottomSheetModalRef={bottomSheetModalRef}
                handleCloseFilterModal={handleCloseFilterModal}
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
                      renderTransactionHeader(item.section, defaultCurrencySymbol)
                    }
                    renderItem={item =>
                      renderTransactions(item, navigation)
                    }
                  />
                </View>
              </TransactionViewer>
            </View>

          } data={[]} />
        <DeleteAdd
          deleteModalRef={deleteModalRef}
          handleCloseModal={handleCloseModal}
          heading1="Confirm deletion"
          message="Note: Deleting this account will remove it permanently and Delete all associated transactions with it."
          onDelete={onDelete}
          onChange={idx => setIsOpenDeleteModal(idx >= 1)}
          nextDefault={2}
        />
      </View>
    </View>
  );
}

