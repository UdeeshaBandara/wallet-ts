import { StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

export default StyleSheet.create({
  parentContainer: {
    backgroundColor: Colors.inputBackground,
    height: '100%',
  },
  subContainer: {
    marginHorizontal: 10,
    height: '80%',
  },
  accountText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: Colors.primaryBlack,
    marginBottom: 10,
    marginLeft: 10,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  txtAmount: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 46,
    color: Colors.primaryBlack,
  },
  txtCurrency: {
    fontFamily: 'Poppins-Regular',
    fontSize: 30,
    color: Colors.primaryBlack,
  },
  categoryContainer: {
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 1,
  },
  categoryCell: {
    height: 66,
    borderRadius: 33,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryGray,
    borderColor: Colors.gray004,
    borderWidth: 3,
    align: 'center',
  },
});
