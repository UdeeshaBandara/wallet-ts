import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Colors } from '../../../Theme/Variables';
import styles from './styles';

export const CalculatorKey = ({ textValue = '', icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.outlinedView} onPress={onPress}>
      {textValue !== '' ? (
        <Text
          style={[
            styles.textButton,
            textValue === 'C' && { color: Colors.primaryRed },
          ]}>
          {textValue}
        </Text>
      ) : (
        icon
      )}
    </TouchableOpacity>
  );
};
