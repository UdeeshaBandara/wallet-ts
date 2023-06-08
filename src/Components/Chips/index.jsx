import React from 'react';
import {
  Platform,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import Gradient from '../Gradient/index';

import { Colors } from '../../Theme/Variables';
import styles from './styles';

const Chip = props => {
  return (
    <TouchableOpacity style={styles.chipContainer} onPress={props.onPress}>
      <Text style={styles.text}>+ {props.account}</Text>
    </TouchableOpacity>
  );
};

const GradientPressableChip = ({ isSelected, name, onPress }) => {
  return (
    <TouchableHighlight
      style={styles.gradientPressableContainer}
      onPress={onPress}>
      <Gradient
        colors={isSelected ? ['#6F51FF', '#8B74FE'] : ['#F2F2F2', '#F2F2F2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <View style={styles.gradientPressableChip}>
          <Text
            style={[
              styles.gradientPressableText,
              isSelected && { color: '#ffff' },
            ]}>
            {name}
          </Text>
        </View>
      </Gradient>
    </TouchableHighlight>
  );
};

const OutlinedChip = ({
  icon,
  name,
  onPress,
  bgColor = Colors.gray6,
  fontColor,
  borderColor = Colors.gray001,
  screenName,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.outlinedChipContainer,
        { backgroundColor: bgColor, borderColor: borderColor },
        screenName === "split" && {  height: 32,}
      ]}
      onPress={onPress}>
      {icon}
      <Text
        style={[
          styles.outlinedChipText,
          { marginLeft: 8, marginTop: Platform.OS == 'android' ? 4 : 0 },
          name === 'Income' || name === 'Expense' || name === 'Add New'
            ? { fontFamily: 'Poppins-SemiBold' }
            : { fontFamily: 'Poppins-Medium' },
          name === 'Add New' && { fontSize: 16 },
          name === 'Edit' && { fontFamily: 'Poppins-SemiBold', fontSize: 18 },
          fontColor && { color: fontColor },
          screenName === 'BudgetScreen' && { fontSize: 16 },
        ]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const IconChip = ({
  bgColor,
  text,
  icon,
  textColor,
  fixedWidth={ active: false, width: null }
}) => {
  return (
    <View style={[
      styles.iconChip,
      { backgroundColor: bgColor, width: fixedWidth.active ? fixedWidth.width : null }
    ]}>
      {icon}
      <Text numberOfLines={fixedWidth.active ? 1 : 2} style={[styles.iconChipText, { color: textColor }]}>{text}</Text>
    </View>
  );
};

const AddCategoryOutlined = ({ icon, name, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.addCategoryOutlinedContainer}
      onPress={onPress}>
      {icon}
      <Text style={[styles.categoryText, { marginLeft: 8 }]}>{name}</Text>
    </TouchableOpacity>
  );
};

export {
  Chip,
  OutlinedChip,
  IconChip,
  AddCategoryOutlined,
  GradientPressableChip,
};
