import { Platform, StyleSheet } from 'react-native';

import { Colors } from '../../../Theme/Variables';

export default StyleSheet.create({
  parentContainer: {
    paddingVertical: 40,
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtHeading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
    color: Colors.primaryBlack,
  },
  txtDate: {
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.primaryBlack,
  },
  txtBudgetInfo: {
    marginTop: 5,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: Colors.gray002,
  },
  scrollView: {
    marginBottom: 60,
    marginTop: Platform.OS === 'ios' ? 30 : 20,
  },
  cardContainer: {},
  card: {
    flexDirection: 'column',
    marginTop: 25,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: Colors.primaryBlack,
    width: 150,
  },
  cardDesc: {
    marginTop: 5,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: Colors.gray002,
  },
  txtBalance: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.primaryBlack,
  },
  txtCurrency: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: Colors.primaryBlack,
  },
  noBudgetContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  txtNoBudget: {
    marginTop: 4,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
    color: Colors.gray003,
  },
  txtNoBudgetDesc: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: Colors.gray002,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
