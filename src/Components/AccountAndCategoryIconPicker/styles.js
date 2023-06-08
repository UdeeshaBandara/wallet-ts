import { Dimensions, Platform, StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  parentContainer: {
    paddingVertical: 5,
    flex: 1,
  },
  subContainer: {
    height: height * 0.8,
  },
  heading: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: Colors.primaryBlack,
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginTop: 30,
  },
  separatorTextView: {
    alignItems: 'center',
    zIndex: 2,
  },
  separatorText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: Colors.primaryBlack,
    textAlign: 'center',
    backgroundColor: Colors.white,
  },
  separator: {
    height: 3,
    backgroundColor: Colors.gray001,
    position: 'absolute',
    top: 12,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  iconView: {
    paddingLeft: 30,
    paddingVertical: 27,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    width: 55,
    height: 55,
    aspectRatio: 1,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.gray004,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Platform.OS === 'ios' ? 15 : 25,
    marginBottom: 10,
  },
  bottomView: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 5 : 0,
    left: 0,
    right: 0,
  },
});
