import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { getFormattedBalanceWithCents } from '../../Util/Common';

import styles from './styles';

const AccountBalanceAdd = ({
  amount,
  currency,
  onPress,
  title = 'ENTER ACCOUNT BALANCE',
}) => {
  return (
    <View style={styles.balanceContainer}>
      <Text
        style={{
          ...styles.txtHeading,
          ...(title === 'Budget Amount' && { fontSize: 18 }),
        }}>
        {title}
      </Text>
      <TouchableOpacity style={styles.btnBalance} onPress={onPress}>
        <Text style={styles.txtBtnBalance}>
          {getFormattedBalanceWithCents(amount).balanceWithThousandSeparator}
        </Text>
        <Text style={styles.txtCents}>
          .{getFormattedBalanceWithCents(amount).cents}
        </Text>
        <Text style={styles.txtBtnCurrency}> {currency}</Text>
      </TouchableOpacity>
    </View>
  );
};

export { AccountBalanceAdd };
