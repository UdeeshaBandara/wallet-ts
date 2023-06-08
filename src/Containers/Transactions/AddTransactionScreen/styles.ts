import { Dimensions, PixelRatio, StyleSheet } from 'react-native';
import { Colors } from '../../../Theme/Variables';
const { height } = Dimensions.get('window');

export default StyleSheet.create({
  parentContainer: {
    backgroundColor: Colors.white,
  },
  subContainer: {
    paddingTop: PixelRatio.roundToNearestPixel(height * 0.049),
    paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    height: 70,
    marginTop: 20,
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
    borderBottomColor: Colors.inputFieldBorderColor,
    borderBottomWidth: 2,
    marginBottom: 15,
    color: Colors.primaryBlack,
  },
  categoryCell: {
    height: 66,
    borderRadius: 33,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.primaryGray,
    borderColor: Colors.gray004,
    borderWidth: 3,
  },
  cardBackground: {
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 29,
    backgroundColor: Colors.gray004,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  subRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  descriptionText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginLeft: 20,
    color: Colors.primaryBlack,
  },
  descriptionTextExtensions: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'right',
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
  bottomView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
