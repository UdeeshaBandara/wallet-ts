import { StyleSheet } from 'react-native';
import { Colors } from '../../Theme/Variables';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.gray004,
    borderRadius: 5,
    minHeight: 55,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  selectAllContainer:{
    backgroundColor: Colors.lightBlack, height: 65
  },
  paidText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: Colors.primaryBlack,
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 10,
  },
  amount:{
    flex: 1,
    textAlign: "right",
  }
});
