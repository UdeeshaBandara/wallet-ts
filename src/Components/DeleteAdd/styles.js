import { StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

export default StyleSheet.create({
  parentModalContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 15,
  },
  modalSubContainer: {
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: Colors.primaryBlack,
  },
  txtWarning: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: Colors.gray002,
    marginTop: 5,
  },
  boldText: {
    fontFamily: 'Poppins-SemiBold',
  },
});
