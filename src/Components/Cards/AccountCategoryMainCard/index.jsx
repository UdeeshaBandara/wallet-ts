import React, { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { getTextColor, getFormattedBalance, getIconByName } from "../../../Util/Common";

import { AccountAndCategoryIcons } from "../../../Assets/SVGIcons/AccountAndCategoryIcons";

import { Colors } from "../../../Theme/Variables";
import styles from "./styles";

export const AccountCategoryMainCard = ({
                                          title,
                                          accountBalance,
                                          expenses,
                                          income,
                                          currency,
                                          onPress,
                                          type = "account",
                                          colorCode,
                                          icon,
                                          isExcluded,
                                          isSplit=false,
                                          date
                                        }) => {

  const loadAccountAndCategoryIcons = useMemo(()=>{
    return AccountAndCategoryIcons;
  },[])

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={[
          styles.cardTopView,
          {
            backgroundColor:
            colorCode,
          },
        ]}>
        <View style={styles.titleView}>
         <View style={styles.titleIcon}>
          {getIconByName(icon, loadAccountAndCategoryIcons, colorCode)}
            <Text style={[styles.txtAccountName, { color: getTextColor(colorCode) }]}>{title}</Text>
            {isExcluded && <Text style={{ ...styles.txtExcludeInclude, color: getTextColor(colorCode) }}>(excluded)</Text>}
         </View>
          {isSplit && <Text style={styles.txtDate}>{date}</Text>}
        </View>
        <View style={styles.balanceView}>
          <Text style={[styles.txtAccBalance, { color: getTextColor(colorCode) }]}>
            {(expenses === 0 && income !== 0 ? "+" : "") + parseFloat(accountBalance.split(".")[0]).toLocaleString()}
          </Text>
          <Text style={[styles.txtCents, { color: getTextColor(colorCode) }]}>
            {" "}
            .{accountBalance.split(".")[1] === undefined ? "00" : accountBalance.split(".")[1]}
          </Text>
          <Text style={[styles.txtCurrency, { color: getTextColor(colorCode) }]}>
            {" "}
            {currency}
          </Text>
        </View>
      </View>
      <View style={styles.cardBottomView}>
        <View style={styles.expensesIncomeView}>
          <Text style={styles.expensesIncomeTitle}>{isSplit ? 'INCOME' : 'INCOME THIS MONTH'}</Text>
          <View
            style={styles.expenseCardContent}>
            <Text style={[styles.expensesIncomeBalance, isSplit && income !=='0.00' && {color:Colors.lightGreen}]}>
              {getFormattedBalance(income)}{" "}
              <Text style={[styles.expensesIncomeCurrency, isSplit && income !=='0.00' && {color:Colors.lightGreen}]}>{currency}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.expensesIncomeView}>
          <Text style={styles.expensesIncomeTitle}>{isSplit ? 'EXPENSE' : 'EXPENSES THIS MONTH'}</Text>
          <View
            style={styles.expenseCardContent}>
            <Text style={[styles.expensesIncomeBalance, isSplit && expenses !=='0.00' && {color:Colors.primaryRed}]}>
              {getFormattedBalance(expenses)}{" "}
              <Text style={[styles.expensesIncomeCurrency, isSplit && expenses !=='0.00' && {color:Colors.primaryRed}]}>{currency}</Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
