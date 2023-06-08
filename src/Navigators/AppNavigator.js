import React from 'react';
import { Dimensions, Platform } from 'react-native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';


import { fade } from '../Util/Animation';
import TabNavigator from './TabNavigator';

import AccountAndCategoryScreen from '../Containers/OnBoarding/AccountAndCategoryScreen';
import AddAccountScreen from '../Containers/OnBoarding/AccountAndCategoryScreen/AddAccountScreen';

import AddNewGroupExpenseScreen from '../Containers/SplitGroup/AddNewGroupExpenseScreen';
import AddSplitTransactionScreen from '../Containers/Transactions/AddSplitTransactionScreen';
import BudgetScreen from '../Containers/Budgets/BudgetScreen';
import CategoryScreen from '../Containers/Categories';
import DisplayTransactionScreen from '../Containers/Transactions/DisplayTransactionScreen';
import ExpenseSummaryScreen from '../Containers/SplitGroup/ExpenseSummaryScreen';
import GroupBalanceScreen from '../Containers/SplitGroup/GroupBalanceScreen';
import NewAccountScreen from '../Containers/Dashboard/AccountScreen/NewAccountScreen';
import NewSplitGroupScreen from '../Containers/SplitGroup/NewSplitGroupScreen';
import OfflineAccountScreen from '../Containers/OnBoarding/OfflineAccountScreen';
import SearchTransactionScreen from '../Containers/Transactions/SearchTransactionScreen';
import SetCurrencyScreen from '../Containers/OnBoarding/SetCurrencyScreen';
import SettingsScreen from '../Containers/Settings/SettingsScreen';
import ShowAccountTransactionScreen from '../Containers/Dashboard/AccountScreen/ShowAccountTransactionScreen';
import ShowCategoryTransactionScreen from '../Containers/Categories/ShowCategoryTransactionScreen/index';
import ShowSplitTransactionScreen from '../Containers/SplitGroup/ShowSplitTransactionScreen';
import SplashScreen from '../Containers/Splash/SplashScreen';
import SplitGroupScreen from '../Containers/SplitGroup';
import TopMenuScreen from '../Containers/Dashboard/TopMenuScreen';
import { AddTransactionScreenType } from '../Containers/Transactions/AddTransactionScreen';

const { Screen, Navigator } = createStackNavigator();

const { height } = Dimensions.get('window');

function AppNavigator() {
  return (
    <Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="SplashScreen" component={SplashScreen} />
      <Screen name="OfflineAccountScreen" component={OfflineAccountScreen} />
      <Screen name="SetCurrencyScreen" component={SetCurrencyScreen} />
      <Screen
        name="AccountAndCategoryScreen"
        component={AccountAndCategoryScreen}
      />
      <Screen name="AddAccountScreen" component={AddAccountScreen} />
      <Screen
        name="DashBoard"
        component={TabNavigator}
        options={{ gestureEnabled: false }}
      />
      <Screen
        name="DisplayTransactionScreen"
        component={DisplayTransactionScreen}
      />

      <Screen
        name="TopMenuScreen"
        component={TopMenuScreen}
        options={{
          gestureEnabled: true,
          gestureDirection: 'vertical-inverted',
          gestureResponseDistance: height,
          cardStyleInterpolator: fade,
        }}
      />
      <Screen name="SettingsScreen" component={SettingsScreen} />
      <Screen
        name="NewAccountScreen"
        options={{
          presentation: 'modal',
          headerShown: false,
          cardStyle: {
            marginTop: Platform.OS === 'android' ? 15 : 0,
            borderTopLeftRadius: 26,
            borderTopRightRadius: 26,
          },
        }}
        component={NewAccountScreen}
      />
      <Screen
        name="ShowAccountTransactionScreen"
        component={ShowAccountTransactionScreen}
        options={{ animationEnabled: false }}
      />
      <Screen
        name="SearchTransactionScreen"
        component={SearchTransactionScreen}
        options={{ animationEnabled: false }}
      />
      <Screen name="CategoryScreen" component={CategoryScreen} />
      <Screen
        name="ShowCategoryTransactionScreen"
        component={ShowCategoryTransactionScreen}
        options={{ animationEnabled: false }}
      />
      <Screen
        name="BudgetScreen"
        component={BudgetScreen}
        options={{ animationEnabled: false }}
      />
      <Screen
        name="SplitGroupScreen"
        component={SplitGroupScreen}
        options={{ animationEnabled: false }}
      />
       <Screen
        name="NewSplitGroupScreen"
        component={ NewSplitGroupScreen }
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
      <Screen
        name="ShowSplitTransactionScreen"
        component={ShowSplitTransactionScreen}
      />
      <Screen
        name="AddSplitTransactionScreen"
        component={AddSplitTransactionScreen}
      />
      <Screen
        name="AddNewGroupExpenseScreen"
        component={AddNewGroupExpenseScreen}
      />
      <Screen
        name="ExpenseSummaryScreen"
        component={ExpenseSummaryScreen}
      />
      <Screen name="GroupBalanceScreen" component={GroupBalanceScreen} />
      <Screen name="AddTransactionScreenType" component={AddTransactionScreenType} />
    </Navigator>
  );
}

export default AppNavigator;
