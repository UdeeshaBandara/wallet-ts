import React, { useEffect, useMemo, useState } from "react";
import { FlatList, Keyboard, SafeAreaView, Text, View } from "react-native";

import Account from "../../../Database/Model/Account";
import Buffer from "../../../Database/Model/Buffer";
import Category from "../../../Database/Model/Category";

import {
  DEFAULT_CURRENCY,
  IS_ACCOUNT_SKIP_AT_LEAST_ONE_TIME, IS_ONBOARDING_COMPLETED,
} from "../../../Util/Constants";
import {
  getCurrencies,
} from "../../../Util/Common";
import { navigate, navigateAndSimpleReset } from "../../../Navigators/Root";
import { getItemFromAsyncStorage, setItemToAsyncStorage } from "../../../Util/Storage";

import {
  BackButton,
  CurrencyList,
  GradientCard,
  LongSubmitButton,
  SearchBar,
} from "../../../Components";

import { useTheme } from "../../../Theme";
import styles from "./styles";

export default function SetCurrencyScreen() {
  const { Layout, Colors } = useTheme();

  const [currency, setCurrency] = useState("USD");
  const [currencyName, setCurrencyName] = useState("United States Dollar");
  const [filterCurrencies, setFilterCurrencies] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const currencies = await getCurrencies();
      setFilterCurrencies(currencies);
      setMasterData(currencies);
    };
    fetchCurrencies();

  }, []);

  const onChangeCurrency = (code, name) => {
    setCurrency(code);
    setCurrencyName(name);
    setIsSelected(true);
  };

  const onFilterCurrency = text => {
    if (text) {
      const newData = Object.values(masterData).filter(function(item) {
        const itemData = item.code ? item.code.toUpperCase() : "".toUpperCase();
        const currencyName = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1 || currencyName.indexOf(textData) > -1;
      });
      setFilterCurrencies(newData);
    } else {
      setFilterCurrencies(masterData);
    }
  };

  const checkAndBatchUpdateAccount = async () => {
    await setItemToAsyncStorage(DEFAULT_CURRENCY, currency);
    await Buffer.addBufferAmountToDb(currency);
    let isAccountSkipAtLeastOneTime = await getItemFromAsyncStorage(IS_ACCOUNT_SKIP_AT_LEAST_ONE_TIME);
    let isOnboardingComplete = await getItemFromAsyncStorage(IS_ACCOUNT_SKIP_AT_LEAST_ONE_TIME);

    // If user goes back to Set Currency screen after setting an account,
    // pressing 'Set' should update if the already added account currency was changed
    // plus it redirects user directly to home page since he has already added an account
    if (await Account.isAccountExist()) {

      await Account.updateCurrencyInAllAccounts(currency);

      await setItemToAsyncStorage(IS_ONBOARDING_COMPLETED, true);
      await Category.batchInsertCategories();
      navigateAndSimpleReset('DashBoard');

    } else if (isAccountSkipAtLeastOneTime) {

      await Account.batchInsertAccounts();

      if (!isOnboardingComplete)
        await Category.batchInsertCategories();

      navigateAndSimpleReset("DashBoard");

    } else {
      navigate("AccountAndCategoryScreen", { screen: "0", currency: currency });
    }
  };

  const renderCurrencyList = (filterCurrencies,currency) => {
    return (<View style={{ marginHorizontal: 20 }}>
      <CurrencyList
        currencies={filterCurrencies}
        currency={currency}
        onChangeCurrency={(code, name) => onChangeCurrency(code, name)}
      />
    </View>);
  };

  const currencyListMemo = useMemo(() => renderCurrencyList(filterCurrencies,currency), [filterCurrencies,currency]);


  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <FlatList
        data={[]}
        renderItem={null}
        maxToRenderPerBatch={10}
        stickyHeaderIndices={[0]}
        keyboardShouldPersistTaps="always"
        style={{ flex: 1 }}
        ListHeaderComponent={
          <View style={{ backgroundColor: Colors.white }}>
            <View style={styles.container}>
              <View style={styles.header}>
                <BackButton onPress={() => navigate("OfflineAccountScreen")} />
              </View>
              <Text style={styles.title}>Set Currency</Text>
              <View style={styles.cardView}>
                <GradientCard
                  currency={currency}
                  name={currencyName}
                  bgColor={
                    !isSelected ? ["#17CEA0", "#44F0C6"] : ["#6F51FF", "#8B74FE"]
                  }
                  status={!isSelected ? "Pre - selected" : "selected"}
                />
              </View>
              <View style={styles.searchView}>
                <View style={styles.searchContainer}>
                  <SearchBar
                    placeholder="Search ( USD,EUR,GBP,BTC,etc )"
                    onChangeText={text => onFilterCurrency(text.trim())}
                    onPress={Keyboard.dismiss}
                  />
                </View>
              </View>
            </View>
          </View>}
        ListFooterComponent={currencyListMemo}
      />
      <View style={styles.btnSetView}>
        <LongSubmitButton name="Set" onPress={checkAndBatchUpdateAccount} />
      </View>
    </SafeAreaView>
  );
}
