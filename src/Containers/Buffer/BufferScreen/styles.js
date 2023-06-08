import { StyleSheet } from 'react-native';

import { Colors } from '../../../Theme/Variables';

export default StyleSheet.create({
  parentContainer: {},
  container: {
    paddingHorizontal: 20,
  },
  divider: {
    borderWidth: 3,
    borderColor: Colors.gray6,
    marginTop: 12,
  },
  balanceContainer: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtSaving: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: Colors.gray002,
    textAlign: 'center',
  },
  txtBtnBalance: {
    fontFamily: 'Poppins-Regular',
    fontSize: 30,
    color: Colors.primaryBlack,
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
