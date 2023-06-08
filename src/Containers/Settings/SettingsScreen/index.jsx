import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  BackHandler,
  Linking,
  Switch,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import DeviceInfo from "react-native-device-info";

import Account from "../../../Database/Model/Account";
import Buffer from "../../../Database/Model/Buffer";
import User from "../../../Database/Model/User";

import { getCurrencyLongName } from "../../../Util/Common";
import { database } from "../../../../index";
import {
  DEFAULT_CURRENCY,
  deleteTypeConstants,
  IS_ACCOUNT_SKIP_AT_LEAST_ONE_TIME,
  IS_ONBOARDING_COMPLETED,
  LOCK_APP,
} from "../../../Util/Constants";
import {
  getItemFromAsyncStorage,
  removeItemInAsyncStorage,
  setItemToAsyncStorage,
} from "../../../Util/Storage";
import { navigateAndSimpleReset } from "../../../Navigators/Root";

import {
  BackButton,
  BottomSheet,
  DeleteAdd,
  DescriptionAdd,
  SelectCurrency,
} from "../../../Components";
import AnonymousIcon from "../../../Assets/SVGIcons/AnonymousIcon";
import CurrencyIcon from "../../../Assets/SVGIcons/CurrencyIcon";
import ContactSupportIcon from "../../../Assets/SVGIcons/ContactSupportIcon";
import ForwardBlackIcon from "../../../Assets/SVGIcons/ForwardBlackIcon";
import FingerPrintIcon from "../../../Assets/SVGIcons/FingerPrintIcon";
import HelpCenterIcon from "../../../Assets/SVGIcons/HelpCenterIcon";
import TrashIcon from "../../../Assets/SVGIcons/TrashIcon";

import { useTheme } from "../../../Theme";
import styles from "./styles";

export default function SettingsScreen({ navigation }) {
  const { Layout, Colors } = useTheme();
  const currencyModalRef = useRef(null);
  const accountModalRef = useRef(null);
  const deleteModalRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "35%"], []);

  const [isEnableLockApp, setIsEnableLockApp] = useState(null);
  // const [selectedCurrency, setSelectedCurrency] = useState();
  const [user, setUser] = useState({
    userId: "",
    userName: "",
  });
  const [isOpenCurrencyModal, setIsOpenCurrencyModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenAccountModal, setIsOpenAccountModal] = useState(false);
  const [currencyObj, setCurrencyObj] = useState({
    currency: "USD",
    name: "United States Dollars",
  });
  const [currencyModalKey, setCurrencyModalKey] = useState(0);

  useFocusEffect(
    useCallback(() => {
      const getLockAppStatus = async () => {
        try {
          const appLockStatus = await getItemFromAsyncStorage(LOCK_APP);
          setIsEnableLockApp(appLockStatus ?? false);
        } catch (error) {
          console.error("Error getting lock app status:", error);
        }
      };
      getLockAppStatus();
      getDefaultCurrency();

    }, []),
  );

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, [isOpenCurrencyModal, isOpenDeleteModal, isOpenAccountModal]);

  useEffect(() => {
    getUser();
  }, []);

  const getDefaultCurrency = ()=>{
    getItemFromAsyncStorage(DEFAULT_CURRENCY).then(async (value) => {
      value = value === "" ? "USD" : value;
      let currencyName = await getCurrencyLongName(value);
      setCurrencyObj({
        ...currencyObj,
        name: currencyName,
        currency: value,
      });
    });
  }

  const handleLockApp = useCallback(async () => {
    if (isEnableLockApp) {
      await removeItemInAsyncStorage(LOCK_APP);
      setIsEnableLockApp(false);
    } else {
      await setItemToAsyncStorage(LOCK_APP, true);
      setIsEnableLockApp(true);
    }
  }, [isEnableLockApp]);

  const handleShowModal = useCallback(text => {
    switch (text) {
      case "currencyModal":
        currencyModalRef.current?.present();
        break;
      case "accountModal":
        accountModalRef.current?.present();
        break;
      case "deleteModal":
        deleteModalRef.current?.present();
        break;
      default:
        break;
    }
  }, []);

  const handleCloseModal = useCallback(text => {
    switch (text) {
      case "currencyModal":
        setCurrencyModalKey(Math.random());
        currencyModalRef.current?.dismiss();
        break;
      case "accountModal":
        accountModalRef.current?.dismiss();
        break;
      case "deleteModal":
        deleteModalRef.current?.dismiss();
        break;
      default:
        break;
    }
  }, []);

  const backAction = () => {
    if (isOpenDeleteModal) {
      deleteModalRef.current?.close();
      return true;
    } else if (isOpenCurrencyModal) {
      setCurrencyModalKey(Math.random());
      currencyModalRef.current?.close();
      return true;
    } else if (isOpenAccountModal) {
      accountModalRef.current?.close();
      return true;
    } else {
      navigation.goBack();
      return true;
    }
  };

  const onEditCurrency = async (text) => {
    let currencyName = await getCurrencyLongName(text);
    await setItemToAsyncStorage(DEFAULT_CURRENCY, text);
    await Buffer.addBufferAmountToDb(text);
    setCurrencyObj({ ...currencyObj, currency: text, name: currencyName });
    await updateAccountsCurrency(text);
    handleCloseModal("currencyModal");
  };

  // Update all available accounts' currency to the same user currency if User default currency is changed
  const updateAccountsCurrency = async (currency) => {
    if (await Account.isAccountExist()) {
      await Account.updateCurrencyInAllAccounts(currency);
    }
  }

  const onDeleteData = async () => {
    await database.write(async async => {
      await database.unsafeResetDatabase();
    });
    deleteModalRef.current?.dismiss();
    await setItemToAsyncStorage(IS_ONBOARDING_COMPLETED, false);
    await setItemToAsyncStorage(IS_ACCOUNT_SKIP_AT_LEAST_ONE_TIME, false);
    await removeItemInAsyncStorage(LOCK_APP);
    navigateAndSimpleReset("SplashScreen");
  };

  const openUrl = async url => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
  };

  const getUser = async () => {
    let user = await User.getUser();

    setUser({ ...user, userName: user.firstName, userId: user.id });
  };

  const onSubmitUserName = useCallback(text => {
    accountModalRef?.current.dismiss();
    if (user.userName !== "" || user.userId !== "") {
      updateUser(text);
    } else addUser(text);

  }, [user]);

  const updateUser = async (newName) => {

    const response = await User.updateUser(user.userId, newName);
    setUser({ ...user, userName: response._raw.firstName, userId: response._raw.id });

  };

  const addUser = async (name) => {
    if (name) {

      const response = await User.createUser(name);
      setUser({ ...user, userName: response._raw.firstName, userId: response._raw.id });
    }
  };

  return (
    <SafeAreaView
      style={[Layout.fill, { backgroundColor: Colors.primaryGray }]}>
      <View style={styles.container}>
        <View style={[Layout.rowHCenter, Layout.justifyContentBetween]}>
          <BackButton onPress={() => navigation.goBack()} />
          <Text
            style={
              styles.txtVersion
            }>{`${DeviceInfo.getVersion()} (${DeviceInfo.getBuildNumber()})`}</Text>
        </View>
        <ScrollView>
          <Text style={styles.title}>Settings</Text>
          <TouchableOpacity
            style={styles.setCurrencyContainer}
            onPress={() => handleShowModal("currencyModal")}>
            <View style={[Layout.rowHCenter, Layout.justifyContentBetween]}>
              <CurrencyIcon />
              <Text style={styles.txtSetCurrency}>Set currency</Text>
            </View>
            <View style={[Layout.rowHCenter, Layout.justifyContentBetween]}>
              <Text style={styles.txtCurrency}>{currencyObj.currency}</Text>
              <ForwardBlackIcon />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.accountContainer}
            onPress={() => handleShowModal("accountModal")}>
            <Text style={styles.txtAccount}>Account</Text>
            <View style={[Layout.rowHCenter, { marginTop: 10 }]}>
              <AnonymousIcon />
              <Text style={styles.txtAnonymous}>
                {user.userName !== "" ? user.userName : "Anonymous"}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.appSettingContainer}>
            <Text style={styles.txtAppSetting}>App settings</Text>
            <View style={styles.appSettingView}>
              <View style={[Layout.rowHCenter]}>
                <FingerPrintIcon />
                <Text style={styles.txtApplock}>Lock app</Text>
              </View>
              <View>
                <Switch
                  trackColor={{
                    false: Colors.gray002,
                  }}
                  ios_backgroundColor={Colors.gray002}
                  value={isEnableLockApp}
                  onValueChange={handleLockApp}
                />
              </View>
            </View>
          </View>
          <View style={styles.appSettingContainer}>
            <Text style={styles.txtAppSetting}>Product</Text>
            <TouchableOpacity
              style={styles.appSettingView}
              onPress={() => openUrl("https://www.google.com")}>
              <View style={[Layout.rowHCenter]}>
                <HelpCenterIcon />
                <Text style={styles.txtApplock}>Help center</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.appSettingView}
              onPress={() => openUrl("https://www.google.com")}>
              <View style={[Layout.rowHCenter]}>
                <ContactSupportIcon />
                <Text style={styles.txtApplock}>Contact support</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.termsContainer,
              Layout.rowHCenter,
              Layout.justifyContentBetween,
            ]}>
            <TouchableOpacity
              style={styles.btnOutlined}
              onPress={() => openUrl("https://www.google.com")}>
              <Text style={styles.txtOutlinedBtn}>Terms & Conditions</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnOutlined}
              onPress={() => openUrl("https://www.google.com")}>
              <Text style={styles.txtOutlinedBtn}>Privacy policy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dangerZone}>
            <Text style={styles.titleDangerZone}>Danger zone</Text>
            <TouchableOpacity
              style={styles.btnDelete}
              onPress={() => handleShowModal("deleteModal")}>
              <TrashIcon />
              <Text style={styles.txtDelete}>Delete all user data</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* Need some props from db, SelectCurrency component updated when implemented NewAccount screen*/}
        {<SelectCurrency
          key={currencyModalKey}
          currencyModalRef={currencyModalRef}
          onEditCurrency={onEditCurrency}
          handleCloseModal={handleCloseModal}
          onChange={idx => setIsOpenCurrencyModal(idx >= 1)}
          currencyObj={currencyObj}
          setCurrencyObj={setCurrencyObj}
        />}
        <BottomSheet
          bottomSheetModalRef={accountModalRef}
          snapPoints={snapPoints}
          onChange={idx => setIsOpenAccountModal(idx < 1 ? false : true)}>
          <DescriptionAdd
            handleCloseModal={() => handleCloseModal("accountModal")}
            type="editName"
            descriptionProp={user.userName}
            heading="Edit name"
            placeholder="What's your name?"
            onDescriptionSubmit={text => onSubmitUserName(text)}
            multiline={false}
          />
        </BottomSheet>
        <DeleteAdd
          deleteModalRef={deleteModalRef}
          handleCloseModal={handleCloseModal}
          type={deleteTypeConstants.USER_DATA}
          onDelete={onDeleteData}
          heading1="Delete all user data ?"
          heading2="Confirm permanent deletion For all of your data?"
          message="WARNING! : This action will delete all data for your account
          Permanently and you won’t be able to recover it."
          onChange={idx => setIsOpenDeleteModal(idx < 1 ? false : true)}
        />
      </View>
    </SafeAreaView>
  );
}
