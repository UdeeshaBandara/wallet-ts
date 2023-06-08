import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  bottomSheetHeader: {
    backgroundColor: '#FAFAFA',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 1.5,
    shadowRadius: 16.0,
    elevation: 10,
  },
});
