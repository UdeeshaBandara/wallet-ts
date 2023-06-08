import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../../Theme/Variables';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderWidth: 2,
    borderRadius: 16,
    borderColor: Colors.gray006,
    overflow: 'hidden',
  },
  cardTopView: {
    paddingVertical: Platform.OS === 'android' ? 12 : 22,
    paddingHorizontal: 30,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  titleIcon:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtAccountName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    marginLeft: 15,
    maxWidth:150
  },
  txtExcludeInclude: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: Colors.white,
    marginLeft: 10,
  },
  txtDate:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.white,
  },
  balanceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtAccBalance: {
    fontFamily: 'Poppins-Bold',
    fontSize: Platform.OS === 'ios' ? 28 : 24,
    marginTop: Platform.OS === 'android' ? 10 : 0,
  },
  txtCents: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    marginTop: Platform.OS === 'android' ? 8 : 0,
  },
  txtCurrency: {
    fontFamily: 'Montserrat-Light',
    fontSize: 30,
    textTransform: 'uppercase',
  },
  cardBottomView: {
    backgroundColor: Colors.primaryGray,
    paddingHorizontal: 2,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expensesIncomeView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  expensesIncomeTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: Colors.primaryBlack,
  },
  divider: {
    height: '100%',
    borderWidth: 2,
    borderColor: Colors.gray007,
  },
  expensesIncomeBalance: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.primaryBlack,
    marginTop: 5,
  },
  expensesIncomeCurrency: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.primaryBlack,
    textTransform: 'uppercase',
  },
  expenseCardContent: {
    width: Platform.OS === 'ios' ? 150 : 155,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
