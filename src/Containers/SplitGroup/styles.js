import { StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

export default StyleSheet.create({
    topView: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    txtSplit: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
        color: Colors.primaryBlack,
    },
    txtTotal:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        color: Colors.gray10,
        marginTop:31
    },
    txtSettleUp:{
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: Colors.gray10,
        marginTop:31
    },
    cardContainer:{
       flex: 1,
       rowGap: 10,
       paddingHorizontal: 20,
    },
    txtYourOnly:{
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: Colors.gray10,
        lineHeight: 18
    },
});
