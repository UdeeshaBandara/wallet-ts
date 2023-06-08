import React, { useMemo } from "react";
import { View, Text } from "react-native";

import { AccountAndCategoryIcons } from "../../Assets/SVGIcons/AccountAndCategoryIcons";
import { getTextColor, getIconByName, getBorderColor } from "../../Util/Common";
import { navigate } from "../../Navigators/Root";

import { OutlinedChip } from "../Chips";

import { Colors } from "../../Theme/Variables";
import styles from "./styles";
import { useTheme } from "../../Theme";

export const TitleBalanceAdd = ({ title, balance, currency, isExcluded, colorCode, icon, isSplitGroup = false }) => {

  const { Layout } = useTheme();

  const loadAccountAndCategoryIcons = useMemo(()=>{
    return AccountAndCategoryIcons;
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        {getIconByName(icon, loadAccountAndCategoryIcons,colorCode)}
        <Text style={{ ...styles.txtTitle, color: getTextColor(colorCode) }}>{title}</Text>
        {isExcluded && <Text style={{ ...styles.txtExcludeInclude, color: getTextColor(colorCode) }}>(excluded)</Text>}
      </View>
      {isSplitGroup && <View>
        <Text numberOfLines={1} style={{ ...styles.groupMembers, color: getTextColor(colorCode) }}>
          Dulaj, kavinda, jhon, arun...
        </Text>
        <View style={[Layout.row, Layout.justifyContentBetween]}>
        <OutlinedChip
          name="Balances"
          icon={null}
          bgColor={Colors.transparent}
          fontColor={getBorderColor(colorCode).color}
          onPress={() => {
            navigate("GroupBalanceScreen")
          }}
          borderColor={getBorderColor(colorCode).color}
          screenName="split"
        />
        <OutlinedChip
          name="New expense"
          icon={null}
          bgColor={Colors.transparent}
          fontColor={getBorderColor(colorCode).color}
          onPress={() => {
            navigate("ExpenseSummaryScreen")
          }}
          borderColor={getBorderColor(colorCode).color}
          screenName="split"
        />
      </View></View>}
      <View style={[styles.balanceView, isSplitGroup && { justifyContent: 'center'}]}>
        <Text style={{ ...styles.currency, color: getTextColor(colorCode) }}>
          {currency}
        </Text>
        <Text style={{ ...styles.txtBalance, color: getTextColor(colorCode) }}>
          {parseFloat(balance.split(".")[0]).toLocaleString()}
        </Text>
        <Text style={{ ...styles.txtCents, color: getTextColor(colorCode) }}>
          {" "}
          .{balance.split(".")[1] === undefined ? "00" : balance.split(".")[1]}
        </Text>
      </View>
    </View>
  );
};
