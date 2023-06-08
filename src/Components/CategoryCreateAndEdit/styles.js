import { Platform, StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

export default StyleSheet.create({
  parentContainer: {
    paddingVertical: 10,
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: 20,
  },
  heading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: Colors.primaryBlack,
  },
  categoryNameIconView: {
    marginTop: 28,
  },
  input: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    borderBottomColor: Colors.gray004,
    borderBottomWidth: 2,
    marginLeft: 30,
    width: 240,
    color: Colors.primaryBlack
  },
  colorContainer: { marginTop: 27 },
  colorView: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtColor: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: Colors.primaryBlack,
  },
  bottomView: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 20 : 0,
    left: 0,
    right: 0,
  },
});
