import React, { useEffect } from 'react';
import { Alert, SafeAreaView, Text, View } from 'react-native';
import LocalAuthentication from 'rn-local-authentication';

import Category from "../../../Database/Model/Category";

import { getItemFromAsyncStorage, setItemToAsyncStorage } from "../../../Util/Storage";
import {
  categories as cate,
  IS_ONBOARDING_COMPLETED,
  LOCK_APP, SORT_ORDER_INDEX,
} from "../../../Util/Constants";
import { navigateAndSimpleReset } from '../../../Navigators/Root';

import LogoIcon from '../../../Assets/SVGIcons/LogoIcon';

import { useTheme } from '../../../Theme';
import styles from './styles';

export default function SplashScreen() {
  const { Layout, Colors } = useTheme();

  useEffect(() => {
    checkAppLockStatus();
  }, []);

  const checkAppLockStatus = async () => {
    const appLockStatus = await getItemFromAsyncStorage(LOCK_APP);
    if (appLockStatus === true && appLockStatus !== undefined) {
      authenticate();
    } else {
      checkAndResetAppFlow();
    }
  };

  const authenticate = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      reason: 'Prove that you have access to this device to unlock the app',
      title: 'Authentication required',
      fallbackEnabled: true,
      fallbackToPinCodeAction: true,
      fallbackTitle: 'Enter password',
      cancelTitle: 'Cancel',
    });

    if (result.success) {
      checkAndResetAppFlow();
    } else {
      if (result.error === 'UserFallback') {
        Alert.alert('App Locked', 'Authenticate to enter the app', [
          {
            text: 'Unlock',
            onPress: () => authenticate(),
          },
        ]);
      } else if (result.error === 'BiometryNotEnrolled' || result.error === 'PasscodeNotSet') {
        checkAndResetAppFlow();
      }
    }
  };

  const checkAndResetAppFlow = async () => {
    const categories = await Category.getAllCategories();
    let isOnboardingCompleted = await getItemFromAsyncStorage(IS_ONBOARDING_COMPLETED);
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (categories.length === 0)
      await Category.addCategoryToDb(cate[cate.length-1]);

    if (isOnboardingCompleted === true) {
      navigateAndSimpleReset("DashBoard");
    } else {
      await setItemToAsyncStorage(IS_ONBOARDING_COMPLETED, false);
      await setItemToAsyncStorage(SORT_ORDER_INDEX, 0);
      navigateAndSimpleReset("OfflineAccountScreen");
    }
  };

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <View style={styles.container}>
        <LogoIcon />
        <Text style={styles.title}>Wallet</Text>
        <Text style={styles.sub}>Your personal money manager</Text>
      </View>
    </SafeAreaView>
  );
}
