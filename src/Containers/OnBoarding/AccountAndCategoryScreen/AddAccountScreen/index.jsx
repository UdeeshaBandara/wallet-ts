import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView, SafeAreaView, Text, View, TouchableOpacity, BackHandler } from "react-native";


import Account from "../../../../Database/Model/Account";
import Category from "../../../../Database/Model/Category";

import { accounts, IS_ONBOARDING_COMPLETED } from "../../../../Util/Constants";
import { navigate, navigateAndSimpleReset } from "../../../../Navigators/Root";
import { setItemToAsyncStorage } from "../../../../Util/Storage";

import {
  AddButton,
  BackButton,
  Card,
  Chip,
  LongSubmitButton,
} from "../../../../Components";

import { useTheme } from "../../../../Theme";
import styles from "./styles";

export default function AddAccountScreen({ route }) {
  const { Colors, Layout } = useTheme();
  const { currency } = route.params;
  const scrollViewRef = useRef();
  const isSavingPending = useRef(false);

  const [account, setAccount] = useState([]);
  const [defaultAccountsList, setDefaultAccounts] = useState(accounts);

  useFocusEffect(
    useCallback(() => {
      addAccount();
    }, []),
  );

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", goBack);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", goBack);
    };
  }, []);

  const goBack = () => {
    navigate("SetCurrencyScreen");
    return true;
  };

  const addAccount = async () => {

    let accountsWithBalance = await Account.getAccountsWithTotalBalance();

    let defaultAccounts = [...defaultAccountsList];

    accountsWithBalance.forEach(dbAccount => {
      let index = defaultAccounts.findIndex(
        account => dbAccount.name === account.name,
      );

      if (index > -1) {
        defaultAccounts.splice(index, 1);
        setDefaultAccounts(defaultAccounts);
      }
    });

    setAccount([...accountsWithBalance]);
  };

  const addAccountsToDbAndUpdateUI = async item => {
    if (!isSavingPending.current) {
      isSavingPending.current = true;
      await Account.addAccountsToDb(item, currency);
      await addAccount();
      isSavingPending.current = false;
    }
  };

  const onFinish = async () => {
    if (!isSavingPending.current) {
      await setItemToAsyncStorage(IS_ONBOARDING_COMPLETED, true);
      await Category.batchInsertCategories();
      navigateAndSimpleReset('DashBoard');
      isSavingPending.current = true;
    }
  };

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackButton onPress={goBack} />
        </View>
        <View style={styles.accountContainer}>
          <Text style={styles.title}>Add accounts</Text>
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current.scrollToEnd({ animated: true })
            }>
            <View style={styles.accountView}>
              {account?.map((item, idx) => (
                <TouchableOpacity onPress={() => {
                  navigate("NewAccountScreen", { screenName: "EditAccount", account: item });
                }} key={idx}>
                  <Card
                    title={item.name}
                    balance={item.accountBalance.toString()}
                    currency={item.currency}
                    screenName="account"
                    colorCode={item.color}
                    icon={item.icon}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <View style={styles.suggestionsView}>
            <Text style={styles.suggestionsText}>Suggestions</Text>
            <ScrollView>
              <View style={[Layout.row, { flexWrap: "wrap", marginTop: 10 }]}>
                {defaultAccountsList.map((item, idx) => {
                  return (
                    <View key={idx} style={{ margin: 5 }}>
                      <Chip
                        account={item.name}
                        onPress={() => isSavingPending.current ? null : addAccountsToDbAndUpdateUI(item)}
                      />
                    </View>
                  );
                })}
                <View style={{ margin: 5 }}>
                  <AddButton
                    title="Add new"
                    onPress={() => navigate("NewAccountScreen", { screenName: "NewAccount", account: {} })}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <LongSubmitButton name="Finish" onPress={() => isSavingPending.current ? null : onFinish()} />
      </View>
    </SafeAreaView>
  );
}
