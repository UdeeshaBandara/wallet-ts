import { Platform, StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

export default StyleSheet.create({
  parentContainer: {
    paddingVertical: 25,
    flex: 1,
  },
  subContainer: {
    height: '80%',
  },
  heading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: Colors.primaryBlack,
    paddingHorizontal: 20,
  },
  listContainer: {
    marginTop: 30,
    flexDirection: 'column',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  txtItem: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    marginLeft: 15,
  },
  subContainerSort: {
    paddingHorizontal: 20,
    flex: 1,
  },
  sortTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: Colors.primaryBlack,
  },
  cardBackground: {
    borderRadius: 20,
    marginTop: Platform.OS === 'android' ? 13 : 16,
    overflow: 'hidden',
  },
  gradientBackground: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 75,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  sortType: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginLeft: 10,
    color: Colors.primaryBlack,
  },
  txtSelected: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    marginLeft: 10,
    color: Colors.white,
  },
  viewGroup: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomView: {
    height: Platform.OS === 'ios' ? '25%' : '20%',
  },
});
