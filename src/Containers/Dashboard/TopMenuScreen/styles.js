import { Dimensions, PixelRatio, StyleSheet } from 'react-native';

import { Colors } from '../../../Theme/Variables';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingVertical: 56,
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 16,
    paddingLeft: 14,
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: Colors.primaryBlack,
  },
  menuContainer: {
    marginTop: 15,
    paddingHorizontal: 21,
  },
  menuItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  menuName: {
    marginTop: 5,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: Colors.primaryBlack,
  },
  rowStyle:{
    marginTop:15,
    width: width /2,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  txtSaving: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: Colors.primaryBlack,
  },
  txtBalance: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: Colors.primaryBlack,
  },
  txtCurrency: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: Colors.primaryBlack,
  },
  btnClose: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: PixelRatio.roundToNearestPixel(height * 0.08),
  },
});
