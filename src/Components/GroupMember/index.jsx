import React from "react";
import { Text, View } from "react-native";

import { GroupMemberCheckBox } from "../CheckBox";

import { Colors } from "../../Theme/Variables";
import { useTheme } from "../../Theme";
import styles from "./styles";


export const GroupMember = ({
                              isSelectAll,
                              isChecked = false,
                              onPress,
                              name,
                              currency,
                              amount,
                              isBalance = false,
                              isMine = false,
                            }) => {

  const { Layout } = useTheme();

  return (
    <View style={[
      Layout.rowHCenter, styles.container, isSelectAll && styles.selectAllContainer,
    ]}>
      {!isBalance && <GroupMemberCheckBox isChecked={isChecked} isWhite={isSelectAll} onPress={onPress} />}
      {isSelectAll ? <Text style={[styles.paidText, { color: Colors.white }]}>For whom</Text> : <View style={[
        Layout.rowCenter, Layout.fill, Layout.justifyContentBetween,
      ]}>
        <Text
          style={[styles.paidText, isMine && { color: Colors.lightBlue }, { flex: 2 }]}>{name}{isMine ? "(me)" : ""}</Text>
        <Text
          style={[styles.paidText, isBalance && { color: Math.sign(Number(amount)) === -1 ? Colors.primaryRed : Colors.lightGreen }, styles.amount]}>{currency} {amount}</Text>
      </View>}

    </View>);
};
