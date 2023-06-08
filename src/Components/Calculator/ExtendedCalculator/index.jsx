import React, { useEffect, useMemo, useState } from 'react';
import {
  BackHandler,
  FlatList,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import * as math from 'mathjs';

import { getThousandFormatterForCalculator } from '../../../Util/Common';
import { calculatorKeys } from '../../../Util/Constants';

import { BottomSheet, SaveCloseController } from '../../index';
import { CalculatorKey } from '../CalculatorKey/index';
import CalculatorDeleteIcon from '../../../Assets/SVGIcons/CalculatorDeleteIcon';
import CorrectIcon from '../../../Assets/SVGIcons/CorrectIcon';

import { Colors } from '../../../Theme/Variables';
import styles from './styles';

const ExtendedCalculator = ({
  extendedCalculatorModalRef,
  handleCloseModal,
  onPressSet,
  amountRef,
}) => {
  const snapPoints = useMemo(
    () => ['25%', Platform.OS === 'android' ? '92%' : '90%'],
    [],
  );

  const [calculateValue, setCalculateValue] = useState(
    amountRef === '0' ? '' : parseFloat(amountRef).toFixed(2),
  );
  const [isCalculate, setIsCalculate] = useState(false);
  const [isOpenExtendCalculator, setIsOpenExtendCalculator] = useState(false);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [isOpenExtendCalculator]);

  useEffect(() => {
    setCalculateValue(
      amountRef === '0' ? '' : parseFloat(amountRef).toFixed(2),
    );
    setIsCalculate(false);
  }, [amountRef]);

  const backAction = () => {
    if (isOpenExtendCalculator) {
      handleClose();
      return true;
    }
    return false;
  };

  const handleCalculatorDigitButtonPress = keyValue => {
    if (calculateValue === '' && keyValue !== 'C' && keyValue !== '=') {
      setCalculateValue(keyValue);
    } else if (keyValue === 'C') {
      setCalculateValue('');
    } else if (keyValue === '=') {
      if (calculateValue != '') {
        try {
          const result = math.evaluate(calculateValue);
          setCalculateValue(parseFloat(result).toFixed(2));
        } catch (error) {
          setIsCalculate(false);
        }
      }
    } else {
      setCalculateValue(calculateValue + keyValue);
    }
  };

  const handleCalculatorDeleteButtonPress = () => {
    if (calculateValue.length === 1) setCalculateValue('');
    else
      setCalculateValue(calculateValue.substring(0, calculateValue.length - 1));
  };

  const handleSetCalculateValue = () => {
    if (isCalculate === false) {
      if (calculateValue != '') {
        try {
          const result = math.evaluate(calculateValue);
          onPressSet(parseFloat(result).toFixed(2));
        } catch (error) {
          setIsCalculate(false);
        }
      }
    } else {
      onPressSet(calculateValue);
    }
  };

  const handleClose = () => {
    setCalculateValue(
      amountRef === '0' ? '' : parseFloat(amountRef).toFixed(2),
    );
    setIsCalculate(false);
    handleCloseModal();
  };

  return (
    <BottomSheet
      snapPoints={snapPoints}
      bottomSheetModalRef={extendedCalculatorModalRef}
      onChange={idx => setIsOpenExtendCalculator(idx >= 1)}>
      <View style={styles.parentContainer}>
        <View style={styles.subContainer}>
          <ScrollView>
            <>
              <Text style={styles.accountText}>Calculator</Text>
              <View style={styles.displayValueView}>
                {calculateValue === '' ? (
                  <Text
                    style={[
                      styles.txtAmount,
                      { fontSize: 30, color: Colors.gray002 },
                    ]}>
                    Calculation (+-/*=)
                  </Text>
                ) : (
                  <Text style={styles.txtAmount}>
                    {getThousandFormatterForCalculator(calculateValue)}
                  </Text>
                )}
              </View>
              <FlatList
                columnWrapperStyle={styles.columnWrapperStyle}
                data={calculatorKeys.extendedCalculatorData}
                scrollEnabled={false}
                renderItem={({ item, index }) => {
                  return index !==
                    calculatorKeys.extendedCalculatorData.length - 1 ? (
                    <CalculatorKey
                      textValue={item}
                      onPress={() => {
                        handleCalculatorDigitButtonPress(item);
                      }}
                    />
                  ) : (
                    <CalculatorKey
                      icon={<CalculatorDeleteIcon />}
                      onPress={handleCalculatorDeleteButtonPress}
                    />
                  );
                }}
                numColumns={4}
                keyExtractor={(item, index) => index.toString()}
              />
            </>
          </ScrollView>
        </View>
        <SaveCloseController
          handleClose={handleClose}
          submitButtonText={'Set'}
          handleSubmit={handleSetCalculateValue}
          submitButtonIcon={<CorrectIcon isWhite={true} />}
        />
      </View>
    </BottomSheet>
  );
};

export default ExtendedCalculator;
