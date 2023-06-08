import { Dimensions, PixelRatio, StyleSheet } from 'react-native';
import { Colors } from '../../../Theme/Variables';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingVertical: 56,
    paddingHorizontal: 20,
    flex: 1,
  },
  searchResultsContainer: {
    marginTop: PixelRatio.roundToNearestPixel(height * 0.018),
  },
  noTransactionView: {
    marginTop: PixelRatio.roundToNearestPixel(height * 0.07),
  },
  txtNoTransactions: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: Colors.gray008,
    textAlign: 'center',
  },
  txtNoTransactionsDesc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: Colors.gray008,
    textAlign: 'center',
    marginTop: 6,
  },
});
