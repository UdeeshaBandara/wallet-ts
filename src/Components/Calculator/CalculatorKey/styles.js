import { StyleSheet } from 'react-native';
import { Colors } from '../../../Theme/Variables';
export default StyleSheet.create({
  outlinedView: {
    width: 60,
    height: 60,
    backgroundColor: Colors.calculatorKeyBackground,
    borderColor: Colors.gray004,
    borderWidth: 3,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textButton: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
    color: Colors.primaryBlack,
    textAlign: 'center',
  },
});
