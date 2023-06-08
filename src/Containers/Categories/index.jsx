import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  BackHandler,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import moment from "moment";

import Category from "../../Database/Model/Category";

import { navigate } from "../../Navigators/Root";
import { getItemFromAsyncStorage, setItemToAsyncStorage } from "../../Util/Storage";
import {
  DEFAULT_CURRENCY,
  SORT_ORDER_INDEX,
} from "../../Util/Constants";

import {
  AccountCategoryMainCard,
  CategoryCreateAndEdit,
  RoundIconButton,
  DragReorder,
  SortBy,
  SaveCloseController,
} from "../../Components";
import AtoZIcon from "../../Assets/SVGIcons/AtoZIcon";
import MenuIcon from "../../Assets/SVGIcons/MenuIcon";
import PlusIcon from "../../Assets/SVGIcons/PlusIcon";

import { useTheme } from ".././../Theme";
import styles from "./styles";

export default function CategoryScreen({ navigation }) {
  const { Layout, Colors } = useTheme();

  const categoryCreateEditModalRef = useRef(null);
  const reorderModalRef = useRef(null);
  const sortByModalRef = useRef(null);
  const categoriesRef = useRef([]);
  let sortOrderIndex = useRef(0);

  const [isOpenCategoryModal, setIsOpenCategoryModal] = useState(false);
  const [isOpenReorderModal, setIsOpenReorderModal] = useState(false);
  const [isOpenSortModal, setIsOpenSortModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [dragOrderState, setDragOrderState] = useState(Date.now());
  const [orderState, setOrderState] = useState(Date.now() + 1);
  const [categoryState, setCategoryState] = useState(Date.now() +2);
  const [userDefaultCurrencySymbol, setUserDefaultCurrencySymbol] = useState("USD");


  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, [navigation, isOpenReorderModal, isOpenSortModal, isOpenCategoryModal]);

  const handleShowReorder = useCallback(() => {
    reorderModalRef.current?.present();
  }, []);

  const handleCloseReorder = useCallback(() => {
    reorderModalRef.current?.dismiss();
    setDragOrderState(Date.now());
  }, []);

  const handleShowCategoryCreateEdit = useCallback(() => {
    categoryCreateEditModalRef.current?.present();
  }, []);

  const handleCloseCategoryCreateEdit = useCallback(async () => {
    await getDefaultCurrencyAndRetrieveCategories();
    setCategoryState(Date.now());
    categoryCreateEditModalRef.current?.dismiss();
  }, []);

  const handleShowSort = useCallback(() => {
    sortByModalRef.current?.present();
  }, []);

  const handleCloseSort = useCallback(() => {
    sortByModalRef.current?.dismiss();
  }, []);

  useFocusEffect(
    React.useCallback(() => {

      getDefaultCurrencyAndRetrieveCategories();

    }, []),
  );

  const backAction = () => {
    if (isOpenReorderModal) {
      reorderModalRef.current?.close();
      return true;
    } else if (isOpenSortModal) {
      sortByModalRef.current?.close();
      return true;
    } else if (isOpenCategoryModal) {
      categoryCreateEditModalRef.current?.close();
      return true;
    } else {
      navigation.goBack();
      return true;
    }
  };

  const getDefaultCurrencyAndRetrieveCategories = () => {
    getItemFromAsyncStorage(DEFAULT_CURRENCY).then((value) => {
      setUserDefaultCurrencySymbol(value);
      getCategoryWithExpenseAndIncome(value).then((categories) => {
        if (sortOrderIndex.current !== 0) {
          handleSort(sortOrderIndex.current, categories, value);
        }
      });
    });
  };

  const getCategoryWithExpenseAndIncome = async (currency) => {
    let currentDate = new Date();
    let currentMonthStart = moment(currentDate).utc().startOf("month").format("X");
    let currentMonthEnd = moment(currentDate).utc().endOf("month").format("X");
    let categoriesWithExpenseAndIncome = await Category.getCategoryWithExpenseAndIncome(currentMonthStart,currentMonthEnd,currency);

    categoriesRef.current = categoriesWithExpenseAndIncome;
    setCategories(categoriesWithExpenseAndIncome);
    setDragOrderState(Date.now());
    sortOrderIndex.current = await getItemFromAsyncStorage(SORT_ORDER_INDEX);
    setOrderState(Date.now());
    return categoriesWithExpenseAndIncome;
  };

  const handleDragSort = async (data) => {
    await setItemToAsyncStorage(SORT_ORDER_INDEX, 0);
    sortOrderIndex.current = await getItemFromAsyncStorage(SORT_ORDER_INDEX);
    await findIndexAndPreserveOrderState(data);
    setDragOrderState(Date.now());
    setOrderState(Date.now());
  };

  const handleSort = async (index, categoryParam = categories, currency = userDefaultCurrencySymbol) => {
    let sortedArray;
    switch (index) {
      case 0:
        sortedArray = categoriesRef?.current;
        break;
      case 1:
        sortedArray = [...categoryParam].sort(
          (a, b) => b.accountBalance - a.accountBalance,
        );
        break;
      case 2:
        sortedArray = [...categoryParam].sort((a, b) => b.expenses - a.expenses);
        break;
      case 3:
        sortedArray = [...categoryParam].sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        break;
      default:
        break;
    }

    await findIndexAndPreserveOrderState(sortedArray, categoryParam);
    handleCloseSort();
    setOrderState(Date.now());
    await getCategoryWithExpenseAndIncome(currency);
  };

  const findIndexAndPreserveOrderState = async (data, categoryParam = categories) => {
    for (const category of categoryParam) {
      category.orderNum = data.findIndex(x => x.id === category.id).toString();
      await updateCategory(category);
    }
  };

  const updateCategory = async category => {
    await Category.reOrderCategory(category);
  };


  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <View style={styles.parentContainer}>
        <View style={styles.container}>
          <View style={styles.topView}>
            <Text style={styles.txtHeading}>Categories</Text>
            <View style={styles.topMenu}>
              <RoundIconButton
                bgColor={Colors.gray004}
                icon={<AtoZIcon />}
                isSmall={true}
                onPress={handleShowSort}
              />
              <RoundIconButton
                bgColor={Colors.gray004}
                icon={<MenuIcon />}
                isSmall={true}
                onPress={handleShowReorder}
              />
            </View>
          </View>
          <ScrollView style={{ marginTop: 35, marginBottom: 60 }}>
            <View style={styles.cardView}>
              {categories.map((item, idx) => (
                <View key={idx} style={styles.cardItem}>
                  <AccountCategoryMainCard
                    title={item.name}
                    accountBalance={item.accountBalance.toString()}
                    currency={userDefaultCurrencySymbol}
                    expenses={item.expenses}
                    income={item.income}
                    colorCode={item.color}
                    onPress={() =>
                      navigate("ShowCategoryTransactionScreen", {

                        categoryId: item.id,
                      })
                    }
                    icon={item.icon}
                    type="category"
                  />
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottomView}>
          <SaveCloseController
            handleClose={() => navigation.goBack()}
            submitButtonText="Add category"
            submitButtonIcon={<PlusIcon isWhite={true} />}
            handleSubmit={handleShowCategoryCreateEdit}
          />
        </View>
        <DragReorder
          reorderModalRef={reorderModalRef}
          handleCloseModal={handleCloseReorder}
          data={categories}
          handleDragSort={handleDragSort}
          setAccounts={setCategories}
          onChange={idx => setIsOpenReorderModal(idx >= 1)}
          type="category"
          key={dragOrderState}
        />
        <SortBy
          index={sortOrderIndex.current}
          sortByModalRef={sortByModalRef}
          onChange={idx => setIsOpenSortModal(idx >= 1)}
          handleClose={handleCloseSort}
          handleSort={handleSort}
          key={orderState}
        />
        <CategoryCreateAndEdit
          categoryCreateEditModalRef={categoryCreateEditModalRef}
          key={categoryState}
          handleCloseModal={handleCloseCategoryCreateEdit}
          type="create"
          onChange={idx => setIsOpenCategoryModal(idx >= 1)}
        />
      </View>
    </SafeAreaView>
  );
}
