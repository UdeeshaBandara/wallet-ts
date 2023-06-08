import React from 'react';
import { View, ScrollView } from 'react-native';

import { getColors } from '../../Util/Common';

import { RoundIconButton } from '../index';

import styles from './styles';

export const ColorPicker = ({ onPickColor }) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {getColors.map((item, idx) => (
        <View key={idx} style={styles.color}>
          <RoundIconButton
            bgColor={item.name}
            onPress={() => onPickColor(item.name)}
            isSmall={true}
          />
        </View>
      ))}
    </ScrollView>
  );
};
