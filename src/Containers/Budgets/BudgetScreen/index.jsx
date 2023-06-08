import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  BackHandler,
  Platform,
  Text,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { useFocusEffect } from "@react-navigation/native";
import moment from "moment";

import Budget from "../../../Database/Model/Budget";
import BudgetCategory from "../../../Database/Model/BudgetCategory";
import Transaction from "../../../Database/Model/Transaction";

import { database } from "../../../../index";
import { DEFAULT_CURRENCY } from "../../../Util/Constants";
import {
  getBudgetPercentage,
  getFormattedBalance,
  getPreviousMonthEndToCurrentMonthEnd,
} from "../../../Util/Common";
import { getItemFromAsyncStorage } from "../../../Util/Storage";

import {
  BottomSheet,
  BufferButton,
  BudgetCreateAndEdit,
  DragReorder,
  RoundIconButton,
  SaveCloseController,
} from "../../../Components";
import DollarIcon from "../../../Assets/SVGIcons/DollarIcon";
import InfoIcon from "../../../Assets/SVGIcons/InfoIcon";
import MenuIcon from "../../../Assets/SVGIcons/MenuIcon";
import PlusIcon from "../../../Assets/SVGIcons/PlusIcon";
import SelectedIcon from "../../../Assets/SVGIcons/SelectedIcon";

import { useTheme } from "../../../Theme";
import styles from "./styles";

const width = Platform.OS === "android" ? 170 : 200;

export default function BudgetScreen({ navigation }) {
  const { Layout, Colors } = useTheme();
  const snapPoints = useMemo(
    () => ["25%", Platform.OS === "ios" ? "68%" : "70%"],
    [],
  );
  const { dismissAll } = useBottomSheetModal();

  const budgetCreateEditModalRef = useRef(null);
  const reorderModalRef = useRef(null);
  const timestamps = useRef([
    moment(new Date()).utc().startOf("month").format("X"),
    moment(new Date()).utc().endOf("month").format("X"),
  ]);
  const initialDate = useRef(moment(new Date()).format("X"));

  const [isOpenBudgetModal, setIsOpenBudgetModal] = useState(false);
  const [isOpenReorderModal, setIsOpenReorderModal] = useState(false);
  const [budgetModalType, setBudgetModalType] = useState("");
  const [selectedBudget, setSelectedBudget] = useState();
  const [selectedCategories, setSelectedCategories] = useState();
  const [currency, setCurrency] = useState("");
  const [reorderState, setReorderState] = useState(Date.now());
  const [expenseByCategory, setExpenseByCategory] = useState([]);
  const [budgetsList, setBudgetsList] = useState({
    budgets: [],
    categories: [],
  });

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, [isOpenBudgetModal, isOpenReorderModal]);

  useFocusEffect(
    useCallback(() => {
      getItemFromAsyncStorage(DEFAULT_CURRENCY).then(value => {
        setCurrency(value !== "" ? value : "USD");
        getBudgets(value);
        getExpenseByCategory(value);
      });
    }, []),
  );

  const handleShowReorder = useCallback(() => {
    reorderModalRef.current?.present();
  }, []);

  const handleCloseReorder = useCallback(() => {
    reorderModalRef.current?.dismiss();
    setReorderState(Date.now());
  }, []);

  const handleShowBudgetCreateEdit = useCallback(
    (type, budget, category) => {
      setBudgetModalType(type);
      setSelectedBudget(budget);
      setSelectedCategories(category);
      budgetCreateEditModalRef.current?.present();
    },
    [budgetModalType],
  );

  const handleCloseBudgetCreateEdit = useCallback(() => {
    budgetCreateEditModalRef.current?.dismiss();
  }, []);

  const onSubmitBudget = useCallback((name, amount, categories, id = "") => {
    budgetCreateEditModalRef.current?.dismiss();
    if (id === "") {
      addBudgetToDb(name, amount, categories);
    } else updateBudget(name, amount, categories, id);
  }, []);

  const backAction = () => {
    if (isOpenBudgetModal) {
      budgetCreateEditModalRef?.current.close();
      return true;
    } else if (isOpenReorderModal) {
      setReorderState(Date.now());
      reorderModalRef?.current.close();
      return true;
    } else {
      navigation.goBack();
      return true;
    }
  };

  const handleDragSort = async data => {
    for (const budget of budgetsList.budgets) {
      budget.orderNum = data.findIndex(x => x.id === budget.id).toString();
      await updateBudgetListOrder(budget);
    }
  };

  const updateBudgetListOrder = async budget => {

    await Budget.reOrderBudgetById(budget);
  };

  const addBudgetToDb = async (name, amount, categories) => {
    if (name !== "" && amount !== "") {
      const budget = {
        name: name,
        amount: amount,
        time: Number(initialDate.current),
      };
      const response = await Budget.createBudget(budget);

      for (const item of categories) {
        await BudgetCategory.createBudgetCategory(response._raw.id, item);
      }
      await getBudgets();

    }
  };

  const getBudgets = async () => {

    let categories = await BudgetCategory.getAllBudgetCategories();

    let budgets = await Budget.getBudgets(timestamps);

    setBudgetsList({
      ...budgetsList,
      budgets: budgets.map(budget => budget._raw),
      categories: categories,
    });
    setReorderState(Date.now());
  };

  const updateBudget = async (name, amount, categories, budgetId) => {

    const budget = {
      id: budgetId,
      name: name,
      amount: amount
    }
    await Budget.updateBudgetById(budget);

    const budgetAndCategoryCollection = await BudgetCategory.getBudgetCategoriesByBudgetId(budgetId);

    const currentCategoryIds = budgetAndCategoryCollection.map(
      bc => bc._raw.category_id,
    );

    const newCategoryIds = categories.map(item => item);

    // insert new categories
    for (const categoryId of newCategoryIds) {
      if (!currentCategoryIds.includes(categoryId)) {
        await BudgetCategory.createBudgetCategory(budgetId, categoryId);

      }
    }
    return await database.write(async () => {
      // remove old categories
      for (const categoryId of currentCategoryIds) {
        if (!newCategoryIds.includes(categoryId)) {
          const budgetCategories = budgetAndCategoryCollection.find(
            bc => bc._raw.category_id === categoryId,
          );
          if (budgetCategories) {
            await budgetCategories.destroyPermanently();
          }
        }
      }
      await getBudgets();
    });
  };

  const getExpenseByCategory = async currency => {
    let expense = await Transaction.getExpensesForBudget(timestamps,currency);
    setExpenseByCategory(expense);
  };

  const spentAmountByCategory = budgetId => {
    let total = 0;
    let categoriesForBudget = getCategoriesArray(budgetId);

    if (categoriesForBudget.length > 0) {
      expenseByCategory
        .filter(item => categoriesForBudget.includes(item.category_id))
        .forEach(item => {
          total += item.total;
        });
    } else {
      expenseByCategory
        // .filter(item => item.name === 'Unspecified')
        .forEach(item => {
          total += item.total;
        });
    }

    return total;
  };

  const getTotalBudgetTitle = (categories = []) => {
    if (categories.length < 1) {
      return "Total Budget";
    } else if (categories.length === 1) {
      return "Category Budget";
    } else {
      return `Multi-Category (${categories.length}) Budget`;
    }
  };

  const getBudgetButtonTitle = (spentAmount, budgetAmount) => {
    return parseFloat(spentAmount) >= parseFloat(budgetAmount)
      ? "Buffer exceeded by"
      : "Left to spend";
  };

  const getBudgetButtonPercentage = (spentAmount, budgetAmount) => {
    return parseFloat(spentAmount) < parseFloat(budgetAmount)
      ? getBudgetPercentage(budgetAmount, spentAmount)
      : "";
  };

  const getRemainingBalance = (spentAmount, budgetAmount) => {
    return `${getFormattedBalance(spentAmount)}/${getFormattedBalance(
      budgetAmount,
    )} ${currency}`;
  };

  const getBudgetCardIcon = (spentAmount, budgetAmount) => {
    return parseFloat(spentAmount) >= parseFloat(budgetAmount) ? (
      <InfoIcon isWhite={true} />
    ) : (
      <SelectedIcon isSmall={false} />
    );
  };

  const getBudgetCardColor = (spentAmount, budgetAmount) => {
    return parseFloat(spentAmount) >= parseFloat(budgetAmount)
      ? Colors.primaryRed
      : "";
  };

  const getCategoriesArray = budgetId => {
    return budgetsList?.categories
      .filter(c => c.budget_id === budgetId)
      .map(item => item.category_id);
  };

  const getBudgetInfo = () => {
    //get sum of all categories budget amount
    const categoryBudgetInfo = budgetsList.budgets
      .filter(budget => getCategoriesArray(budget.id).length > 0)
      .reduce((acc, budget) => acc + parseFloat(budget.amount), 0);

    //get highest app budget amount
    const appBudgetInfo = budgetsList.budgets
      .filter(budget => getCategoriesArray(budget.id).length === 0)
      .reduce((max, budget) => {
        const budgetAmount = parseFloat(budget.amount);
        return budgetAmount > max ? budgetAmount : max;
      }, 0);

    if (budgetsList.budgets.length > 1) {
      if (appBudgetInfo === 0) {
        return `${getFormattedBalance(
          categoryBudgetInfo.toFixed(2),
        )} ${currency} for categories`;
      } else if (categoryBudgetInfo === 0) {
        return `${getFormattedBalance(
          appBudgetInfo.toFixed(2),
        )} ${currency} for app budget`;
      } else {
        return `${getFormattedBalance(
          categoryBudgetInfo.toFixed(2),
        )} ${currency} for categories / ${getFormattedBalance(
          appBudgetInfo.toFixed(2),
        )} ${currency} for app budget`;
      }
    } else {
      return getCategoriesArray(budgetsList.budgets[0].id).length >= 1
        ? `${getFormattedBalance(
          categoryBudgetInfo.toFixed(2),
        )} ${currency} for categories`
        : `${getFormattedBalance(
          appBudgetInfo.toFixed(2),
        )} ${currency} for app budget`;
    }
  };

  const getAvailableAmount = (spentAmount, itemAmount) => {
    let availableBalance = Math.abs(itemAmount - spentAmount).toFixed(2);
    return availableBalance;
  };

  const onDelete = async budgetId => {
    dismissAll();
    await database.write(async () => {
      const budgetCollection = await Budget.getBudgetById(budgetId);

      const budgetAndCategoryCollection = await  BudgetCategory.getBudgetCategoriesByBudgetId(budgetId);

      await budgetCollection.destroyPermanently();
      if (budgetAndCategoryCollection?.length > 0) {
        for (const item of budgetAndCategoryCollection) {
          await item.destroyPermanently();
        }
      }
    });
    await getBudgets();
  };

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <View style={styles.parentContainer}>
        <View style={styles.subContainer}>
          <View style={styles.topView}>
            <View style={[Layout.column]}>
              <Text style={styles.txtHeading}>Budgets</Text>
              <Text style={styles.txtDate}>
                {getPreviousMonthEndToCurrentMonthEnd()}
              </Text>
            </View>
            <RoundIconButton
              bgColor={Colors.gray004}
              icon={<MenuIcon />}
              isSmall={true}
              onPress={handleShowReorder}
            />
          </View>

          {budgetsList?.budgets.length !== 0 ? (
            <>
              <Text style={styles.txtBudgetInfo}>
                Budget info: {getBudgetInfo()}
              </Text>
              <ScrollView style={styles.scrollView}>
                <View style={styles.cardContainer}>
                  {budgetsList?.budgets.map((item, idx) => (
                    <View key={idx} style={styles.card}>
                      <View style={styles.cardHeader}>
                        <View
                          style={[
                            Layout.column,
                            item.amount.toString().length >= 10 && {
                              width: width / 1.6,
                            },
                          ]}>
                          <Text style={styles.cardTitle}>{item.name}</Text>
                          <Text style={styles.cardDesc}>
                            {getTotalBudgetTitle(
                              budgetsList?.categories.filter(
                                c => c.budget_id === item.id,
                              ),
                            )}
                          </Text>
                        </View>
                        <Text style={[styles.txtBalance]}>
                          {getFormattedBalance(item.amount)}
                          <Text style={[styles.txtCurrency]}> {currency}</Text>
                        </Text>
                      </View>
                      <View style={styles.cardContent}>
                        <BufferButton
                          title={getBudgetButtonTitle(
                            spentAmountByCategory(item.id),
                            item.amount,
                          )}
                          amount={getAvailableAmount(
                            spentAmountByCategory(item.id),
                            item.amount,
                          )}
                          currency={currency}
                          icon={getBudgetCardIcon(
                            spentAmountByCategory(item.id),
                            item.amount,
                          )}
                          width={width}
                          bgColor={getBudgetCardColor(
                            spentAmountByCategory(item.id),
                            item.amount,
                          )}
                          screenName="BudgetScreen"
                          remainingAmount={getRemainingBalance(
                            spentAmountByCategory(item.id),
                            item.amount,
                          )}
                          percentage={getBudgetButtonPercentage(
                            spentAmountByCategory(item.id),
                            item.amount,
                          )}
                          onPress={() =>
                            handleShowBudgetCreateEdit(
                              "edit",
                              item,
                              getCategoriesArray(item.id),
                            )
                          }
                        />
                      </View>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </>
          ) : (
            <View style={styles.noBudgetContainer}>
              <DollarIcon />
              <Text style={styles.txtNoBudget}>No budgets</Text>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.txtNoBudgetDesc}>
                  You don’t have any budgets set.
                </Text>
                <Text style={styles.txtNoBudgetDesc}>
                  Tap the + Add budget to add one.
                </Text>
              </View>
            </View>
          )}
        </View>
        <View style={styles.bottomView}>
          <SaveCloseController
            handleClose={() => navigation.goBack()}
            submitButtonText="Add budget"
            submitButtonIcon={<PlusIcon isWhite={true} />}
            handleSubmit={() => handleShowBudgetCreateEdit("create")}
          />
        </View>

        <DragReorder
          reorderModalRef={reorderModalRef}
          handleCloseModal={handleCloseReorder}
          data={budgetsList?.budgets}
          setAccounts={bdj => setBudgetsList({ ...budgetsList, budgets: bdj })}
          handleDragSort={handleDragSort}
          onChange={idx => setIsOpenReorderModal(idx >= 1)}
          key={reorderState}
          type={"budget"}
        />

        <BottomSheet
          bottomSheetModalRef={budgetCreateEditModalRef}
          snapPoints={snapPoints}
          onChange={idx => setIsOpenBudgetModal(idx >= 1)}>
          <BudgetCreateAndEdit
            budgetCreateEditModalRef={budgetCreateEditModalRef}
            handleCloseModal={handleCloseBudgetCreateEdit}
            onSubmitBudget={onSubmitBudget}
            type={budgetModalType}
            selectedCategories={selectedCategories}
            selectedBudget={selectedBudget}
            currency={currency}
            onDelete={onDelete}
          />
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
}
