import { Dimensions, PixelRatio, Platform, StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  btnAdd: {
    paddingHorizontal: 20,
    backgroundColor: Colors.primaryBlack,
    borderRadius: 33,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: Colors.white,
  },
  btn: {
    marginTop: 21,
    height: height * 0.064,
    overflow: 'hidden',
    borderRadius: 33,
  },
  btnInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: PixelRatio.roundToNearestPixel(width * 0.035),
  },

  btnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    textAlign: 'center',
    flex: 1,
    color: Colors.white,
  },

  btnBack: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderColor: Colors.lightGreen,
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: Colors.white,
  },
  btnIcon: {
    paddingHorizontal: 15,
    borderRadius: 50,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconBtnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    marginLeft: 12,
  },
  outlinedView: {
    width: 46,
    height: 46,
    backgroundColor: Colors.gray6,
    borderColor: Colors.gray001,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSetContainer: {
    borderRadius: 28,
    overflow: 'hidden',
  },
  btnSetView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 25,
  },
  btnSetText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.white,
  },
  fillButtonContainer: {
    width: 65,
    height: 65,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnBuffer: {
    marginTop: 13,
    paddingVertical: 18,
    backgroundColor: Colors.gray5,
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bufferTxtContainer:{
    flexDirection: 'row',
    alignItems:'center'
  },
  bufferTxtView: {
    marginLeft: 10,
    flexDirection: 'column',
  },
  txtBuffer: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.primaryBlack,
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
    textTransform: 'uppercase',
  },
  txtRemainingAmount: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: Colors.primaryBlack,
  },
  percentageView: {
    width: 60,
    height: 60,
    backgroundColor: Colors.lightGreen,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtPercentage: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.white,
  },
});
