import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  Alert,
  BackHandler,
  Platform,
  SafeAreaView,
  ScrollView,
  SectionList,
  Text,
  View,
} from "react-native";
import moment from "moment";

import Transaction from "../../../Database/Model/Transaction";
import User from "../../../Database/Model/User";

import { DEFAULT_CURRENCY } from "../../../Util/Constants";
import { getItemFromAsyncStorage } from "../../../Util/Storage";
import { navigate } from "../../../Navigators/Root";
import {
  getFormattedBalance,
  getFormattedBalanceWithCents,
  getFormatBalanceInMandK, getDayName, renderTransactionHeader, renderTransactions,
} from "../../../Util/Common";
import TabContainer from "../../../Navigators/TabContainer";
import { useTabMenu } from "../../../Navigators/TabContext";

import {
  IconButton, OutlinedChip,
  OutlinedRoundButton,
  RecordViewer,
  TransactionMainCard,
} from "../../../Components";
import CalenderIcon from "../../../Assets/SVGIcons/CalenderIcon";
import DownIcon from "../../../Assets/SVGIcons/DownIcon";
import Gradient from "../../../Components/Gradient";
import SaveIcon from "../../../Assets/SVGIcons/SaveIcon";
import TransferIcon from "../../../Assets/SVGIcons/TransferIcon";

import { useTheme } from "../../../Theme";
import styles from "./styles";

export default function HomeScreen({ navigation }) {
  const { Layout, Colors } = useTheme();
  const {
    dateObject,
    updateFilterState, filterType, filterTimestamps, filterValue, setFilterValue,
  } = useTabMenu();
  const maxNameLength = Platform.OS === "ios" ? 12 : 11;

  const bottomSheetModalRef = useRef(null);
  const headerDetails = useRef([]);
  const previousFilterType = useRef(filterType.current);
  const previousFilterTimestamps = useRef(JSON.parse(JSON.stringify(filterTimestamps.current)));

  const [previousFilterState, setPreviousFilterState] = useState(dateObject);
  const [isTransactions, setIsTransactions] = useState(false);
  const [isEmptyTransaction, setIsEmptyTransaction] = useState(true);
  const [isOpenRecordViewerModal, setIsOpenRecordViewerModal] = useState(false);
  const [cashFlowAmount, setCashFlowAmount] = useState(0);
  const [totalIncomeAmount, setTotalIncomeAmount] = useState(0);
  const [totalExpenseAmount, setTotalExpenseAmount] = useState(0);
  const [currencySymbol, setCurrencySymbol] = useState("USD");
  const [todayTotal, setTodayTotal] = useState(0);
  const [transactionList, setTransactionList] = useState({
    transactions: [],
    accounts: [],
    categories: [],
  });
  const [allTransactionList, setAllTransactionList] = useState({
    transactions: [],
    accounts: [],
    categories: [],
  });
  const [userName, setUserName] = useState("");

  useFocusEffect(
    React.useCallback(() => {

      getItemFromAsyncStorage(DEFAULT_CURRENCY).then((value) => {
        setCurrencySymbol(value !== "" ? value : "USD");
        getTransactions(filterType.current, [filterTimestamps.current[0], filterTimestamps.current[1]], value);
        getCashFlowAmount(filterType.current, [filterTimestamps.current[0], filterTimestamps.current[1]], value);
        getTotalCount(value);
        getUser();

      });
    }, []),
  );

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, [navigation]);

  useEffect(() => {
    previousFilterTimestamps.current = [...filterTimestamps.current];
    previousFilterType.current = filterType.current;
    setPreviousFilterState(dateObject);
  }, [dateObject]);

  const handleShowModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const backAction = () => {
    if (isOpenRecordViewerModal) {
      bottomSheetModalRef.current?.close();
      return true;
    } else {
      Alert.alert("Are you sure you want exit?", "", [
        {
          text: "YES",
          onPress: () => {
            BackHandler.exitApp();
          },
        },
        {
          text: "NO",
          onPress: () => {
          },
        },
      ]);
      return true;
    }
  };

  const getCashFlowAmount = async (type = -1, timestamps = [], currency) => {

    let { incomeTransactions, expenseTransactions } = await Transaction.getCashFlowAmount(type, timestamps, currency);

    setTotalExpenseAmount(expenseTransactions[0].total == null ? 0 : expenseTransactions[0].total);
    setTotalIncomeAmount(incomeTransactions[0].total == null ? 0 : incomeTransactions[0].total);
    setCashFlowAmount((incomeTransactions[0].total - expenseTransactions[0].total));
  };

  const getTransactions = async (type = -1, timestamps = [], currency) => {

    let transactions = await Transaction.getHomeScreenTransactions(type, timestamps);

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


  const getTotalCount = async (currency) => {
    let transactions = await Transaction.getTransactionsExcludingBalanceTransactions();

    let accounts = await Promise.all(
      transactions.map(transaction => transaction.account.fetch()),
    );
    let categories = await Promise.all(
      transactions.map(transaction => transaction.category.fetch()),
    );
    setAllTransactionList({
      ...allTransactionList,
      transactions: transactions,
      accounts: accounts,
      categories: categories,
    });
    let todayTimestamp = moment(new Date()).utc().endOf("day").format("X");
    if (transactions.length === 0) {
      setIsEmptyTransaction(true);
      setTodayTotal(0);
    } else {
      setIsEmptyTransaction(false);//updating today total at the top
      setTodayTotal(transactions.reduce((accumulator, object, currentIndex) => {
        return accumulator + ((accounts[currentIndex]._raw.excluded === "0" && accounts[currentIndex]._raw.currency === currency) ? ((object._raw.purpose === "0" ? (Number(object._raw.time) < todayTimestamp ? (object._raw.type === "2" ? (-Number(object._raw.amount)) : Number(object._raw.amount)) : 0) : 0)) : 0);
      }, 0));
    }
  };

  const getUser = async () => {
    let user = await User.getUser();
    setUserName(user.firstName);
  };

  return (
    <TabContainer>
      <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.white }]}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.nameView}>
              <Text
                style={{ ...styles.txtHi, ...userName.toString().length > maxNameLength && { marginBottom: -10 } }}>Hi</Text>
              {userName.toString().length <= maxNameLength &&
                <Text style={[styles.userName, { marginLeft: 5 }]}>{userName}</Text>}
            </View>
            <View style={styles.headerRightView}>
              <RecordViewer
                setChoose={setFilterValue}
                dateObject={dateObject}
                updateFilterState={updateFilterState}
                getRecodeValueHandler={(value, type, timestamps) => {
                  setFilterValue(value);
                  filterType.current = type;
                  filterTimestamps.current = timestamps;
                  getTransactions(type, timestamps, currencySymbol);
                  getCashFlowAmount(type, timestamps, currencySymbol);
                }}
                handleCloseModal={handleCloseModal}
                bottomSheetModalRef={bottomSheetModalRef}
                onChange={idx => setIsOpenRecordViewerModal(idx >= 1)}
                setPreviousFilterState={setPreviousFilterState}
                previousFilterState={previousFilterState}
                previousFilterType={previousFilterType}
                previousFilterTimestamps={previousFilterTimestamps}
                filterType={filterType}
                filterTimestamps={filterTimestamps}
              >
                <View style={{ maxWidth: 200 }}>
                  <OutlinedChip
                    name={filterValue}
                    icon={<CalenderIcon />}
                    onPress={handleShowModal}
                  />
                </View>
              </RecordViewer>
              <View style={{ marginLeft: 12 }}>
                <OutlinedRoundButton
                  icon={<DownIcon />}
                  onPress={() =>
                    navigate("TopMenuScreen", {
                      transactionList: {
                        transactions: allTransactionList?.transactions.map(
                          x => x["_raw"],
                        ),
                        accounts: allTransactionList?.accounts.map(
                          x => x["_raw"],
                        ),
                        categories: allTransactionList?.categories.map(
                          x => x["_raw"],
                        ),
                      },
                    })
                  }
                />
              </View>
            </View>
          </View>
          {userName.toString().length > maxNameLength &&
            <Text numberOfLines={3} style={styles.userName}>{userName}</Text>}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}>
            <Text style={styles.balance}>{currencySymbol} </Text>
            <Text style={styles.boldBalance}>
              {getFormatBalanceInMandK(todayTotal) < 100000
                ? getFormattedBalanceWithCents(todayTotal.toFixed(2)).balanceWithThousandSeparator
                : getFormatBalanceInMandK(todayTotal)}
            </Text>
            {getFormatBalanceInMandK(todayTotal) < 100000 && (
              <Text style={styles.subBalance}>
                {" "}
                .{getFormattedBalanceWithCents(todayTotal.toFixed(2)).cents}
              </Text>
            )}
          </View>
          <View style={styles.recodeViewer}>
            <View style={[styles.recodeViewerCol, { paddingEnd: 4 }]}>
              <TransactionMainCard
                transactionType="Income"
                bgColor={["#17CEA0", "#44F0C6"]}
                balance={totalIncomeAmount.toFixed(2)}
                currency={currencySymbol}
                onPress={() =>
                  navigation.navigate("DisplayTransactionScreen", {
                    type: "income",
                    isFromAccount: false,
                  })
                }
              />
            </View>
            <View style={[styles.recodeViewerCol, { paddingStart: 4 }]}>
              <TransactionMainCard
                transactionType="Expenses"
                bgColor={["#16151A", "#AAA9AF"]}
                balance={totalExpenseAmount.toFixed(2)}
                currency={currencySymbol}
                onPress={() =>
                  navigation.navigate("DisplayTransactionScreen", {
                    type: "expense",
                    isFromAccount: false,
                  })
                }
              />
            </View>
          </View>

          {isTransactions && (
            <View style={{ flexDirection: "column" }}>
              <Text style={cashFlowAmount < 0 ? styles.cashFlowNegative : styles.cashFlow}>
                Cash
                flow: {cashFlowAmount > 0 ? "+" + getFormattedBalance(cashFlowAmount.toFixed(2)) : getFormattedBalance(cashFlowAmount.toFixed(2))}{" "}
                {currencySymbol}
              </Text>
              <View style={{ paddingHorizontal: 10 }}>
                <View style={styles.divider} />
              </View>
            </View>
          )}
          <View>
            <View style={styles.transactionViewer}>
              {isTransactions ? (
                <SectionList
                  ListFooterComponent={<View />}
                  ListFooterComponentStyle={{ height: 400 }}
                  sections={transactionList.transactions}
                  renderSectionHeader={item =>
                    renderTransactionHeader(item.section, currencySymbol)
                  }
                  renderItem={item =>
                    renderTransactions(item, navigation)
                  }
                />
              ) : (
                <ScrollView contentContainerStyle={{ paddingBottom: 350 }}>
                  <View>
                    {isEmptyTransaction ? (
                      <View style={styles.initialCard}>
                        <Gradient
                          colors={["#6B4CFF", "#583FD3"]}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}>
                          <View style={styles.initialCardInner}>
                            <Text style={styles.initialTitle}>
                              Adjust your initial balance
                            </Text>
                            <Text style={styles.initialDesc}>
                              {
                                "Let’s get started. Go to ‘’Accounts’’ ->Top an account -> Top its balance ->Enter current balance. Thats it!"
                              }
                            </Text>
                          </View>
                          <View style={styles.initialCardBtnView}>
                            <IconButton
                              title="To accounts"
                              icon={<SaveIcon />}
                              textColor={"#6B4CFF"}
                              bgColor={Colors.white}
                              onPress={() => navigate("AccountScreen")}
                            />
                          </View>
                        </Gradient>
                      </View>
                    ) : null}
                    <View style={styles.noTransactionsIcoView}>
                      <TransferIcon />
                    </View>

                    <Text style={styles.txtNoTransactions}>
                      No transactions
                    </Text>
                    <Text style={styles.txtNoTransactionsMessage}>
                      You don't have any transactions for {"\n"}
                      {filterValue}
                      {"\n"}You can add one by tapping the "+"{"\n"}button
                    </Text>
                  </View>
                </ScrollView>
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TabContainer>
  );
}
