import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useFocusEffect } from "@react-navigation/native";
import {
  BackHandler,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import moment from 'moment/moment';

import Account from "../../../Database/Model/Account";

import { DEFAULT_CURRENCY } from "../../../Util/Constants";
import { getFormattedBalance } from '../../../Util/Common';
import { getItemFromAsyncStorage } from "../../../Util/Storage";
import { navigate } from '../../../Navigators/Root';

import {
  AccountCategoryMainCard,
  RoundIconButton,
  DragReorder,
} from "../../../Components";
import MenuIcon from '../../../Assets/SVGIcons/MenuIcon';

import { useTheme } from '../../../Theme';
import styles from './styles';

export default function AccountScreen({ navigation }) {
  const { Layout, Colors } = useTheme();
  const reorderModalRef = useRef(null);

  const [isOpenReorderModal, setIsOpenReorderModal] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [todayTotal, setTodayTotal] = useState(0);
  const [currencySymbol, setCurrencySymbol] = useState("USD");
  const [reorderState, setReorderState] = useState(Date.now());

  useFocusEffect(
    React.useCallback(() => {
      getItemFromAsyncStorage(DEFAULT_CURRENCY).then((value) => {
        setCurrencySymbol(value !== "" ? value : "USD");
      getAccountsWithExpenseAndIncome(value);
      });
    }, [])
  );

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [isOpenReorderModal]);

  const handleShowReorder = useCallback(() => {
    reorderModalRef.current?.present();
  }, []);

  const handleCloseReorder = useCallback(() => {
    setReorderState(Date.now());
    reorderModalRef.current?.dismiss();
  }, []);

  const backAction = () => {
    const route = navigation.getState().routes[navigation.getState().index];
    if (route.name === 'AccountScreen') {
      if (isOpenReorderModal) {
        reorderModalRef.current?.close();
        return true;
      } else {
        navigation.goBack();
        return true;
      }
    } else {
      return false;
    }
  };

  const handleDragSort = async data => {
    for (const account of accounts) {
      account.orderNum = data.findIndex(x => x.id === account.id).toString();
      await updateAccount(account);
    }
  };

  const updateAccount = async account => {
   await Account.reOrderAccount(account);
  };

  const getAccountsWithExpenseAndIncome = async (currency) => {
    let currentDate = new Date();
    let currentDayTimestamp = moment(currentDate).utc().endOf("day").format("X");
    let currentMonthStart = moment(currentDate).utc().startOf("month").format("X");
    let currentMonthEnd = moment(currentDate).utc().endOf("month").format("X");

    let accountsWithExpenseAndIncome = await Account.getAccountsWithExpenseAndIncome(currentDayTimestamp,currentMonthStart,currentMonthEnd);

    setAccounts(accountsWithExpenseAndIncome);
    setTodayTotal(accountsWithExpenseAndIncome.reduce((accumulator, object) => {
      return accumulator + (object.currency === currency ? (Number(object.income_all) - (Number(object.expense_all))) : 0);
    }, 0));
    setReorderState(Date.now());
  };

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.topTextView}>
            <Text style={styles.txtAccount}>Accounts</Text>
            <Text style={styles.txtBalance}>Total: {currencySymbol} {getFormattedBalance(todayTotal.toFixed(2))}</Text>
          </View>
          <RoundIconButton
            bgColor={Colors.gray004}
            icon={<MenuIcon />}
            isSmall={true}
            onPress={handleShowReorder}
          />
        </View>

        <ScrollView style={{ marginTop: 35 }}>
          <View style={styles.cardView}>
            {accounts.map((item, idx) => (
              <View key={idx} style={styles.cardItem}>
                <AccountCategoryMainCard
                  title={item.name}
                  accountBalance={item.accountBalance.toFixed(2).toString()}
                  currency={item.currency}
                  expenses={item.expense.toFixed(2)}
                  income={item.income.toFixed(2)}
                  isExcluded={item.excluded === "1"}
                  onPress={() =>
                    navigate('ShowAccountTransactionScreen', {
                      accountId: item.id,
                    })
                  }
                  colorCode={item.color}
                  icon={item.icon}
                />
              </View>
            ))}
          </View>
        </ScrollView>
        <DragReorder
          reorderModalRef={reorderModalRef}
          handleCloseModal={handleCloseReorder}
          data={accounts}
          setAccounts={setAccounts}
          handleDragSort={handleDragSort}
          onChange={idx => setIsOpenReorderModal(idx >= 1)}
          key={reorderState}
        />
      </View>
    </SafeAreaView>
  );
}
