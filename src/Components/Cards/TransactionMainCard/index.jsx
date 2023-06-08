import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import {
  getFormattedBalanceWithCents,
  getFormatBalanceInMandK,
  getTransactionIcon,
} from '../../../Util/Common';

import Gradient from '../../Gradient';

import styles from './styles';

export const TransactionMainCard = ({
  transactionType,
  bgColor,
  balance,
  currency,
  ...props
}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} {...props}>
      <Gradient colors={bgColor} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <View style={styles.card}>
          <View style={styles.titleView}>
            {getTransactionIcon(transactionType)}
            <Text style={styles.title}>{transactionType}</Text>
          </View>
          <Text style={styles.balance}>
            {balance < 100000
              ? getFormattedBalanceWithCents(balance).balanceWithThousandSeparator +'.' + getFormattedBalanceWithCents(balance).cents
              : getFormatBalanceInMandK(balance)}{' '}
            <Text>{currency}</Text>
          </Text>
        </View>
      </Gradient>
    </TouchableOpacity>
  );
};
