import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { getFormattedBalance } from '../../../Util/Common';

import { Colors } from '../../../Theme/Variables';
import styles from './styles';

export const AccountCategorySubCard = ({
  title,
  balance,
  transactions,
  currencyName,
  onPress,
  onPressAdd,
  colorCode
}) => {
  const getColors = () => {
    if (
      (colorCode === Colors.primaryYellow || colorCode === Colors.primaryLightBlue || colorCode === Colors.lightPink)
    ) {
      return ({
        fontColor: Colors.primaryBlack,
        cardBgColor: Colors.gray009,
        btnBgColor: Colors.primaryBlack,
        btnTxtColor: Colors.white,
      });
    } else {
      return ({
        fontColor: Colors.white,
        cardBgColor: '#2C2C34',
        btnBgColor: Colors.white,
        btnTxtColor: Colors.primaryBlack,
      });
    }
  };
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: getColors().cardBgColor }]}
      onPress={onPress}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: getColors().fontColor }]}>
          {title}
        </Text>
        <Text style={[styles.txtBalance, { color: getColors().fontColor }]}>
          {getFormattedBalance(balance)}
        </Text>
        <View style={{ maxWidth: 140 }}>
          <Text
            style={[styles.txtCurrencyName, { color: getColors().fontColor }]}>
            {currencyName}
          </Text>
        </View>
        <Text style={[styles.txtBalance, { color: getColors().fontColor }]}>
          {transactions}
        </Text>

        <Text
          style={[styles.txtCurrencyName, { color: getColors().fontColor }]}>
          transactions
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={[
            styles.btnAddExpensesIncome,
            title === 'Expense' && { backgroundColor: getColors().btnBgColor },
          ]}
          onPress={onPressAdd}>
          <Text
            style={[
              styles.txtBtn,
              title === 'Expense' && { color: getColors().btnTxtColor },
            ]}>
            {title === 'Income' ? 'Add income' : 'Add expense'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
