import { StyleSheet } from 'react-native';

import { Colors } from '../../../Theme/Variables';

export default StyleSheet.create({
  innerCard: {
    backgroundColor: '#EFEFF1',
    borderRadius: 18,
    marginTop: 19,
    marginVertical: 26,
    paddingVertical: 22,
    paddingHorizontal: 20,
  },
  innerCHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  txtMonth: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: Colors.primaryBlack,
  },
  txtDay: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Colors.primaryBlack,
  },
  innerCFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  transactionVHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtBalance: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.lightGreen,
    marginLeft: 10,
  },
  txtHBalance: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.lightGreen,
    marginLeft: 10,
  },
  txtHBalanceNegative: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.gray005,
    marginLeft: 10,
  },
  txtCurrency: {
    fontFamily: 'Poppins-Regular',
  },
});
