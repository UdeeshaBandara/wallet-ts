import { Platform, StyleSheet } from 'react-native';

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
    paddingHorizontal: 20,
    marginTop: 5,
  },
  selectedCashColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  accountText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: Colors.primaryBlack,
    marginBottom: 5,
    marginTop: 5,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    flexWrap: 'wrap',
    gap: 5,
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
});
