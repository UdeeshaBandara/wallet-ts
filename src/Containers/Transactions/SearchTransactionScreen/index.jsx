import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  BackHandler,
  RefreshControl,
  SafeAreaView,
  SectionList,
  Text,
  View,
} from "react-native";
import moment from "moment";

import Transaction from "../../../Database/Model/Transaction";

import { DEFAULT_CURRENCY } from "../../../Util/Constants";
import { getItemFromAsyncStorage } from "../../../Util/Storage";
import { getDayName, renderTransactionHeader, renderTransactions } from "../../../Util/Common";
import {
  SearchBar,
} from "../../../Components";

import { useTheme } from "../../../Theme";
import styles from "./styles";

export default function SearchTransactionScreen({ navigation, route }) {
  const { Layout, Colors } = useTheme();
  const headerDetails = useRef([]);
  const transactionsOriginal = useRef([]);
  const accounts = useRef([]);
  const categories = useRef([]);
  const isFiltered = useRef("");
  const masterData = useRef({
    transactions: [],
    accounts: [],
    categories: [],
  });

  const [refreshing, setRefreshing] = useState(false);
  const [isTransactions, setIsTransactions] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState();

  const [currencySymbol, setCurrencySymbol] = useState("USD");

  useFocusEffect(
    useCallback(() => {

      getItemFromAsyncStorage(DEFAULT_CURRENCY).then(async (value) => {
        let res = (value !== "" ? value : "USD");
        setCurrencySymbol(res);

        await getTransactions(res, isFiltered.current);


      });
    }, []),
  );

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const backAction = () => {
    navigation.goBack();
    return true;
  };


  const searchHandler = async (text) => {
    setSearchText(text);
    isFiltered.current = text;
    if (text) {
      const newData = transactionsOriginal.current.filter(function(item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.trim().toUpperCase();
        return itemData.indexOf(textData) > -1;
      });


      headerDetails.current = [];
      let currency = await getItemFromAsyncStorage(DEFAULT_CURRENCY);
      for (const trans of newData) {
        const index = newData.indexOf(trans);

        if (trans._raw.purpose != null && trans._raw.purpose === "1")
          continue;
        await findHeaderDetails(trans, index, newData, currency);
      }

      setSearchData({
        ...searchData,
        transactions: headerDetails.current,
        accounts: accounts.current,
        categories: categories.current,
      });
      setIsTransactions(newData.length > 0);
    } else {
      setSearchData({
        ...searchData,
        transactions: masterData.current.transactions,
        accounts: accounts.current,
        categories: categories.current,
      });
      setIsTransactions(transactionsOriginal.current.filter(item => item.title != "").length > 0);
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getTransactions(currencySymbol, isFiltered.current);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handlerClearInput = () => {
    if (searchText === "") {
      navigation.goBack();
    } else {
      setSearchText("");
      isFiltered.current = "";
      setSearchData({
        ...searchData,
        transactions: masterData.current.transactions,
        accounts: accounts.current,
        categories: categories.current,
      });
      setIsTransactions(masterData.current.transactions.length > 0);
    }
  };

  const getTransactions = async (currency, searchText) => {

    let transactions = await Transaction.getTransactionForSearch()

    transactionsOriginal.current = transactions;
    accounts.current = await Promise.all(transactions.map(transaction => transaction.account.fetch()));

    categories.current = await Promise.all(transactions.map(transaction => transaction.category.fetch()));


    headerDetails.current = [];
    for (const trans of transactions) {
      const index = transactions.indexOf(trans);
      if (trans._raw.purpose != null && trans._raw.purpose === "1")
        continue;
      await findHeaderDetails(trans, index, transactions, currency);
    }
    masterData.current = {
      transactions: headerDetails.current,
      accounts: accounts.current,
      categories: categories.current,
    };

    if (searchText === "") {

      setSearchData({
        ...searchData,
        transactions: headerDetails.current,
        accounts: accounts.current,
        categories: categories.current,
      });
      setIsTransactions(transactions.filter(item => item.title != "").length > 0);
    } else {
      await searchHandler(searchText);
    }
  };

  const findHeaderDetails = async (item, index, transactions, currency) => {
    if (!headerDetails.current.some(c => c.title === moment(item._raw.time * 1000).format("MMMM DD"))) {

      let lastIndex = transactions.map(i =>
        (moment(i._raw.time * 1000).format("MMMM DD") === moment(item._raw.time * 1000).format("MMMM DD"))).lastIndexOf(true);


      //get total amount for headers
      for (const trx of transactions) {
        const idx = transactions.indexOf(trx);
        trx._raw.account = accounts.current.find(x => x.id === transactions[idx]._raw.account_id)._raw;

        //adding to account details
        if (trx._raw.purpose != null && trx._raw.purpose === "2") {
          trx._raw.toAccount = accounts.current.find(x => x.id === transactions[idx + 1]._raw.account_id)._raw;
          trx._raw.toTransaction = transactions[idx + 1]._raw;
        }
        trx._raw.category = categories.current.find(x => x.id === transactions[idx]._raw.category_id)._raw;
      }

      headerDetails.current.push({
        index: index,
        title: moment(item._raw.time * 1000).format("MMMM DD"),
        currency: item._raw.currency,
        dayName: getDayName(item),
        amount: transactions.slice(index, lastIndex + 1).reduce((accumulator, object, accIndex) => {
          return accumulator + (object._raw.purpose !== "1" && object._raw.purpose !== "2" && accounts.current[accIndex]._raw.currency === currency ? (object._raw.type === "2" ? (-Number(object._raw.amount)) : Number(object._raw.amount)) : 0);
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
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <View style={styles.container}>
        <SearchBar
          autoFocus={true}
          value={searchText}
          placeholder="Search transactions"
          outlinedColor={Colors.gray001}
          onChangeText={text => searchHandler(text)}
          canClear={true}
          onPressClear={handlerClearInput}
        />
        <View
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>

          <View style={styles.searchResultsContainer}>
            {isTransactions ? (
              <SectionList
                ListFooterComponent={<View />}
                ListFooterComponentStyle={{ height: 350 }}
                sections={searchData.transactions}
                renderSectionHeader={item =>
                  renderTransactionHeader(item.section, currencySymbol)

                }
                renderItem={item =>
                  renderTransactions(item, navigation)

                }
              />
            ) : (
              <View style={styles.noTransactionView}>
                <Text style={styles.txtNoTransactions}>No transactions</Text>
                <Text style={styles.txtNoTransactionsDesc}>
                  You don't have any transactions for {searchText} query
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
