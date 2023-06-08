import React, { useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import Account from "../../../Database/Model/Account";
import Category from "../../../Database/Model/Category";

import {
  accounts,
  IS_ACCOUNT_SKIP_AT_LEAST_ONE_TIME, IS_ONBOARDING_COMPLETED,
} from "../../../Util/Constants";
import { navigate, navigateAndSimpleReset } from "../../../Navigators/Root";
import { setItemToAsyncStorage } from "../../../Util/Storage";

import { AddButton, BackButton, Chip } from "../../../Components";

import { useTheme } from "../../../Theme";
import styles from "./styles";

export default function AccountAndCategoryScreen({ route }) {
  const { Layout, Images, Colors } = useTheme();
  let { screen, currency } = route.params;

  const isSavingPending = useRef(false);

  useFocusEffect(
    React.useCallback(() => {
      if (screen === "0") {
        navigateToAddAccountOnNewAccountAdd();
      }
    }, [screen]),
  );


  const navigateToAddAccountOnNewAccountAdd = async () => {
    if (await Account.isAccountExist()) {
      navigate("AddAccountScreen", { currency: currency });
    }
  };

  const skip = async () => {
    if (!isSavingPending.current) {
      isSavingPending.current = true;
      if (screen === "0") {
        await setItemToAsyncStorage(IS_ACCOUNT_SKIP_AT_LEAST_ONE_TIME, true);

        if (!(await Account.isAccountExist())) {
          await Account.batchInsertAccounts(currency);
        }

      }
      await setItemToAsyncStorage(IS_ONBOARDING_COMPLETED, true);
      await Category.batchInsertCategories();
      navigateAndSimpleReset('DashBoard');
      isSavingPending.current = false;
    }
  };

  const navigateToAddAccount = async (item) => {
    if (!isSavingPending.current) {
      isSavingPending.current = true;
      screen = "2";
      await Account.addAccountsToDb(item, currency);
      await setItemToAsyncStorage(IS_ACCOUNT_SKIP_AT_LEAST_ONE_TIME, false);
      navigate("AddAccountScreen", {
        id: item.id,
        currency: currency,
        name: item.name,
      });
      isSavingPending.current = false;
    }
  };


  const AccountList = () => {
    return (
      <View style={styles.suggestionsView}>
        <Text style={styles.suggestionsText}>Suggestions</Text>
        <ScrollView>
          <View style={[Layout.row, { flexWrap: "wrap", marginTop: 10 }]}>
            {accounts.map((item, idx) => {
              return (
                <View key={idx} style={{ margin: 5 }}>
                  <Chip
                    account={item.name}
                    onPress={() => isSavingPending.current ? null : navigateToAddAccount(item)}
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
    );
  };

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackButton onPress={() => navigate("SetCurrencyScreen")} />
          <TouchableOpacity onPress={() => isSavingPending.current ? null : skip()}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>
            Add accounts
          </Text>
          <Image
            source={Images.onboardAccountIcon}
            style={styles.image}
          />
        </View>
      </View>
      <AccountList />
    </SafeAreaView>
  );
}
