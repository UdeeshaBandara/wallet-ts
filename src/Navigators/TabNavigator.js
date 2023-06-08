import React, { useEffect, useRef, useState } from 'react';
import { Animated, Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountIcon from '../Assets/SVGIcons/AccountIcon';
import { FloatingMenuButton } from '../Components';
import HomeIcon from '../Assets/SVGIcons/HomeIcon';
import { useTabMenu } from './TabContext';

import AccountScreen from '../Containers/Dashboard/AccountScreen';
import HomeScreen from '../Containers/Dashboard/HomeScreen';

import { Colors } from '../Theme/Variables';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { opened, toggleOpened } = useTabMenu();

  const homeAnimation = useRef(new Animated.Value(0)).current;
  const accountAnimation = useRef(new Animated.Value(0)).current;
  const [currentRoute, setCurrentRoute] = useState('HomeScreen');
  const getActiveScreenName = navigation => {
    const route = navigation.getState().routes[navigation.getState().index];
    return route.name;
  };
  useEffect(() => {
    Animated.timing(homeAnimation, {
      toValue: currentRoute !== 'HomeScreen' ? 40 : 0,
      duration: 10,
      useNativeDriver: false,
    }).start();
    Animated.timing(accountAnimation, {
      toValue: currentRoute === 'HomeScreen' ? 40 : 0,
      duration: 10,
      useNativeDriver: false,
    }).start();
  }, [currentRoute]);

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        keyboardHidesTabBar: true,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            setCurrentRoute('HomeScreen');
            navigation.navigate('HomeScreen');
          },
        })}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <View style={styles.tab}>
                  <Animated.View
                    style={[
                      {
                        transform: [
                          {
                            translateX: homeAnimation,
                          },
                        ],

                      },
                    ]}>
                    <HomeIcon isFocused={focused} />
                  </Animated.View>
                  <Animated.View style={{ opacity: accountAnimation }}>
                    {focused ? (
                      <Text
                        style={[
                          styles.tabTitle,
                          focused && {
                            color: Colors.primaryPurple,
                          },
                        ]}>
                        Home
                      </Text>
                    ) : (
                      ''
                    )}
                  </Animated.View>
                </View>
              </View>
            );
          },
        })}
      />

      <Tab.Screen
        name="FloatingScreen"
        component={HomeScreen}
        options={props => {
          return {
            tabBarButton: () => (
              <FloatingMenuButton
                opened={opened}
                toggleOpened={toggleOpened}
                activeScreenName={getActiveScreenName(props.navigation)}
              />
            ),
          };
        }}
      />

      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            setCurrentRoute('AccountScreen');
            navigation.navigate('AccountScreen');
          },
        })}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <View style={[styles.tab, { width: 100 }]}>
                <Animated.View
                  style={[
                    {
                      transform: [
                        {
                          translateX: accountAnimation,
                        },
                      ],
                    },
                  ]}>
                  <AccountIcon isFocused={focused} />
                </Animated.View>
                <Animated.View style={{ opacity: homeAnimation }}>
                  {focused ? (
                    <Text
                      style={[
                        styles.tabTitle,
                        focused && {
                          color: Colors.lightGreen,
                        },
                      ]}>
                      Accounts
                    </Text>
                  ) : (
                    ''
                  )}
                </Animated.View>
              </View>
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: Platform.OS === 'ios' ? 80 : 60,
    paddingHorizontal: 20,
    borderTopWidth: 0,
    elevation: 0,
  },
  tabContainer: {
    alignItems: 'center',
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 80,
  },
  tabTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.gray003,
  },
});

export default TabNavigator;
