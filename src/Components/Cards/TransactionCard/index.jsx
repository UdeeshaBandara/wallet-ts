import React, { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { AccountAndCategoryIcons } from "../../../Assets/SVGIcons/AccountAndCategoryIcons";
import {
  getTransactionIcon,
  getFormattedBalance, getIconByName, getTextColor,
} from "../../../Util/Common";

import { GradientRoundIcon, IconChip } from "../../../Components";

import { Colors } from "../../../Theme/Variables";
import styles from "./styles";


const TransactionCard = ({
                           category,
                           transactionTitle,
                           balance,
                           account,
                           toAccount = "",
                           transactionType,
                           currency,
                           isTransfer = false,
                           icon="",
                           toIcon="",
                           ...props
                         }) => {

  const loadAccountAndCategoryIcons = useMemo(()=>{
    return AccountAndCategoryIcons;
  },[])

  return (
    <TouchableOpacity {...props}>
      <View style={styles.innerCard}>
        <View>
          {isTransfer ? (
            <View style={styles.innerCHeader}>
              <IconChip
                bgColor={"#F8F8F8"}
                icon={getIconByName(toIcon, loadAccountAndCategoryIcons,Colors.primaryYellow)}
                text={toAccount}
                textColor="black"
              />
              <Text style={styles.txtMonth}> {">"} </Text>
              <View style={{ marginTop: 10 }}>
                <IconChip
                  bgColor={"#F8F8F8"}
                  icon={getIconByName(icon, loadAccountAndCategoryIcons,Colors.primaryYellow)}
                  text={account}
                  textColor="black"
                />
              </View>
            </View>
          ) : (
            <View style={styles.innerCHeader}>
              {(category != null && category.name !== "Unspecified" && category.state !== "0") &&
                <View style={{ marginRight: 11 }}>
                  <IconChip
                    bgColor={category.color}
                    icon={getIconByName(category.icon, loadAccountAndCategoryIcons, category.color)}
                    text={category.name}
                    textColor={getTextColor(category.color)}
                  />
                </View>}
              <View style={{ marginTop: 10 }}>
                <IconChip
                  bgColor={"#F8F8F8"}
                  icon={getIconByName(icon, loadAccountAndCategoryIcons,Colors.primaryYellow)}
                  text={account}
                  textColor="black"
                />
              </View>
            </View>
          )}
        </View>
        {transactionTitle && (
          <Text style={[styles.txtMonth, { marginTop: 5 }]}>
            {transactionTitle}
          </Text>
        )}
        <View style={styles.innerCFooter}>
          {transactionType === "Transfer" ? (
            <GradientRoundIcon
              icon={getTransactionIcon(transactionType)}
              bgColor={["#441ff6", "#6b5dce"]}
            />
          ) : (
            <View>
              {transactionType === "Expenses" ? (
                <GradientRoundIcon
                  icon={getTransactionIcon(transactionType)}
                  bgColor={["#16151A", "#AAA9AF"]}
                />
              ) : (
                <GradientRoundIcon
                  icon={getTransactionIcon(transactionType)}
                  bgColor={["#17CEA0", "#44F0C6"]}
                />
              )}
            </View>
          )}
          <Text
            style={[
              styles.txtBalance,
              transactionType === "Expenses"
                ? { color: Colors.primaryBlack }
                : transactionType === "Transfer"
                  ? { color: Colors.primaryPurple }
                  : { color: Colors.lightGreen },
            ]}>
            {getFormattedBalance(balance)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const TransactionHeaderCard = ({ month, day, positiveOrNegativeBalance, balance }) => {
  return (
    <View style={styles.transactionVHeader}>
      <View>
        <Text style={styles.txtMonth}>{month}</Text>
        <Text style={styles.txtDay}>{day}</Text>
      </View>
      <Text
        style={positiveOrNegativeBalance === "negative" ? styles.txtHBalanceNegative : styles.txtHBalance}>{getFormattedBalance(balance)}</Text>
    </View>
  );
};

export { TransactionCard, TransactionHeaderCard };
