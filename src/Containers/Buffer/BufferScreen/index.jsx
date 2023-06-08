import React, {
  useCallback,
  useEffect,
  useRef,
  useMemo,
  useState,
} from 'react';
import {
  BackHandler,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  getBufferCardAmount,
  getBufferButtonTitle,
  getBufferCardColor,
  getBufferCardIcon,
  getBufferPercentage,
  getFormattedBalanceWithCents,
} from '../../../Util/Common';

import {
  BottomSheet,
  BufferButton,
  SaveCloseController,
} from '../../../Components';
import { Calculator } from '../../../Components/Calculator/index';
import SaveIcon from '../../../Assets/SVGIcons/SaveIcon';

import styles from './styles';

export default function BufferScreen({
  bufferAmount,
  totalIncomeAmount,
  totalExpenseAmount,
  baseCurrency,
  handleCloseModal,
  onBufferSubmit,
}) {
  const calculatorModalRef = useRef(null);
  const snapPointsCalculator = useMemo(() => ['25%', '80%'], []);

  const [isOpenCalculatorModal, setIsOpenCalculatorModal] = useState(false);
  const [amount, setAmount] = useState(bufferAmount);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [isOpenCalculatorModal]);

  const handleShowCalculator = useCallback(() => {
    calculatorModalRef.current?.present();
  }, []);

  const handleCloseCalculator = useCallback(() => {
    calculatorModalRef.current?.dismiss();
  }, []);

  const onCalculatorSubmit = useCallback(amountRef => {
    setAmount(parseFloat(amountRef).toFixed(2));
    calculatorModalRef.current?.dismiss();
  }, []);

  const backAction = () => {
    if (isOpenCalculatorModal) {
      calculatorModalRef?.current.close();
      return true;
    }
  };

  return (
    <View>
        <View style={styles.parentContainer}>
          <View style={styles.container}>
            <BufferButton
              title={getBufferButtonTitle(getBufferCardAmount(totalIncomeAmount, totalExpenseAmount, amount))}
              amount={getBufferCardAmount(totalIncomeAmount, totalExpenseAmount, amount)}
              currency={baseCurrency}
              bgColor={getBufferCardColor(amount,getBufferCardAmount(totalIncomeAmount, totalExpenseAmount, amount))}
              icon={getBufferCardIcon(amount,getBufferCardAmount(totalIncomeAmount, totalExpenseAmount, amount))}
              percentage={getBufferPercentage(totalIncomeAmount, getBufferCardAmount(totalIncomeAmount, totalExpenseAmount, amount))}
              disabled
            />
          </View>
          <View style={styles.divider} />

          <View style={styles.balanceContainer}>
            <Text style={styles.txtSaving}>Edit Savings goal</Text>
            <TouchableOpacity
              style={styles.btnBalance}
              onPress={handleShowCalculator}>
              <Text style={styles.txtBtnBalance}>
                {getFormattedBalanceWithCents(amount).balanceWithThousandSeparator}
              </Text>
              <Text style={styles.txtCents}>.{getFormattedBalanceWithCents(amount).cents}</Text>
              <Text style={styles.txtBtnCurrency}> {baseCurrency}</Text>
            </TouchableOpacity>
          </View>
          <SaveCloseController
            handleClose={handleCloseModal}
            submitButtonText="Save"
            handleSubmit={() => onBufferSubmit(amount)}
            submitButtonIcon={<SaveIcon isWhite={true} />}
          />
        </View>

      <BottomSheet
        snapPoints={snapPointsCalculator}
        bottomSheetModalRef={calculatorModalRef}
        onChange={idx => setIsOpenCalculatorModal(idx < 1 ? false : true)}>
        <View>
          <Calculator
            handleCloseModal={handleCloseCalculator}
            onSubmit={onCalculatorSubmit}
            screenTitle="BufferScreen"
            selectedAccountRef={{ name: '', accountId: '', currency: '' }}
            amountRef={amount === '0.00' ? '0' : parseFloat(amount).toFixed(0)}
            currency={baseCurrency}
          />
        </View>
      </BottomSheet>
    </View>
  );
}
