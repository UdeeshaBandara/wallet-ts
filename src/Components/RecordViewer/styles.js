import { Dimensions, PixelRatio, StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#737373',
    paddingLeft: PixelRatio.roundToNearestPixel(width * 0.051),
  },
  monthContainer: {
    marginTop: PixelRatio.roundToNearestPixel(height * 0.01),
    marginLeft: PixelRatio.roundToNearestPixel(width * 0.025),
  },
  monthList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthListItem: {
    marginRight: 5,
  },
  dividerContainer: {
    paddingHorizontal: PixelRatio.roundToNearestPixel(width * 0.025),
    marginTop: PixelRatio.roundToNearestPixel(height * 0.024),
  },
  divider: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: Colors.primaryBlack,
  },
  customRangeContainer: {
    paddingHorizontal: PixelRatio.roundToNearestPixel(width * 0.045),
    marginTop: PixelRatio.roundToNearestPixel(height * 0.02),
    flexDirection: 'column',
  },
  textCustomRange: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#737373',
    marginLeft: 10,
  },
  txtRange: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.primaryBlack,
  },
  txtAddDate: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#8E8D92',
    marginRight: 15,
  },
  dateContainer: {
    width: '100%',
    height: 65,
    borderWidth: 3,
    borderColor: Colors.gray6,
    borderRadius: 51,
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  lastContainer: {
    width: '100%',
    borderRadius: 51,
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputContainer: {
    borderRadius: 33,
    overflow: 'hidden',
  },
  inputView: {
    paddingHorizontal: 20,
    height: 50,
    width: 130,
    justifyContent: 'center',
  },
  input: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    textAlignVertical: 'center',
  },
  chooseLastChip: {
    paddingHorizontal: 10,
    backgroundColor: Colors.gray6,
    borderRadius: 33,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 170,
  },
  chooseLastChipText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.primaryBlack,
    textAlign: 'center',
  },
  btnClose: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.gray6,
  },
  bottomContainer: { width: '100%', marginTop: 35 },
  bottomView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: PixelRatio.roundToNearestPixel(width * 0.045),
    zIndex: 999,
  },

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
      height: 12,
    },
    shadowOpacity: 1.5,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
