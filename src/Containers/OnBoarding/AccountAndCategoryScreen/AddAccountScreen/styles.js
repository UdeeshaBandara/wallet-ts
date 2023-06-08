import { Dimensions, PixelRatio, StyleSheet } from 'react-native';
import { Colors } from '../../../../Theme/Variables';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginTop: PixelRatio.roundToNearestPixel(height * 0.029),
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    color: Colors.primaryBlack,
    marginTop: PixelRatio.roundToNearestPixel(height * 0.012),
  },
  accountContainer: {
    height: height * 0.68,
  },
  accountView: {
    flexDirection: 'column',
    marginTop: 26,
    justifyContent: 'space-between',
  },
  suggestionsView: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  suggestionsText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: Colors.primaryBlack,
  },
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
});
