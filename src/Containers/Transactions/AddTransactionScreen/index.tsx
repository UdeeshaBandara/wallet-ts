import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  Alert,
  BackHandler,
  LayoutAnimation,
  Platform,
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import moment from 'moment/moment';

import Category from '../../../Database/Model/Category';
import Transaction from '../../../Database/Model/Transaction';
import TrnLinkRecord from '../../../Database/Model/TrnLinkRecord';

import { useTabMenu } from '../../../Navigators/TabContext';

import {
  AddCategoryOutlined,
  BottomSheet,
  Calculator,
  CategoryAdd,
  CategoryCell,
  CategoryCreateAndEdit,
  CustomDatePicker,
  DeleteAdd,
  DescriptionAdd,
  MoneyAdd,
  OutlinedChip,
  OutlinedRoundButton,
  RoundIconButton,
  SelectTransfer,
  SetTransactionType,
} from '../../../Components';
import CalenderIcon from '../../../Assets/SVGIcons/CalenderIcon';
import CancelIcon from '../../../Assets/SVGIcons/CancelIcon';
import DescriptionIcon from '../../../Assets/SVGIcons/DescriptionIcon';
import PlusBlackIcon from '../../../Assets/SVGIcons/PlusBlackIcon';
import TransferIncomeDeselected from '../../../Assets/SVGIcons/TransferIncomeDeselected';
import TransferExpenseDeselected from '../../../Assets/SVGIcons/TransferExpenseDeselected';
import TrashIcon from '../../../Assets/SVGIcons/TrashIcon';

import styles from './styles';
import { useTheme } from '../../../Theme';

interface Props {
  route: any;
  navigation: any;
}

export const AddTransactionScreenType: FC<Props> = ({
  route,
  navigation = 0,
}) => {
  const { Layout, Colors } = useTheme();
  const { type, isEditMode, isFromAccount, isFromCategory } = route.params;
  const existingDetails = route.params.existingDetails;

  const { isNewAccountAdded, isNewFromAccountAdded } = useTabMenu();

  const bottomSheetModalRef = useRef<any>(null);
  const categoryAddBottomSheetModalRef = useRef<any>(null);
  const transferBottomSheetModalRef = useRef<any>(null);
  const descriptionAddSheetModalRef = useRef<any>(null);
  const deleteModalRef = useRef<any>(null);
  const isChangeToTransferFromIncomeExpense = useRef<boolean>(false);
  const isCategorySelect = useRef<boolean>(
    (isEditMode || isFromCategory) && existingDetails.categories != null,
  );
  const defaultCategory = useRef<any>({});
  const initialDate = useRef<string>(moment(new Date()).format('X'));
  const categoryCreateEditModalRef = useRef<any>(null);
  const selectedToAccountId = useRef<string>(
    isEditMode && type === 'transfer' ? existingDetails.accountsTo.id : '0',
  );
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<string>(
    (isEditMode || isFromCategory) && existingDetails.categories != null
      ? existingDetails.categories.id
      : '',
  );

  const snapPoints = useMemo(
    () => ['25%', Platform.OS === 'android' ? '82%' : '80%'],
    [],
  );
  const snapPointsDescription = useMemo(() => ['25%', '40%'], []);
  const snapPointsTransferAdd = useMemo(() => ['30%', '60%'], []);

  const [transactionType, setTransactionType] = useState<string>(type);
  const [selectedAccount, setSelectedAccount] = useState<any>({
    name: isEditMode || isFromAccount ? existingDetails.accounts.name : '',
    accountId: isEditMode || isFromAccount ? existingDetails.accounts.id : '',
    currency:
      isEditMode || isFromAccount ? existingDetails.accounts.currency : '',
    color: isEditMode || isFromAccount ? existingDetails.accounts.color : '',
    icon: isEditMode || isFromAccount ? existingDetails.accounts.icon : '',
  });

  const [selectedToAccount, setSelectedToAccount] = useState<any>({
    name:
      isEditMode && type === 'transfer' ? existingDetails.accountsTo.name : '',
    accountId:
      isEditMode && type === 'transfer' ? existingDetails.accountsTo.id : '',
    currency:
      isEditMode && type === 'transfer'
        ? existingDetails.accountsTo.currency
        : '',
    color:
      isEditMode && type === 'transfer' ? existingDetails.accountsTo.color : '',
    icon:
      isEditMode && type === 'transfer' ? existingDetails.accountsTo.icon : '',
  });

  const [title, setTitle] = useState<string>(
    isEditMode ? existingDetails.transactions.title : '',
  );

  const [amount, setAmount] = useState<string>(
    isEditMode ? existingDetails.transactions.amount : '0',
  );

  const [selectedDate, setSelectedDate] = useState<string>(
    isEditMode
      ? `${moment(existingDetails.transactions.time, 'X').format(
          'MMM DD HH:mm',
        )}`
      : `${moment(new Date()).format('MMM DD HH:mm')}`,
  );

  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [description, setDescription] = useState<string>(
    isEditMode ? existingDetails.transactions.description : '',
  );
  const [isMinimize, setIsMinimize] = useState<boolean>(false);

  const [selectedCategory, setSelectedCategory] = useState<any>({
    categoryId:
      (isEditMode || isFromCategory) && existingDetails.categories != null
        ? existingDetails.categories.id
        : '',
    categoryName:
      (isEditMode || isFromCategory) && existingDetails.categories != null
        ? existingDetails.categories.name
        : '',
    categoryColor:
      (isEditMode || isFromCategory) && existingDetails.categories != null
        ? existingDetails.categories.color
        : '',
    categoryIcon:
      (isEditMode || isFromCategory) && existingDetails.categories != null
        ? existingDetails.categories.icon
        : '',
  });
  const [isOpenCalculatorModal, setIsOpenCalculatorModal] =
    useState<boolean>(false);
  const [isOpenCategoryModal, setIsOpenCategoryModal] =
    useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [isOpenDescriptionModal, setIsOpenDescriptionModal] =
    useState<boolean>(false);
  const [isOpenTransferModal, setIsOpenTransferModal] =
    useState<boolean>(false);
  const [verticalScrollValue, setVerticalScrollValue] = useState<number>(0);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [
    isOpenCalculatorModal,
    isOpenCategoryModal,
    isOpenDeleteModal,
    isOpenDescriptionModal,
    isOpenTransferModal,
  ]);

  useFocusEffect(
    useCallback(() => {
      if (!isEditMode && !isNewFromAccountAdded.current) {
        handleShowModal();
      }
      getDefaultCategory();
    }, []),
  );

  const handleShowModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleDescriptionModal = useCallback(() => {
    descriptionAddSheetModalRef.current?.present();
  }, []);

  const handleShowCategoryAddModal = useCallback(() => {
    categoryAddBottomSheetModalRef.current?.present();
  }, []);

  const handleShowTransferModal = useCallback(() => {
    transferBottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const handleCloseDescriptionModal = useCallback(() => {
    descriptionAddSheetModalRef.current?.dismiss();
  }, []);

  const handleCloseCategoryAddModal = useCallback(
    (selectedCategoryIndex: number) => {
      if (selectedCategoryIndex === -1) {
        isCategorySelect.current = false;
        setSelectedCategory({
          ...selectedCategory,
          categoryId: defaultCategory.current.id,
          categoryName: defaultCategory.current.name,
          categoryColor: defaultCategory.current.color,
          categoryIcon: defaultCategory.current.icon,
        });
      }
      categoryAddBottomSheetModalRef.current?.dismiss();
    },
    [],
  );

  const handleTransactionModal = useCallback(() => {
    transferBottomSheetModalRef.current?.dismiss();
  }, []);

  const handleTransactionSelectModal = useCallback(() => {
    requestAnimationFrame(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setIsMinimize(isMinimize => !isMinimize);
    });
  }, []);

  const handleCloseCategoryCreateEdit = useCallback(
    (categoryId: string, category: string, color: string, icon: string) => {
      categoryCreateEditModalRef.current?.dismiss();
      onCategorySubmit(categoryId, category, color, icon);
      setSelectedCategoryIndex(categoryId);
    },
    [],
  );

  const onCalculatorSubmit = useCallback(
    (amountRef: string, accountFromCal: string) => {
      setAmount(amountRef);
      setSelectedAccount({
        ...selectedAccount,
        name: accountFromCal.name,
        accountId: accountFromCal.accountId,
        currency: accountFromCal.currency,
        color: accountFromCal.color,
        icon: accountFromCal.icon,
      });

      bottomSheetModalRef.current?.dismiss();
      if (transactionType !== 'transfer' && !isFromCategory) {
        if (!isCategorySelect.current) {
          handleShowCategoryAddModal();
        }
      }
    },
    [],
  );

  const onCategorySubmit = useCallback(
    (categoryId: string, category: string, color: string, icon: string) => {
      isCategorySelect.current = true;
      setSelectedCategory({
        ...selectedCategory,
        categoryId: categoryId,
        categoryName: category,
        categoryColor: color,
        categoryIcon: icon,
      });
      categoryAddBottomSheetModalRef.current?.dismiss();
    },
    [],
  );

  const onTransferTypeChanged = useCallback((selectedTransferType: number) => {
    transferBottomSheetModalRef.current?.dismiss();

    if (selectedTransferType === 0) {
      isChangeToTransferFromIncomeExpense.current = false;
      setTransactionType('income');
    } else if (selectedTransferType === 1) {
      isChangeToTransferFromIncomeExpense.current = false;
      setTransactionType('expense');
    } else {
      setTransactionType('transfer');
      isChangeToTransferFromIncomeExpense.current = true;
    }
  }, []);

  const minimizeMoneyAdd = useCallback(() => {
    requestAnimationFrame(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setIsMinimize(isMinimize => !isMinimize);
    });
  }, []);

  const onDescriptionSubmit = useCallback((desValue: string) => {
    setDescription(desValue);
    descriptionAddSheetModalRef.current?.dismiss();
  }, []);

  const saveNewTransaction = useCallback(
    async (accountId: string, currency: string) => {
      if (amount !== '0') {
        if (isEditMode) {
          await updateTransaction(accountId, currency);
        } else {
          await addTransactionToDb(accountId, currency, amount);
        }
      } else {
        Alert.alert('Failed to save', 'Please enter a valid amount', [
          {
            text: 'Try again',
          },
        ]);
      }
    },
    [amount, selectedCategory, description, title, transactionType],
  );

  const handleShowDeleteModal = useCallback(() => {
    deleteModalRef.current?.present();
  }, []);

  const handleCloseDeleteModal = useCallback(() => {
    deleteModalRef.current?.dismiss();
  }, []);

  const backAction = (): boolean => {
    if (isOpenCalculatorModal) {
      bottomSheetModalRef.current?.close();
      return true;
    } else if (isOpenCategoryModal) {
      categoryAddBottomSheetModalRef.current?.close();
      return true;
    } else if (isOpenDescriptionModal) {
      descriptionAddSheetModalRef.current?.close();
      return true;
    } else if (isOpenTransferModal) {
      transferBottomSheetModalRef.current?.close();
      return true;
    } else if (isOpenDeleteModal) {
      deleteModalRef.current?.close();
      return true;
    } else {
      updatePropsAndGoBack();
      return true;
    }
  };

  const getDefaultCategory = async () => {
    defaultCategory.current = await Category.getCategoryById('11');
  };

  const onDelete = async () => {
    if (transactionType === 'transfer') {
      await Transaction.deleteTransactionById(
        existingDetails.transactionsTo.id,
      );
    }
    await Transaction.deleteTransactionById(existingDetails.transactions.id);

    updatePropsAndGoBack();
  };

  const onDateSelect = (calendarValue: string) => {
    setIsCalendarOpen(false);
    initialDate.current = moment(calendarValue).format('X');
    if (isEditMode) {
      existingDetails.transactions.time = moment(calendarValue).format('X');
    }
    setSelectedDate(moment(calendarValue).format('MMM DD HH:mm'));
  };

  const renderCategoryComponent: FC = () => {
    if (transactionType === 'income' || transactionType === 'expense') {
      if (
        selectedCategory.categoryName !== '' &&
        selectedCategory.categoryName !== 'Unspecified'
      ) {
        return (
          <TouchableOpacity
            style={styles.categoryCell}
            onPress={handleShowCategoryAddModal}>
            <CategoryCell
              name={selectedCategory.categoryName}
              color={selectedCategory.categoryColor}
              isSelected={false}
              icon={selectedCategory.categoryIcon}
            />
          </TouchableOpacity>
        );
      } else {
        return (
          <AddCategoryOutlined
            name="Add category"
            icon={<PlusBlackIcon />}
            onPress={handleShowCategoryAddModal}
          />
        );
      }
    } else {
      return null;
    }
  };

  const saveTransferTransaction = useCallback(
    async (accountToId: string, accountFromId: string, currency: string) => {
      if (
        accountToId === '' ||
        accountToId === undefined ||
        accountFromId === '' ||
        accountFromId === undefined
      ) {
        Alert.alert(
          'Failed to save',
          'Something went wrong with account selection.',
          [
            {
              text: 'Try again',
            },
          ],
        );
        return;
      }

      //here first check whether it's transferred from income/expense, if yes delete that record and add as new transfer record
      if (isChangeToTransferFromIncomeExpense.current && isEditMode) {
        await Transaction.deleteTransactionById(
          existingDetails.transactions.id,
        );
      }

      if (amount !== '0') {
        if (isEditMode && !isChangeToTransferFromIncomeExpense.current) {
          await updateTransferTransactionDb(
            accountToId,
            accountFromId,
            currency,
            amount,
          );
        } else {
          await addTransferTransactionToDb(
            accountToId,
            accountFromId,
            currency,
            amount,
          );
        }
      } else {
        Alert.alert('Failed to save', 'Please enter a valid amount.', [
          {
            text: 'Try again',
          },
        ]);
      }
    },
    [amount, selectedCategory, description, title],
  );

  const addTransactionToDb = async (
    accountId: string,
    currency: string,
    amount: string,
  ) => {
    if (accountId === '' || accountId === undefined) {
      Alert.alert(
        'Failed to save',
        'Something went wrong with account selection.',
        [
          {
            text: 'Try again',
          },
        ],
      );
      return;
    }

    const transaction = {
      accountId: accountId,
      type: transactionType === 'income' ? '1' : '2',
      amount: amount,
      currency: currency,
      time: Number(initialDate.current),
      title: title,
      description: description,
      categoryId:
        isCategorySelect.current || isFromCategory
          ? selectedCategory.categoryId
          : defaultCategory.current.id,
      //adding purpose as 0 for non transfer type transactions
      purpose: '0',
    };

    await Transaction.createTransaction(transaction);

    updatePropsAndGoBack();
  };

  const addTransferTransactionToDb = async (
    accountToId: string,
    accountFromId: string,
    currency: string,
    amount: string,
  ) => {
    if (accountToId === accountFromId) {
      Alert.alert(
        'Failed to save',
        'You cannot perform transfer transactions within the same account. Please select a different account.',
        [
          {
            text: 'Try again',
          },
        ],
      );
      return;
    }

    const transactionFromModel = {
      accountId: accountFromId,
      type: '1',
      amount: amount,
      currency: currency,
      time: Number(initialDate.current),
      title: title,
      description: description,
      categoryId:
        selectedCategory.categoryId !== ''
          ? selectedCategory.categoryId
          : defaultCategory.current.id,
      purpose: '1',
    };

    let transactionFromResult = await Transaction.createTransaction(
      transactionFromModel,
    );

    const transactionToModel = {
      accountId: accountToId,
      type: '2',
      amount: amount,
      currency: currency,
      time: Number(initialDate.current) + 1,
      title: title,
      description: description,
      categoryId:
        selectedCategory.categoryId !== ''
          ? selectedCategory.categoryId
          : defaultCategory.current.id,
      purpose: '2',
    };

    let transactionToResult = await Transaction.createTransaction(
      transactionToModel,
    );

    await addTransactionLinkRecord(
      accountToId,
      accountFromId,
      transactionToResult._raw.id,
      transactionFromResult._raw.id,
    );

    updatePropsAndGoBack();
  };

  const updateTransferTransactionDb = async (
    accountToId: string,
    accountFromId: string,
    currency: string,
    amount: string,
  ) => {
    if (accountToId === accountFromId) {
      Alert.alert(
        'Failed to save',
        'You cannot perform transfer transactions within the same account. Please add or select a different account.',
        [
          {
            text: 'Try again',
          },
        ],
      );
      return;
    }

    const transactionFromUpdateModel = {
      id: existingDetails.transactionsTo.id,
      accountId: accountFromId,
      type: '1',
      amount: amount,
      currency: currency,
      time: Number(existingDetails.transactions.time),
      title: title,
      description: description,
      categoryId:
        selectedCategory.categoryId !== ''
          ? selectedCategory.categoryId
          : defaultCategory.current.id,
      purpose: '1',
    };

    let transactionFromUpdateResult = await Transaction.updateTransactionById(
      transactionFromUpdateModel,
    );

    const transactionToUpdateModel = {
      id: existingDetails.transactions.id,
      accountId: accountToId,
      type: '2',
      amount: amount,
      currency: currency,
      time: Number(existingDetails.transactions.time),
      title: title,
      description: description,
      categoryId:
        selectedCategory.categoryId !== ''
          ? selectedCategory.categoryId
          : defaultCategory.current.id,
      purpose: '2',
    };

    let transactionToUpdateResult = await Transaction.updateTransactionById(
      transactionToUpdateModel,
    );

    await updateTransactionLinkRecord(
      accountToId,
      accountFromId,
      transactionToUpdateResult._raw.id,
      transactionFromUpdateResult._raw.id,
    );

    updatePropsAndGoBack();
  };

  const addTransactionLinkRecord = async (
    fromAccountId: string,
    toAccountId: string,
    fromTransactionId: string,
    toTransactionId: string,
  ) => {
    const transactionLink = {
      fromTransactionId: fromTransactionId,
      toTransactionId: toTransactionId,
      fromAccountId: fromAccountId,
      toAccountId: toAccountId,
    };

    await TrnLinkRecord.createTransactionLink(transactionLink);
  };

  const updateTransactionLinkRecord = async (
    fromAccountId: string,
    toAccountId: string,
    fromTransactionId: string,
    toTransactionId: string,
  ) => {
    const transactionLink = {
      fromTransactionId: fromTransactionId,
      toTransactionId: toTransactionId,
      fromAccountId: fromAccountId,
      toAccountId: toAccountId,
    };
    await TrnLinkRecord.updateTransactionLink(transactionLink);
  };

  const updateTransaction = async (accountId: string, currency: string) => {
    const transactionUpdate = {
      id: existingDetails.transactions.id,
      accountId: accountId,
      type: transactionType === 'income' ? '1' : '2',
      amount: amount,
      currency: currency,
      time: Number(existingDetails.transactions.time),
      title: title,
      description: description,
      categoryId:
        selectedCategory.categoryId !== ''
          ? selectedCategory.categoryId
          : defaultCategory.current.id,
      //adding purpose as 0 for non transfer type transactions
      purpose: '0',
    };

    await Transaction.updateTransactionById(transactionUpdate);

    updatePropsAndGoBack();
  };

  const updatePropsAndGoBack = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView style={[Layout.fill, styles.parentContainer]}>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <OutlinedRoundButton
            icon={<CancelIcon />}
            onPress={() => {
              updatePropsAndGoBack();
            }}
          />
          <View style={styles.header}>
            {(transactionType === 'income' ||
              transactionType === 'expense') && (
              <OutlinedChip
                name={transactionType === 'income' ? 'Income' : 'Expense'}
                icon={
                  transactionType === 'income' ? (
                    <TransferIncomeDeselected />
                  ) : (
                    <TransferExpenseDeselected />
                  )
                }
                onPress={() => {
                  handleShowTransferModal();
                }}
              />
            )}
            {isEditMode && (
              <View style={{ marginLeft: 10 }}>
                <RoundIconButton
                  icon={<TrashIcon isFilled={false} />}
                  bgColor={Colors.primaryRed}
                  borderColor={Colors.white}
                  isSmall={true}
                  onPress={handleShowDeleteModal}
                />
              </View>
            )}
          </View>
        </View>
        <TextInput
          placeholderTextColor="#93929A"
          placeholder={
            transactionType === 'income'
              ? 'Income title'
              : transactionType === 'transfer'
              ? 'Transfer title'
              : 'Expense title'
          }
          style={styles.input}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <ScrollView>
          <View style={{ marginBottom: 20 }}>
            {renderCategoryComponent()}
            <TouchableOpacity
              style={[
                styles.cardBackground,
                transactionType === 'transfer' && { marginTop: 0 },
              ]}
              onPress={() => {
                handleDescriptionModal();
              }}
              onStartShouldSetResponderCapture={false}>
              <DescriptionIcon />

              <ScrollView>
                <Text style={styles.descriptionText}>
                  {description === '' ? 'Add description' : description}
                </Text>
              </ScrollView>
            </TouchableOpacity>
            <View
              style={[
                styles.cardBackground,
                { paddingVertical: 19, justifyContent: 'space-between' },
              ]}>
              <View style={styles.subRow}>
                <CalenderIcon />
                <Text
                  style={[styles.descriptionText, { color: Colors.gray003 }]}>
                  Created on
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => setIsCalendarOpen(true)}>
                  <Text
                    style={[
                      styles.descriptionText,
                      styles.descriptionTextExtensions,
                    ]}>
                    {selectedDate}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            enablePanDownToClose={false}
            enableTouchOutsideToClose={false}
            enableHandlePanningGesture={false}
            enableContentPanningGesture={false}
            style={styles.bottomSheetHeader}
            handleIndicatorStyle={{ display: 'none' }}
            onChange={idx => setIsOpenCalculatorModal(idx >= 1)}>
            <View style={styles.contentContainer}>
              <Calculator
                handleCloseModal={handleCloseModal}
                onSubmit={onCalculatorSubmit}
                amountRef={amount}
                selectedAccountRef={selectedAccount}
                isTransfer={type === 'transfer'}
                isNewAccountAdded={isNewAccountAdded}
                verticalScrollValue={verticalScrollValue}
                setVerticalScrollValue={setVerticalScrollValue}
              />
            </View>
          </BottomSheetModal>
          <BottomSheetModal
            ref={categoryAddBottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            enablePanDownToClose={false}
            enableTouchOutsideToClose={false}
            enableHandlePanningGesture={false}
            enableContentPanningGesture={false}
            style={styles.bottomSheetHeader}
            handleIndicatorStyle={{ display: 'none' }}
            onChange={idx => setIsOpenCategoryModal(idx >= 1)}>
            <View style={styles.contentContainer}>
              <CategoryAdd
                handleCloseCategoryAddModal={handleCloseCategoryAddModal}
                onCategoryAdd={onCategorySubmit}
                categoryCreateEditModalRef={categoryCreateEditModalRef}
                selectedCategoryIndex={selectedCategoryIndex}
                setSelectedCategoryIndex={setSelectedCategoryIndex}
              />
            </View>
          </BottomSheetModal>
          <BottomSheetModal
            ref={transferBottomSheetModalRef}
            index={1}
            snapPoints={snapPointsTransferAdd}
            enablePanDownToClose={false}
            enableTouchOutsideToClose={false}
            enableHandlePanningGesture={false}
            enableContentPanningGesture={false}
            style={styles.bottomSheetHeader}
            handleIndicatorStyle={{ display: 'none' }}
            onChange={idx => setIsOpenTransferModal(idx >= 1)}>
            <View style={styles.contentContainer}>
              <SetTransactionType
                minimizeTransferModal={handleTransactionModal}
                onTransferChange={onTransferTypeChanged}
                initialType={transactionType === 'income' ? 0 : 1}
              />
            </View>
          </BottomSheetModal>
          <BottomSheet
            bottomSheetModalRef={descriptionAddSheetModalRef}
            index={1}
            snapPoints={snapPointsDescription}
            enablePanDownToClose={false}
            enableTouchOutsideToClose={false}
            enableHandlePanningGesture={false}
            enableContentPanningGesture={false}
            keyboardBlurBehavior="restore"
            style={styles.bottomSheetHeader}
            handleIndicatorStyle={{ display: 'none' }}
            onChange={(idx: number) => setIsOpenDescriptionModal(idx >= 1)}>
            <DescriptionAdd
              handleCloseModal={handleCloseDescriptionModal}
              onDescriptionSubmit={onDescriptionSubmit}
              descriptionProp={description}
              multiline={true}
            />
          </BottomSheet>
        </ScrollView>
        <CustomDatePicker
          handleClose={() => setIsCalendarOpen(false)}
          onSetSelectedDate={text => onDateSelect(text)}
          open={isCalendarOpen}
          date={
            isEditMode
              ? moment.unix(existingDetails.transactions.time).toDate()
              : new Date()
          }
          mode="datetime"
        />
        <DeleteAdd
          deleteModalRef={deleteModalRef}
          handleCloseModal={handleCloseDeleteModal}
          heading1="Confirm deletion"
          message="Deleting this transaction will remove it from the transaction history and update the balance accordingly."
          onDelete={onDelete}
          nextDefault={2}
          onChange={(idx: number) => setIsOpenDeleteModal(idx >= 1)}
        />
      </View>
      {transactionType === 'transfer' ? (
        <View style={styles.bottomView}>
          <SelectTransfer
            minimizeTransferMoneyModal={handleTransactionSelectModal}
            onTransferMoneyAdd={saveTransferTransaction}
            showCalculatorModal={handleShowModal}
            amount={amount}
            isMinimize={isMinimize}
            isEditMode={isEditMode}
            selectedToAccount={selectedAccount}
            setSelectedToAccount={setSelectedAccount}
            selectedFromAccount={selectedToAccount}
            setSelectedFromAccount={setSelectedToAccount}
            isNewAccountAdded={isNewAccountAdded}
            isNewFromAccountAdded={isNewFromAccountAdded}
            selectedToAccountId={selectedToAccountId}
          />
        </View>
      ) : (
        <View style={styles.bottomView}>
          <MoneyAdd
            title={transactionType === 'income' ? 'Add money to' : 'Pay with'}
            minimizeMoneyAddModal={minimizeMoneyAdd}
            showCalculatorModal={handleShowModal}
            amount={amount}
            isMinimize={isMinimize}
            onMoneyAdd={saveNewTransaction}
            selectedAccountRef={selectedAccount}
            isEditMode={isEditMode}
            isFromAccount={isFromAccount}
            setSelectedAccountRef={setSelectedAccount}
            isNewAccountAdded={isNewAccountAdded}
            verticalScrollValue={verticalScrollValue}
            setVerticalScrollValue={setVerticalScrollValue}
          />
        </View>
      )}
      <CategoryCreateAndEdit
        categoryCreateEditModalRef={categoryCreateEditModalRef}
        handleCloseModal={handleCloseCategoryCreateEdit}
        type="create"
        onChange={(idx: number) => setIsOpenCategoryModal(idx >= 1)}
      />
    </SafeAreaView>
  );
};
