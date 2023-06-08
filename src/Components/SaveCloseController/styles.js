import { Dimensions, PixelRatio, StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

const { width } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: Colors.inputBackground,
  },
  bottomContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 30,
  },
  bottomView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: PixelRatio.roundToNearestPixel(width * 0.045),
    zIndex: 999,
  },
  btnClose: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.gray6,
  },
  containerRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  positionedContainer: {
    position: 'absolute',
    zIndex: 3,
    width: '100%',
    bottom: 24,
  },
  divider: {
    width: '100%',
    borderWidth: 3,
    borderColor: Colors.gray6,
  },
});
