import { Dimensions, Platform, StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

export default StyleSheet.create({
  parentContainer: {
    backgroundColor: Colors.inputBackground,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset: { width: 0, height: -10 },
        shadowOpacity: 1,
        shadowRadius: 5.0,
      },
      android: {
        elevation: 20,
      },
    }),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: Platform.OS === 'android' ? 0.15 : 0,
  },
  subContainer: {
    paddingHorizontal: 10,
    marginTop: 5,
  },
  minimizeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accountText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: Colors.primaryBlack,
    marginBottom: 10,
    marginTop: 5,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  amountRowMinimize: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    flexGrow: 3,
    flexBasis: 3,
  },
  txtAmount: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 32,
    color: Colors.primaryBlack,
  },
  txtCurrency: {
    fontFamily: 'Poppins-Regular',
    fontSize: 30,
    color: Colors.primaryBlack,
  },
  cashColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  cashColumnMinimize: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
    flexGrow: 1,
    flexBasis: 1,
  },
  txtCashHeading: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.primaryBlack,
    textAlign: 'center',
  },
  txtCash: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: Colors.primaryBlack,
    overflow: 'hidden',
  },
});
