import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  parentContainer: {
    paddingTop: Platform.OS === 'ios' ? 60 : 25,
    borderTopRightRadius: 26,
    borderTopLeftRadius: 26,
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: 20,
  },
  accountCardView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: Platform.OS === 'ios' ? 40 : 30,
  },
  bottomView: {
    marginTop: 30,
  },
});
