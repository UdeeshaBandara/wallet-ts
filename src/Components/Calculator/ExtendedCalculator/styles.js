import { Platform, StyleSheet } from 'react-native';

import { Colors } from '../../../Theme/Variables';

export default StyleSheet.create({
  parentContainer: { backgroundColor: Colors.inputBackground },
  flex: 1,
  subContainer: {
    paddingHorizontal: 20,
    height: Platform.OS === 'ios' ? '84%' : '83%',
  },
  accountText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: Colors.primaryBlack,
    marginBottom: Platform.OS === 'android' ? 5 : 10,
  },
  displayValueView: {
    marginVertical: 20,
  },
  txtAmount: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    color: Colors.primaryBlack,
    textAlign: 'center',
    marginTop: 10,
  },
  columnWrapperStyle: {
    flexWrap: 'wrap',
    flex: 1,
    alignSelf: 'center',
    marginTop: Platform.OS === 'android' ? 11 : 15,
  },
});
