import { Dimensions, PixelRatio, StyleSheet } from 'react-native';
import { Colors } from '../../../Theme/Variables';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: PixelRatio.roundToNearestPixel(height * 0.029),
    marginHorizontal: 20,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    color: Colors.primaryBlack,
    marginTop: PixelRatio.roundToNearestPixel(height * 0.005),
    marginLeft: 18,
  },
  cardView: {
    marginTop: PixelRatio.roundToNearestPixel(height * 0.005),
  },
  searchView: {
    marginTop: PixelRatio.roundToNearestPixel(height * 0.022),
  },
  searchContainer: {
    height: 70,
  },
  btnSetView: {
    marginTop: PixelRatio.roundToNearestPixel(height * 0.011),
    marginHorizontal: 20,
    marginBottom: 10,
  },
});
