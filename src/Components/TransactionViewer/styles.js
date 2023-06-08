import { Platform, StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryGray,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    borderColor: Colors.gray004,
    borderWidth: 2,
    paddingHorizontal: 23,
    paddingVertical: 22,
  },
  noTransactionsView: {
    marginVertical: 108,
  },
  txtNoTransactions: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: Colors.gray008,
    textAlign: 'center',
  },
  txtNoTransactionsDesc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: Colors.gray008,
    textAlign: 'center',
    marginTop: 6,
  },
  calenderView: {
    borderColor: Colors.gray004,
    borderWidth: 3,
    paddingHorizontal: 22,
    paddingVertical: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  calenderButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  calender: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtCalender: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.primaryBlack,
    marginLeft: 13,
  },
  transactionsView: {
    marginTop: 26,
  },
});
