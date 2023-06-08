import { Dimensions, Platform, StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

const { width } = Dimensions.get('window');
export default StyleSheet.create({
  parentContainer: {
    backgroundColor: Colors.inputBackground,
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: 20,
  },
  accountText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: Colors.primaryBlack,
    marginBottom: 15,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 15,
    padding: 10,
    color: Colors.primaryBlack,
    maxHeight: Platform.OS === 'ios' ? 150 : 120,
  },
  bottomView: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 20 : 0,
    left: 0,
    right: 0,
  },
});
