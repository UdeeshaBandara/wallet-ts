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
  },
  cardBackground: {
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    height: 75,
    backgroundColor: Colors.gray004,
    marginTop: Platform.OS === 'android' ? 13 : 16,
    width: '100%',
    justifyContent: 'space-between',
  },
  gradientBackground: {
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    height: 75,
    paddingHorizontal: 15,
    width: '100%',
    justifyContent: 'space-between',
  },
  descriptionText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    marginLeft: 10,
    color: Colors.primaryBlack,
  },
  viewGroup: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
