import { StyleSheet } from 'react-native';

import { Colors } from '../../../Theme/Variables';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  topTextView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  txtAccount: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: Colors.primaryBlack,
  },
  txtBalance: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.gray005,
  },
  cardView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 40
  },
  cardItem: {
    marginVertical: 10,
  },
});
