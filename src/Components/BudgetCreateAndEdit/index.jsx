import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { BackHandler, ScrollView, Text, View } from 'react-native';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';

import Category from "../../Database/Model/Category";

import { AccountAndCategoryIcons } from "../../Assets/SVGIcons/AccountAndCategoryIcons";
import { getIconByName } from "../../Util/Common";

import {
  AccountBalanceAdd,
  BottomSheet,
  Calculator,
  DeleteAdd,
  OutlinedChip,
  RoundIconButton,
  SaveCloseController,
} from '../index';
import PlusIcon from '../../Assets/SVGIcons/PlusIcon';
import SaveIcon from '../../Assets/SVGIcons/SaveIcon';
import TrashIcon from '../../Assets/SVGIcons/TrashIcon';

import { useTheme } from '../../Theme';
import styles from './styles';

export const BudgetCreateAndEdit = ({
  handleCloseModal,
  type,
  selectedBudget,
  selectedCategories,
  currency,
  onSubmitBudget,
  onDelete,
}) => {
  const { Colors, Layout } = useTheme();

  const calculatorModalRef = useRef(null);
  const deleteModalRef = useRef(null);

  const snapPointsCalculator = useMemo(() => ['25%', '80%'], []);
  const loadAccountAndCategoryIcons = useMemo(()=>{
    return AccountAndCategoryIcons;
  },[]);

  const [isOpenCalculatorModal, setIsOpenCalculatorModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [budgetObj, setBudgetObj] = useState({
    budgetId: selectedBudget ? selectedBudget.id : '',
    budgetName: selectedBudget ? selectedBudget.name : '',
    categories: Array.isArray(selectedCategories) ? selectedCategories : [],
  });
  const [categoryList, setCategoryList] = useState([]);
  const [budgetAmount, setBudgetAmount] = useState(
    selectedBudget ? selectedBudget.amount : '0',
  );

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [isOpenCalculatorModal, isOpenDeleteModal]);

  useEffect(() => {
    getCategories();
  }, []);

  const handleShowCalculator = useCallback(() => {
    calculatorModalRef.current?.present();
  }, []);
  const handleCloseCalculator = useCallback(() => {
    calculatorModalRef.current?.dismiss();
  }, []);

  const onCalculatorSubmit = useCallback(amountRef => {
    setBudgetAmount(amountRef);
    calculatorModalRef.current?.dismiss();
  }, []);

  const handleShowDeleteModal = useCallback(text => {
    deleteModalRef.current?.present();
  }, []);

  const handleCloseDeleteModal = useCallback(text => {
    deleteModalRef.current?.dismiss();
  }, []);

  const backAction = () => {
    if (isOpenCalculatorModal) {
      calculatorModalRef?.current.close();
      return true;
    } else if (isOpenDeleteModal) {
      deleteModalRef?.current.close();
      return true;
    }
  };

  const getCategories = async () => {
    let categories = await Category.getAllActiveCategories();
    if (categories.length > 1) {
      setCategoryList(categories);
    }
  };

  const handleMultipleCategory = (id, name) => {
    let tmp = [...budgetObj.categories];

    if (tmp.indexOf(id) > -1) {
      let index = tmp.indexOf(id);
      tmp.splice(index, 1);
      setBudgetObj({ ...budgetObj, categories: tmp });
    } else {
      tmp.push(id);
      setBudgetObj({ ...budgetObj, categories: tmp });
    }
  };

  const handleChangeTotalBudgetTitle = () => {
    if (budgetObj.categories.length < 1) {
      return 'Total Budget';
    } else if (budgetObj.categories.length === 1) {
      return 'Category Budget';
    } else {
      return `Multi-Category (${budgetObj.categories.length}) Budget`;
    }
  };

  const getBgColor = (id, color) => {
    let categoryIncluded = budgetObj?.categories?.includes(id.toString());

    if (categoryIncluded) {
      return color;
    } else return Colors.white;
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.subContainer}>
        <View style={[Layout.rowHCenter, Layout.justifyContentBetween]}>
          <Text style={styles.heading}>
            {type === 'create' ? 'Create budget' : 'Edit budget'}
          </Text>
          {type === 'edit' && (
            <RoundIconButton
              icon={<TrashIcon isFilled={false} />}
              bgColor={Colors.primaryRed}
              borderColor={Colors.white}
              isSmall={true}
              onPress={handleShowDeleteModal}
            />
          )}
        </View>

        <View style={[Layout.rowHCenter, styles.budgetNameView]}>
          <BottomSheetTextInput
            placeholder="Budget name"
            placeholderTextColor={Colors.primaryBlack}
            style={styles.input}
            value={budgetObj.budgetName}
            onChangeText={text =>
              setBudgetObj({ ...budgetObj, budgetName: text })
            }
          />
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.txtCategory}>
            {handleChangeTotalBudgetTitle()}
          </Text>
          <View style={styles.categoryView}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {categoryList
                .filter(item => item.name !== 'Unspecified')
                .map((item, idx) => (
                  <View style={styles.category} key={idx}>
                    <OutlinedChip
                      name={item.name}
                      icon={
                        getIconByName(item.icon, loadAccountAndCategoryIcons, budgetObj.categories.includes(item.id.toString()) ? item.color : Colors.primaryYellow)
                      }
                      bgColor={getBgColor(item.id.toString(), item.color)}
                      borderColor={
                        budgetObj.categories.includes(item.id.toString())
                          ? Colors.transparent
                          : Colors.gray001
                      }
                      fontColor={
                        budgetObj.categories.includes(item.id.toString()) &&
                        item.color !== Colors.primaryYellow  &&
                        item.color !== Colors.primaryLightBlue &&
                        item.color !== Colors.lightPink &&
                        Colors.white
                      }
                      screenName="BudgetScreen"
                      onPress={() => handleMultipleCategory(item.id, item.name)}
                    />
                  </View>
                ))}
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.budgetAmountView}>
        <AccountBalanceAdd
          title="Budget Amount"
          amount={budgetAmount}
          currency={currency}
          onPress={handleShowCalculator}
        />
      </View>
      <View style={styles.bottomView}>
        <SaveCloseController
          handleClose={handleCloseModal}
          handleSubmit={() =>
            onSubmitBudget(
              budgetObj?.budgetName,
              budgetAmount,
              budgetObj?.categories,
              selectedBudget?.id,
            )
          }
          submitButtonText={type === 'create' ? 'Add' : 'Save'}
          disabled={
            budgetObj.budgetName === '' || budgetAmount === '0'
          }
          submitButtonIcon={
            type === 'create' ? (
              <PlusIcon isWhite={true} />
            ) : (
              <SaveIcon isWhite={true} />
            )
          }
        />
      </View>
      <BottomSheet
        snapPoints={snapPointsCalculator}
        bottomSheetModalRef={calculatorModalRef}
        onChange={idx => setIsOpenCalculatorModal(idx >= 1)}>
        <View>
          <Calculator
            handleCloseModal={handleCloseCalculator}
            onSubmit={onCalculatorSubmit}
            screenTitle="BufferScreen"
            selectedAccountRef={{ name: '', accountId: '', currency: '' }}
            amountRef={budgetAmount}
            currency={currency}
          />
        </View>
      </BottomSheet>
      <DeleteAdd
        deleteModalRef={deleteModalRef}
        handleCloseModal={handleCloseDeleteModal}
        heading1="Confirm deletion"
        message={`Are you sure that you want to delete ${budgetObj.budgetName} budget?`}
        onDelete={() => onDelete(budgetObj.budgetId)}
        nextDefault={2}
        onChange={idx => setIsOpenDeleteModal(idx >= 1)}
      />

    </View>
  );
};
