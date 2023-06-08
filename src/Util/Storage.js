import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItemToAsyncStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
};

export const getItemFromAsyncStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      let values = JSON.parse(value);
      return values;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const removeItemInAsyncStorage = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
};
