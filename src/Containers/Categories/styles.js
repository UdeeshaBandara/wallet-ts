import { Dimensions, Platform, PixelRatio, StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  parentContainer: {
    paddingVertical: 40,
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtHeading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
    color: Colors.primaryBlack,
  },
  topMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Platform.OS === 'ios' ? width * 0.28 : width * 0.3,
  },
  cardView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardItem: {
    marginVertical: 10,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
