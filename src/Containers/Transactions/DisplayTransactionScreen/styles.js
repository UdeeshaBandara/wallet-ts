import { Dimensions, PixelRatio, StyleSheet } from 'react-native';
import { Colors } from '../../../Theme/Variables';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingTop: PixelRatio.roundToNearestPixel(height * 0.029),
    paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerRightView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 15,
  },
  txtIncome: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    marginTop: 20,
    color: Colors.primaryBlack,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  txtAmount: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
    color: Colors.primaryBlack,
  },
  txtCurrency: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: Colors.primaryBlack,
  },
  parentContainer: {
    alignItems: 'center',
  },
  importIcon: {
    top: -180,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCircle: {
    width: 250,
    height: 250,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: 125,
    shadowOpacity: 2,
    shadowRadius: 5,
    elevation: 3,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: '#EFEFF1',
    top: 75,
    left: 75,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  pieChart: {
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: 125,
    shadowOpacity: 20,
    shadowRadius: 20,
    elevation: 3,

  },
});
