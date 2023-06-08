import React from 'react';
import { TouchableOpacity, View } from "react-native";

import Gradient from '../Gradient';

import styles from './styles';

const RoundIcon = ({ icon, iconBg }) => {
  return (
    <View style={[styles.iconView, { backgroundColor: iconBg }]}>{icon}</View>
  );
};

const GradientRoundIcon = ({ icon, bgColor,onPress }) => {
  return (
    <TouchableOpacity style={styles.gradientView} onPress={onPress}>
      <Gradient colors={bgColor} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <View style={styles.gradientIcon}>{icon}</View>
      </Gradient>
    </TouchableOpacity>
  );
};

export { RoundIcon, GradientRoundIcon };
