import React, { useEffect, useRef } from 'react';
import {
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { navigate } from '../../Navigators/Root';

import AccountTransferIcon from '../../Assets/SVGIcons/AccountTransferIcon';
import ExpensesIcon from '../../Assets/SVGIcons/ExpensesIcon';
import Gradient from '../Gradient/index';
import IncomeIcon from '../../Assets/SVGIcons/IncomeIcon';
import PlusIcon from '../../Assets/SVGIcons/PlusIcon';

import { Colors } from '../../Theme/Variables';
import styles from './styles';

export const FloatingMenuButton = ({
  opened,
  toggleOpened,
  activeScreenName,
}) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: opened ? 1 : 0,
      duration: 185,
      friction: 2,
      useNativeDriver: false,
    }).start();
  }, [opened, animation]);

  useEffect(() => {
    if (activeScreenName === 'AccountScreen' && opened) {
      toggleOpened();
    }
  }, [activeScreenName]);

  const backgroundColor = {
    backgroundColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [
        activeScreenName === 'HomeScreen'
          ? Colors.primaryPurple
          : Colors.lightGreen,
        Colors.gray003,
      ],
    }),
  };

  const opacity = {
    opacity: animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1],
    }),
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Animated.View
          style={[
            styles.item,
            opacity,
            {
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -105],
                  }),
                },
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -96],
                  }),
                },
              ],
            },
          ]}>
          <TouchableOpacity style={styles.transactionMenuBtn} onPress={() => {
            toggleOpened(false);
            navigate("AddTransactionScreen", { type: "income", isEditMode: false, isFromAccount: false, isFromCategory:false });
          }}>
            <Gradient
              colors={['#17CEA0', '#44F0C6']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}>
              <View style={styles.secondaryButton}>
                <IncomeIcon />
              </View>
            </Gradient>
          </TouchableOpacity>
          <Animated.Text
            style={[
              styles.text,
              {
                opacity: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ]}>
            Add{'\n'}Income
          </Animated.Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.item,
            opacity,
            {
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -4],
                  }),
                },
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -170],
                  }),
                },
              ],
            },
          ]}>
          <TouchableOpacity style={styles.transactionMenuBtn} onPress={() => {
            toggleOpened(false);
            navigate("AddTransactionScreen", { type: "expense", isEditMode: false, isFromAccount: false,isFromCategory:false});
          }}>
            <Gradient
              colors={['#1C1B20', '#A2A1A7']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}>
              <View style={styles.secondaryButton}>
                <ExpensesIcon />
              </View>
            </Gradient>
          </TouchableOpacity>
          <Animated.Text
            style={[
              styles.text,
              {
                opacity: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ]}>
            Add{'\n'}Expenses
          </Animated.Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.item,
            opacity,
            {
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                  }),
                },
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -99],
                  }),
                },
              ],
            },
          ]}>
          <TouchableOpacity style={styles.transactionMenuBtn} onPress={() => {
            toggleOpened(false);
            navigate("AddTransactionScreen", { type: "transfer", isEditMode: false, isFromAccount: false, isFromCategory:false});
          }}>
            <Gradient
              colors={['#6F51FF', '#8B74FE']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}>
              <View style={styles.secondaryButton}>
                <AccountTransferIcon />
              </View>
            </Gradient>
          </TouchableOpacity>
          <Animated.Text
            style={[
              styles.text,
              {
                opacity: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ]}>
            Account{'\n'}Transfer
          </Animated.Text>
        </Animated.View>

        <TouchableWithoutFeedback
          onPress={
            activeScreenName === 'HomeScreen'
              ? toggleOpened
              : () => navigate('NewAccountScreen', { screenName: 'NewAccount',account:{} })
          }
          style={styles.addButton}>
          <Animated.View
            style={[
              styles.addButtonInner,
              backgroundColor,
              {
                transform: [
                  {
                    rotate: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '45deg'],
                    }),
                  },
                ],
              },
            ]}>
            <PlusIcon />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
