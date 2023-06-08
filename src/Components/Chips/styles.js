import { StyleSheet } from 'react-native';
import { Colors } from '../../Theme/Variables';
import { AddCategoryOutlined } from './index';

export default StyleSheet.create({
  chipContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.gray6,
    borderRadius: 33,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: Colors.primaryBlack,
  },
  gradientPressableContainer: {
    height: 50,
    borderRadius: 33,
    overflow: 'hidden',
  },
  gradientPressableChip: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  gradientPressableText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#4E4E4E',
  },
  outlinedChipContainer: {
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 33,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  outlinedChipText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: Colors.primaryBlack,
  },
  iconChip: {
    paddingHorizontal: 15,
    borderRadius: 50,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconChipText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    marginLeft: 12,
  },
  addCategoryOutlinedContainer: {
    paddingHorizontal: 20,
    backgroundColor: Colors.primaryGray,
    borderColor: Colors.primaryBlack,
    borderWidth: 2,
    borderRadius: 33,
    height: 55,
    width: 200,
    alignItems: 'center',
    flexDirection: 'row',
  },
  categoryText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.primaryBlack,
  },
});
