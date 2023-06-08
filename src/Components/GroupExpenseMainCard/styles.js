import { StyleSheet } from 'react-native';
import { Colors } from '../../Theme/Variables';

export default StyleSheet.create({
  mainBackground: {
    backgroundColor: Colors.lightGreen,
    marginVertical: 15,
    borderRadius: 15,
    minHeight: 150,
  },
  expenseTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: Colors.white,
    marginTop: 5,
    flex: 1,
  },
  paidBy: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.white,
    marginTop: 5,
    flex: 1,
    textAlign: 'right',
  },
  amount: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    color: Colors.white,
  },
  date: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.white,
    alignSelf: 'flex-end',
  },
});
