import { Dimensions, PixelRatio, StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: Colors.primaryBlack,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: PixelRatio.roundToNearestPixel(width * 0.03),
    overflow: 'hidden',
  },
  resultContainer: {
    flex: 1,
  },
  input: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    paddingVertical: PixelRatio.roundToNearestPixel(height * 0.02),
    width: PixelRatio.roundToNearestPixel(width * 0.65),
    marginLeft: 10,
    color: Colors.primaryBlack
  },
  searchBtnText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginVertical: PixelRatio.roundToNearestPixel(height * 0.02),
    width: PixelRatio.roundToNearestPixel(width * 0.7),
    marginLeft: 10,
  },
  btnClose: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});
