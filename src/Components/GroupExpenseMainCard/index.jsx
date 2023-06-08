import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useTheme } from "../../Theme";
import styles from "./styles";

export const GroupExpenseMainCard = ({ title, payee, amount, currency, date, onPress }) => {

  const { Layout } = useTheme();


  return (
    <TouchableOpacity style={[
      Layout.column, styles.mainBackground,
    ]} onPress={onPress}>

      <View style={[
        Layout.rowHCenter, Layout.justifyContentBetween, { marginHorizontal: 20, marginTop: 15 },
      ]}>
        <Text style={styles.expenseTitle}>{title}</Text>
        <Text style={styles.paidBy}>Paid by <Text
          style={[styles.paidBy, { fontFamily: "Poppins-Regular" }]}>{payee}</Text></Text>
      </View>

      <View style={[
        Layout.rowCenter,{flexWrap:'wrap',marginTop:15}
      ]}>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={[styles.date,{fontSize:22}]}>.00 <Text
          style={[styles.amount, { fontFamily: "Poppins-Regular" }]}>{currency}</Text></Text>
      </View>

      <Text style={[styles.date,{margin:15}]}>{date}</Text>
    </TouchableOpacity>);
};
