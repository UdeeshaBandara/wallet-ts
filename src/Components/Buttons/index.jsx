import React from 'react';
import { Dimensions, Platform, Text, TouchableOpacity, View } from 'react-native';

import { getFormattedBalance } from '../../Util/Common';

import BackwardIcon from '../../Assets/SVGIcons/BackwardIcon';
import ForwardIcon from '../../Assets/SVGIcons/ForwardIcon';
import Gradient from '../Gradient/index';

import styles from './styles';
import { Colors } from '../../Theme/Variables';

const { width } = Dimensions.get('window');

const AddButton = ({ title, ...props }) => {
  return (
    <TouchableOpacity style={styles.btnAdd} {...props}>
      <Text style={styles.addText}>+ {title}</Text>
    </TouchableOpacity>
  );
};

const LongSubmitButton = ({ name, ...props }) => {
  return (
    <TouchableOpacity style={styles.btn} {...props}>
      <Gradient
        colors={['#6F51FF', '#8B74FE']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <View style={styles.btnInner}>
          <Text style={styles.btnText}>{name}</Text>
          <ForwardIcon />
        </View>
      </Gradient>
    </TouchableOpacity>
  );
};

const BackButton = ({ icon = <BackwardIcon />, isSmall = true, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.btnBack,
        ...(isSmall === false && { height: 50, width: 50 }),
      }}
      activeOpacity={0.8}
      {...props}>
      {icon}
    </TouchableOpacity>
  );
};

const IconButton = ({ title, icon, onPress, textColor, bgColor }) => {
  return (
    <TouchableOpacity
      style={[styles.btnIcon, { backgroundColor: bgColor }]}
      onPress={onPress}>
      {icon}
      <Text style={[styles.iconBtnText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const OutlinedRoundButton = ({ onPress, icon, bgColor, borderColor }) => {
  return (
    <TouchableOpacity
      style={[
        styles.outlinedView,
        bgColor && { borderWidth: 0, backgroundColor: bgColor },
        borderColor && { borderColor: borderColor, borderWidth: 2 },
      ]}
      onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

const ShortSubmitButton = ({
  title,
  icon,
  onPress,
  colors = ['#17CEA0', '#44F0C6'],
  disabled = false,
  small = false
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.btnSetContainer,
        ...(colors[0] !== Colors.white
          ? {}
          : {
              borderColor: Colors.gray001,
              borderWidth: 2,
            }),
      }}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}>
      <Gradient
        colors={disabled ? [Colors.gray002, Colors.gray002] : colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <View
          style={{
            ...styles.btnSetView,
            ...(title === '  Add category' && {
              paddingHorizontal: 15,
            }),
            ...(small && {height: 46})
          }}>
          {colors[0] !== Colors.white && icon}
          <Text
            style={{
              ...styles.btnSetText,
              ...(colors[0] !== Colors.white
                ? { color: Colors.white }
                : {
                    color: Colors.primaryBlack,
                  }),
            }}>
            {title}
          </Text>
        </View>
      </Gradient>
    </TouchableOpacity>
  );
};

const RoundIconButton = ({ bgColor, icon, isSmall, ...props }) => {
  return (
    <TouchableOpacity
      style={[
        styles.fillButtonContainer,
        { backgroundColor: bgColor },
        isSmall && { width: 46, height: 46 },
      ]}
      {...props}>
      {icon}
    </TouchableOpacity>
  );
};

const BufferButton = ({
  title,
  amount,
  remainingAmount,
  currency,
  screenName,
  bgColor,
  percentage,
  icon,
  ...props
}) => {
  
  const cardAmount = Math.abs(amount).toFixed(2);
  const getTextViewWidth = () =>{
    let textViewWidth = Platform.OS === 'ios' ? width * 0.55 : 190
    if (screenName === 'BudgetScreen') {
      textViewWidth = Platform.OS === 'ios' ? width * 0.55 : 185
    }
    return textViewWidth;
  }

  return (
    <TouchableOpacity
      style={[
        styles.btnBuffer,
        bgColor && { backgroundColor: bgColor },
        screenName === 'BudgetScreen' && {
          paddingVertical: Platform.OS === 'ios' ? 15 : 10,
        },
      ]}
      {...props}>
      <View style={[styles.bufferTxtContainer, { width: getTextViewWidth() }]}>
      <View>{icon}</View>
       <View style={[styles.bufferTxtView]}>
       <Text
          style={[
            styles.txtBuffer,
            screenName === 'BudgetScreen' && { fontFamily: 'Poppins-SemiBold' },
            bgColor && { color: Colors.white },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.txtBalance,
            screenName === 'BudgetScreen' && { fontFamily: 'Poppins-Bold' },
            bgColor && { color: Colors.white },
          ]}>
          {getFormattedBalance(cardAmount)}{' '}
          <Text
            style={[styles.txtCurrency, bgColor && { color: Colors.white }]}>
            {currency}
          </Text>
        </Text>
        {screenName === 'BudgetScreen' && (
          <Text
            style={[
              styles.txtRemainingAmount,
              bgColor && { color: Colors.white },
            ]}>
            {remainingAmount}
          </Text>
        )}
       </View>
      </View>
      {percentage !== '' && (
        <View style={styles.percentageView}>
          <Text style={styles.txtPercentage}>{percentage}%</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export {
  AddButton,
  BackButton,
  BufferButton,
  LongSubmitButton,
  IconButton,
  OutlinedRoundButton,
  RoundIconButton,
  ShortSubmitButton,
};
