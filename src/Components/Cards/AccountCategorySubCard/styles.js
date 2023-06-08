import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../../Theme/Variables';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 23,
    borderRadius: 18,
    width: '100%',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  txtBalance: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 15 : 4,
  },
  txtCurrencyName: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  txtBtn: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.white,
  },
  btnAddExpensesIncome: {
    height: 40,
    borderRadius: 58,
    backgroundColor: Colors.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 15 : 6,
  },
});
