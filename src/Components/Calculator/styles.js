import { Platform, StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

export default StyleSheet.create({
  parentContainer: { backgroundColor: Colors.inputBackground },
  subContainer: {
    paddingHorizontal: 20,
  },
  accountText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: Colors.primaryBlack,
    marginBottom: Platform.OS === 'android' ? 5 : 10,
  },
  accountTextTo: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.primaryBlack,
    marginBottom: Platform.OS === 'android' ? 5 : 10,
  },
  txtAmount: {
    fontFamily: 'Poppins-Bold',
    fontSize: Platform.OS === 'ios' ? 40 : 37,
    color: Colors.primaryBlack,
    textAlign: 'center',
    marginTop: 10,
  },
  txtCurrency: {
    fontFamily: 'Poppins-Regular',
    fontSize: Platform.OS === 'ios' ? 40 : 37,
    color: Colors.primaryBlack,
    textAlign: 'center',
    marginTop: Platform.OS === 'android' ? 5 : 10,
  },
  columnWrapperStyle: {
    flexWrap: 'wrap',
    flex: 1,
    alignSelf: 'center',
    marginTop: Platform.OS === 'android' ? 11 : 15,
  },
});
