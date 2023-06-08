import { Dimensions, PixelRatio, StyleSheet } from 'react-native';
import { Colors } from '../../../Theme/Variables';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: PixelRatio.roundToNearestPixel(height * 0.05),
    marginBottom: PixelRatio.roundToNearestPixel(height * 0.117),
  },
  content: {
    marginHorizontal: 31,
    marginTop: PixelRatio.roundToNearestPixel(height * 0.020),
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 40,
    color: Colors.primaryBlack,
  },
  subTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: Colors.primaryBlack,
  },
  scrollView: {
    marginTop: PixelRatio.roundToNearestPixel(height * 0.033),
  },
  subTitle1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.primaryBlack,
    textTransform: 'uppercase',
  },
  desc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    textAlign: 'left',
    color: Colors.gray003,
  },
  btnView: {
    marginTop: PixelRatio.roundToNearestPixel(height * 0.053),
  },
  btnAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.gray6,
    borderRadius: 18,
    padding: 20,
  },
  btnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginLeft: 30,
    color: Colors.primaryBlack,
  },
  bottomTextView: {
    marginTop: PixelRatio.roundToNearestPixel(height * 0.04),
  },
  blackText: {
    textAlign: 'center',
    color: Colors.primaryBlack,
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
  },
  greenText: {
    color: Colors.lightGreen,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});
