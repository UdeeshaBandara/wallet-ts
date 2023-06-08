import { Platform, StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

export default StyleSheet.create({
  parentContainer: {
    paddingVertical: 10,
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: 20,
  },
  heading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: Colors.primaryBlack,
  },
  budgetNameView: {
    marginTop: Platform.OS === 'ios' ? 20 : 15,
  },
  input: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    borderBottomColor: Colors.gray004,
    borderBottomWidth: 2,
    width: 300,
    color: Colors.primaryBlack
  },
  categoryContainer: { marginTop: 30 },
  categoryView: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtCategory: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: Colors.primaryBlack,
  },
  divider: {
    borderWidth: 1,
    borderColor: Colors.gray004,
    marginTop: 28,
  },
  budgetAmountView: {
    marginTop: 23,
  },
  category: {
    marginRight: 10,
  },
});
