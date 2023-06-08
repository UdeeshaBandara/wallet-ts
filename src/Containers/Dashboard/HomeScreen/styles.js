import { Dimensions, PixelRatio, Platform, StyleSheet } from 'react-native';

import { Colors } from '../../../Theme/Variables';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingTop: PixelRatio.roundToNearestPixel(height * 0.049),
    paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  nameView:{
    flexDirection:'row',
    alignItems:'center',
  },
  txtHi: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: Colors.primaryBlack,
  },
  userName:{ 
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: Colors.primaryBlack,
  },
  headerRightView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balance: {
    fontFamily: 'Poppins-Light',
    fontSize: 30,
    color: Colors.primaryBlack,
  },
  boldBalance: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
    color: Colors.primaryBlack,
  },
  subBalance: {
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
    color: Colors.primaryBlack,
  },
  recodeViewer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: PixelRatio.roundToNearestPixel(height * 0.029),
  },
  recodeViewerCol: { flex: 1 },
  cashFlow: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.lightGreen,
    marginTop: 20,
  },
  cashFlowNegative: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.gray005,
    marginTop: 20,
  },
  divider: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#EFEFF1',
    marginTop: 15,
  },
  transactionViewer: {
    marginTop: PixelRatio.roundToNearestPixel(height * 0.018),
  },
  initialCard: {
    borderRadius: 22,
    overflow: 'hidden',
  },
  initialCardInner: {
    flexDirection: 'column',
    paddingVertical: 17,
    paddingHorizontal: 25,
  },
  initialTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: Colors.white,
  },
  initialDesc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.white,
    textAlign: 'left',
    marginTop: 16,
  },
  initialCardBtnView: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  noTransactionsIcoView: {
    alignItems: 'center',
    marginTop: PixelRatio.roundToNearestPixel(height * 0.05),
  },
  txtNoTransactions: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: '#7E7E7E',
    textAlign: 'center',
    marginTop: PixelRatio.roundToNearestPixel(height * 0.028),
  },
  txtNoTransactionsMessage: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#7E7E7E',
    textAlign: 'center',
    marginTop: PixelRatio.roundToNearestPixel(height * 0.028),
  },
});
