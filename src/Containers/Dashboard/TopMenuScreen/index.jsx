import React, {
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {
  Alert,
  BackHandler,
  Platform,
  SafeAreaView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import moment from 'moment';

import Buffer from "../../../Database/Model/Buffer";
import Transaction from "../../../Database/Model/Transaction";

import { PLAY_STORE_URL } from '../../../Util/Constants';
import {
  getBufferCardAmount,
  getBufferButtonTitle,
  getBufferCardColor,
  getBufferCardIcon,
  getBufferPercentage,
  getFormattedBalanceWithCents,
} from '../../../Util/Common';
import { navigate } from '../../../Navigators/Root';

import {
  BackButton,
  BufferButton,
  BottomSheet,
  RoundIconButton,
  SearchBar,
} from '../../../Components';
import BufferScreen from '../../Buffer/BufferScreen';
import BudgetIcon from '../../../Assets/SVGIcons/BudgetIcon';
import CategoriesIcon from '../../../Assets/SVGIcons/CategoriesIcon';
import SettingsIcon from '../../../Assets/SVGIcons/SettingsIcon';
import ShareIcon from '../../../Assets/SVGIcons/ShareIcon';
import SplitGroupIcon from '../../../Assets/SVGIcons/SplitGroupIcon';
import UpArrowIcon from '../../../Assets/SVGIcons/UpArrowIcon';

import { useTheme } from '../../../Theme';
import styles from './styles';

const width = Platform.OS === 'android' ? 190 : 200;

export default function TopMenuScreen({ navigation, route }) {
  const { Layout, Colors } = useTheme();
  const { transactionList } = route.params;

  const bufferModalRef = useRef(null);
  const filterTimestamps = useRef([moment(new Date()).utc().format('X')]);
  const snapPoints = useMemo(() => ['25%', '55%'], []);

  const [totalIncomeAmount, setTotalIncomeAmount] = useState('');
  const [totalExpenseAmount, setTotalExpenseAmount] = useState('');
  const [bufferAmount, setBufferAmount] = useState('');
  const [baseCurrency, setBaseCurrency] =useState('');
  const [isOpenBufferModal, setIsOpenBufferModal] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (bufferAmount === '') {
        getBufferAmount();
      }
    },[])
  );

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [bufferModalRef, isOpenBufferModal]);

  const handleShowModal = useCallback(() => {
    bufferModalRef.current?.present();
  }, []);

  const handleCloseModal = useCallback(() => {
    bufferModalRef.current?.dismiss();
  }, []);

  const onBufferSubmit = useCallback(amountRef => {
    bufferModalRef.current?.dismiss();
    updateBufferAmount(amountRef)
  }, []);

  const backAction = () => {
    if (isOpenBufferModal) {
      bufferModalRef.current?.close();
      return true;
    } else if (!isOpenBufferModal) {
      navigation.navigate({
        name: 'HomeScreen',
        params: { isAddTransaction: new Date().toString() },
        merge: true,
      });
      return true;
    }
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: PLAY_STORE_URL,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const getBufferAmount = async () =>{
    let bufferResponse  = await Buffer.getBufferAmount();

    if (bufferResponse?.length > 0) {
      setBufferAmount(bufferResponse[0]._raw.bufferAmount)
      setBaseCurrency(bufferResponse[0]._raw.baseCurrency)
      getTotalIncomeAndExpense(filterTimestamps?.current[0],bufferResponse[0]._raw.baseCurrency);
    }
  }

  const updateBufferAmount = async (newAmount) =>{
    const response = await Buffer.updateBufferAmount(newAmount);
    setBufferAmount(response._raw.bufferAmount);

  }

  const getTotalIncomeAndExpense = async (timestamps, baseCurrencySymbol) => {

    let { incomeTransactions, expenseTransactions } = await Transaction.getCashFlowAmount(1, [timestamps], baseCurrencySymbol);

    setTotalExpenseAmount(expenseTransactions[0].total == null ? 0 : expenseTransactions[0].total);
    setTotalIncomeAmount(incomeTransactions[0].total == null ? 0 : incomeTransactions[0].total);
  };



  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.Gray004 }]}>
      <View style={styles.container}>
        <SearchBar
          placeholder="Search transactions"
          outlinedColor={Colors.gray001}
          isTouchable={true}
          onPress={() =>
            navigate('SearchTransactionScreen', { transactionList })
          }
        />
        <Text style={styles.title}>Quick access</Text>
        <View style={styles.menuContainer}>
          <View
            style={[
              Layout.row,
              { flexWrap: 'wrap', justifyContent: 'space-between' },
            ]}>
            <View style={[Layout.colVCenter]}>
              <RoundIconButton
                bgColor={Colors.white}
                icon={<SettingsIcon />}
                onPress={() => navigate('SettingsScreen')}
              />
              <Text style={styles.menuName}>Settings</Text>
            </View>

            <View style={[Layout.colVCenter]}>
              <RoundIconButton
                bgColor={Colors.white}
                icon={<CategoriesIcon />}
                onPress={() => navigate('CategoryScreen')}
              />
              <Text style={styles.menuName}>Categories</Text>
            </View>

            <View style={[Layout.colVCenter]}>
              <RoundIconButton
                bgColor={Colors.white}
                icon={<BudgetIcon />}
                onPress={() => navigate('BudgetScreen')}
              />
              <Text style={styles.menuName}>Budget</Text>
            </View>
          </View>

          <View style={[Layout.row, styles.rowStyle]}>
            <View>
              <RoundIconButton
                bgColor={Colors.white}
                icon={<ShareIcon />}
                onPress={onShare}
              />
              <Text style={styles.menuName}>Share App</Text>
            </View>
            <View style={[Layout.colVCenter]}>
              <RoundIconButton
                bgColor={Colors.white}
                icon={<SplitGroupIcon />}
                onPress={()=> navigate('SplitGroupScreen')}
              />
              <Text style={styles.menuName}>Split Group</Text>
            </View>
          </View>
          
        </View>
        <View
          style={[
            Layout.rowHCenter,
            Layout.justifyContentBetween,
            { paddingHorizontal: 10, marginTop: 35 },
          ]}>
          <TouchableOpacity onPress={handleShowModal}>
            <Text style={styles.txtSaving}>Savings goal</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShowModal}>
            <Text
              style={[
                styles.txtBalance,
                bufferAmount.length >= 12 && {
                  fontSize: width / bufferAmount.length,
                },
              ]}>
              {
                getFormattedBalanceWithCents(bufferAmount)
                  .balanceWithThousandSeparator
              }
              .{getFormattedBalanceWithCents(bufferAmount).cents}
              <Text
                style={[
                  styles.txtCurrency,
                  bufferAmount.length >= 12 && {
                    fontSize: width / bufferAmount.length,
                  },
                ]}>
                {' '}
                {baseCurrency}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <BufferButton
          title={getBufferButtonTitle(getBufferCardAmount(totalIncomeAmount, totalExpenseAmount ,bufferAmount))}
          amount={getBufferCardAmount(totalIncomeAmount, totalExpenseAmount ,bufferAmount)}
          remainingAmount="1111"
          currency={baseCurrency}
          width={width}
          bgColor={getBufferCardColor(bufferAmount,getBufferCardAmount(totalIncomeAmount, totalExpenseAmount ,bufferAmount))}
          icon={getBufferCardIcon(bufferAmount,getBufferCardAmount(totalIncomeAmount, totalExpenseAmount ,bufferAmount))}
          percentage={getBufferPercentage(totalIncomeAmount, getBufferCardAmount(totalIncomeAmount, totalExpenseAmount ,bufferAmount))}
          onPress={handleShowModal}
        />
        <View style={styles.btnClose}>
          <BackButton
            icon={<UpArrowIcon />}
            onPress={() =>
              navigation.navigate({
                name: 'HomeScreen',
                params: { isAddTransaction: new Date().toString() },
                merge: true,
              })
            }
          />
        </View>
      </View>
      <BottomSheet
        snapPoints={snapPoints}
        onChange={idx => setIsOpenBufferModal(idx < 1 ? false : true)}
        bottomSheetModalRef={bufferModalRef}>
        <BufferScreen
          handleCloseModal={handleCloseModal}
          onBufferSubmit={onBufferSubmit}
          bufferAmount={bufferAmount}
          totalIncomeAmount={totalIncomeAmount}
          totalExpenseAmount={totalExpenseAmount}
          baseCurrency={baseCurrency}
        />
      </BottomSheet>
    </SafeAreaView>
  );
}
