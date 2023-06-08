import { StyleSheet } from 'react-native';
import { Colors } from '../../Theme/Variables';

export default StyleSheet.create({
  paidText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.primaryBlack,
    marginBottom: 10,
    marginTop: 5,
    marginRight: 30,
  },
  dropDownContainer: {
    flex: 1,
    backgroundColor: Colors.gray004,
    borderRadius: 5,
    height: 50,
  },
  dropDownText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.lightBlue,
    textAlign: 'left',
    marginRight: 30,
  },
  dropdownRowText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.primaryBlack,
  },
  iconDropdown: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 10,
    top: 20,
  },
});
