import {StyleSheet} from 'react-native';

import {Colors} from '../../Theme/Variables';

export default StyleSheet.create({
  cardView: {
    width: '100%',
    height: 105,
    borderRadius: 18,
    overflow: 'hidden',
  },
  card: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 26,
  },
  name: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.white,
  },
  currency: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: Colors.white,
  },
  status: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.white,
    marginLeft: 13,
  },
  // cash card styles
  cardContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 18,
    padding: 16,
    marginBottom: 5,
  },
  iconView: {
    backgroundColor: Colors.primaryLightGreen,
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginLeft: 9,
    marginRight: 5
  },
  rowContent: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    paddingRight: 10
  },
  text1: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: Colors.white,
  },
  boldText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.white,
  },
});
