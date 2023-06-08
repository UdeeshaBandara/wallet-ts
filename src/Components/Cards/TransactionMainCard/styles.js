import { Dimensions, PixelRatio, Platform, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

import { Colors } from '../../../Theme/Variables';

export default StyleSheet.create({
  cardContainer: {
    height: PixelRatio.roundToNearestPixel(height * 0.116),
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 10,
  },
  card: {
    paddingLeft: 22,
    paddingTop: Platform.OS === 'android' ? 12 : 20
  },
  titleView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.white,
    marginLeft: 10,
  },
  balance: {
    fontFamily: 'Poppins-Regular',
    fontSize: Platform.OS === 'android' ? 18 : 20,
    color: Colors.white,
    marginTop: Platform.OS === 'android' ? 8 : 11,
  },
});
