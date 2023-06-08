import { Dimensions, Platform, StyleSheet } from 'react-native';

import { Colors } from '../../../Theme/Variables';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingVertical: 49,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  txtVersion: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: Colors.gray002,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    color: Colors.primaryBlack,
    marginTop: 22,
  },
  setCurrencyContainer: {
    marginTop: height * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.gray004,
    borderWidth: 3,
    borderRadius: 13,
    padding: 20,
  },
  txtSetCurrency: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: Colors.primaryBlack,
    marginLeft: 26,
  },
  txtCurrency: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: Colors.primaryBlack,
    marginRight: 18,
  },
  accountContainer: {
    marginTop: 17,
    backgroundColor: Colors.gray004,
    borderRadius: 22,
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 25,
  },
  txtAccount: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.gray002,
  },
  txtAnonymous: {
    marginLeft: 26,
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: Colors.primaryBlack,
    paddingRight: Platform.OS === 'ios' ? 15 : 5
  },
  appSettingContainer: {
    marginTop: height * 0.03,
    flexDirection: 'column',
  },
  txtAppSetting: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: Colors.gray002,
    marginLeft: 20,
  },
  appSettingView: {
    marginTop: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.gray004,
    borderRadius: 20,
    paddingHorizontal: 26,
    paddingVertical: 18,
  },
  txtApplock: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: Colors.primaryBlack,
    marginLeft: 26,
  },
  termsContainer: {
    marginTop: height * 0.03,
  },
  btnOutlined: {
    borderWidth: 2,
    borderColor: Colors.gray004,
    borderRadius: 36,
    backgroundColor: Colors.primaryGray,
    paddingHorizontal: 10,
    paddingVertical: 10,
    minWidth: 150,
  },
  txtOutlinedBtn: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.primaryBlack,
    textAlign: 'center',
  },
  dangerZone: {
    marginTop: height * 0.03,
  },
  titleDangerZone: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.primaryRed,
    marginLeft: 20,
  },
  btnDelete: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
    borderRadius: 20,
    backgroundColor: Colors.primaryRed,
    paddingHorizontal: 26,
    paddingVertical: 20,
  },
  txtDelete: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: Colors.white,
    marginLeft: 26,
  },
});
