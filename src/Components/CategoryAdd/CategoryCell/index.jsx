import React, { useMemo } from "react";
import {
  Text,
  View,
} from "react-native";

import { getIconByName } from "../../../Util/Common";

import { AccountAndCategoryIcons } from "../../../Assets/SVGIcons/AccountAndCategoryIcons";
import CategoryMinus from "../../../Assets/SVGIcons/CategoryMinus";
import { RoundIcon } from "../../RoundIcon";

import styles from "./styles";
import { Colors } from "../../../Theme/Variables";

export const CategoryCell = ({ name, color, onPress, isSelected, icon }) => {

  const loadAccountAndCategoryIcons = useMemo(()=>{
    return AccountAndCategoryIcons;
  },[])

  return (
    <View style={styles.container}>
      <RoundIcon
        icon={getIconByName(icon, loadAccountAndCategoryIcons,color)}
        iconBg={color}
      />
      <Text numberOfLines={1}
        style={[styles.categoryName, { color: isSelected && color !== Colors.primaryYellow ? Colors.white : Colors.primaryBlack }]}>{name}</Text>
      {isSelected && <CategoryMinus />}
    </View>
  );
};
