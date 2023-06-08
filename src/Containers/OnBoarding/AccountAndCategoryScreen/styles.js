import { Dimensions, PixelRatio, StyleSheet } from 'react-native';
import { Colors } from '../../../Theme/Variables';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginTop: PixelRatio.roundToNearestPixel(height * 0.029),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  skipText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#949494',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    color: Colors.primaryBlack,
    marginTop: PixelRatio.roundToNearestPixel(height * 0.022),
    marginLeft: 28,
  },
  suggestionsView: {
    height: height * 0.43,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  suggestionsText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: Colors.primaryBlack,
  },
  image: { resizeMode: 'contain', width },
});
