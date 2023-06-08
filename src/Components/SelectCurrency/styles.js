import { StyleSheet, PixelRatio, Dimensions } from 'react-native';

import { Colors } from '../../Theme/Variables';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  parentModalContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 10,
  },
  modalSubContainer: {
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: Colors.primaryBlack,
  },
  txtCrypto: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: Colors.gray003,
  },
  cardView: {
    marginTop: PixelRatio.roundToNearestPixel(height * 0.02),
  },
  searchView: {
    marginTop: PixelRatio.roundToNearestPixel(height * 0.022),
  },
  searchContainer: {
    height: PixelRatio.roundToNearestPixel(height * 0.5),
  },
});
