import { Platform, StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

export default StyleSheet.create({
  balanceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtHeading: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.gray002,
    textAlign: 'center',
  },
  txtBtnBalance: {
    fontFamily: 'Poppins-Regular',
    fontSize: 30,
    color: Colors.primaryBlack,
    marginTop: Platform.OS === 'android' ? 2 : 0,
  },
  txtBtnCurrency: {
    fontFamily: 'Poppins-Light',
    fontSize: 30,
    color: Colors.primaryBlack,
    textTransform: 'uppercase',
  },
  txtCents: {
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
    color: Colors.primaryBlack,
  },
  btnBalance: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});
