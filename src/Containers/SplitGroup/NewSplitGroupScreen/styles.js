import {Dimensions ,StyleSheet } from 'react-native';

import { Colors } from '../../../Theme/Variables';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    groupNameIconView: {
        marginTop: 50,
    },
    input: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        borderBottomColor: Colors.gray004,
        borderBottomWidth: 2,
        width: 240,
        color: Colors.primaryBlack
    },
    colorContainer: { marginTop: 27 },
    colorView: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    txtColor: {
      fontFamily: 'Poppins-Bold',
      fontSize: 18,
      color: Colors.primaryBlack,
    },
    dateContainer:{
      backgroundColor:Colors.gray004,
      height:60,
      marginTop:30,
      borderRadius:17,

      alignItems:'center',
      flexDirection:'row',
      paddingHorizontal:30,
      justifyContent:'space-between'
    },
    txtDesc:{
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
      color: Colors.gray003,
    },
    txtDate:{
      fontFamily: 'Poppins-Bold',
      fontSize: 16,
      color: Colors.primaryBlack,
    },
    addCardView:{
      backgroundColor:Colors.gray004,
      height:60,
      paddingHorizontal:30,

      marginTop:40,
      borderRadius:17,
      alignItems:'center',
      flexDirection:'row'
    },
    txtAddParticipant:{
      fontFamily: 'Poppins-Regular',
      fontSize: 18,
      color: Colors.primaryBlack,
    },
    participantContainer:{
      marginTop: 30,
      maxHeight: height * 0.25,
    },
    txtParticipantName:{
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      color: Colors.primaryBlack,
    },
    participantInput:{
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      borderBottomColor: Colors.gray004,
      borderBottomWidth: 2,
      width: width * 0.5,
      color: Colors.primaryBlack,
      paddingBottom:10
    }
});
