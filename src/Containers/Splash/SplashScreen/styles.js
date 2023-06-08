import { Dimensions, PixelRatio, StyleSheet } from 'react-native';
import { Colors } from '../../../Theme/Variables';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: PixelRatio.roundToNearestPixel(height * 0.449),
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 40,
    color: Colors.primaryBlack,
    marginTop: 28,
  },
  sub: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: Colors.primaryBlack,
    marginTop: 12,
  },
});
