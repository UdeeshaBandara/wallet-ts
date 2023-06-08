import React from "react";
import { Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

import DropDownIcon from "../../Assets/SVGIcons/DropDownIcon";

import { useTheme } from "../../Theme";
import styles from "./styles";

export const DropDown = ({data, transactionType }) => {

  const { Layout } = useTheme();


  return (
    <View style={[
      Layout.rowCenter, Layout.justifyContentBetween, { marginVertical: 15 },
    ]}>
      <Text style={styles.paidText}>{transactionType === "income"
        ? "Paid by"
        : "Paid to"}</Text>

      <SelectDropdown
        data={data}
        defaultButtonText="Select an option"
        buttonStyle={[Layout.rowVCenter, styles.dropDownContainer]}
        buttonTextStyle={styles.dropDownText}
        rowTextStyle={styles.dropdownRowText}
        renderDropdownIcon={() => {
          return <View style={styles.iconDropdown}><DropDownIcon /></View>;
        }}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {

          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {

          return item;
        }}
        dropdownIconPosition={"right"}
      />
    </View>);
};
