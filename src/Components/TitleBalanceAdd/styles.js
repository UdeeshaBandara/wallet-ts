import { Platform, StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 30,
    marginLeft: 20,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    marginLeft: 13,
    marginRight: 5,
  },
  txtExcludeInclude: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: Colors.white,
    marginLeft: 10,
  },
  balanceView: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  currency: {
    fontFamily: 'Montserrat-Light',
    fontSize: 30,
    textTransform: 'uppercase',
  },
  groupMembers: {
    fontFamily: 'Montserrat-Light',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 15,
  },
  txtBalance: {
    fontFamily: 'Poppins-Bold',
    fontSize: Platform.OS === 'android' ? 26 : 30,
    marginLeft: 11,
    marginTop: Platform.OS === 'android' ? 10 : 0,
  },
  txtCents: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    marginTop: Platform.OS === 'android' ? 8 : 0,
  },
});
