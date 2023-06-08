import { StyleSheet } from 'react-native';
import { Colors } from '../../Theme/Variables';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    height: 0,
  },
  box: {
    position: 'relative',
    width: 60,
    height: 60,
    marginTop: -20,
  },
  addButton: {
    shadowColor: Colors.primaryBlack,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  addButtonInner: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  addButtonIcon: {
    width: 40,
    height: 40,
    tintColor: Colors.white,
  },
  item: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  transactionMenuBtn: { 
    overflow: 'hidden', 
    borderRadius: 50 
  },
  secondaryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 10,
    color: Colors.primaryBlack,
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: 15,
  },
});
