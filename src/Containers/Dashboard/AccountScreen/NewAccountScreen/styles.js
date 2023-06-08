import { Platform, StyleSheet } from 'react-native';

import { Colors } from '../../../../Theme/Variables';

export default StyleSheet.create({
  parentContainer: {
    paddingVertical: 25,
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
  accountNameIconView: {
    marginTop: 28,
  },
  input: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    borderBottomColor: Colors.gray004,
    borderBottomWidth: 2,
    marginLeft: 30,
    width: 240,
    color: Colors.primaryBlack
  },
  colorContainer: { marginTop: 27 },
  colorView: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtColor: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: Colors.primaryBlack,
  },
  divider: {
    borderWidth: 1,
    borderColor: Colors.gray004,
    marginTop: 39,
  },
  btnCurrency: {
    borderRadius: 20,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.gray6,
    marginTop: 27,
  },
  currency: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: Colors.primaryBlack,
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Colors.gray002,
  },
  includeView: {
    marginTop: 35,
  },
  txtInclude: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: Colors.primaryBlack,
    marginLeft: 14,
  },
  balanceContainer: {
    marginTop: 40,
  },
  
});
