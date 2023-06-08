import { Dimensions, PixelRatio, StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  searchText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#535353',
    marginTop: 5,
  },
  resultBtn: {
    overflow: 'hidden',
    height: 55,
    borderRadius: 18,
    marginVertical: 5,
  },
  result: {
    width: '100%',
    padding: PixelRatio.roundToNearestPixel(height * 0.015),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  currency: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.primaryBlack,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#535353',
  },
});
