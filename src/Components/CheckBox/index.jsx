import React from "react";
import { TouchableOpacity, View } from "react-native";

import CorrectIcon from "../../Assets/SVGIcons/CorrectIcon";
import Gradient from "../Gradient/index";
import GroupMemberTick from "../../Assets/SVGIcons/GroupMemberTick";

import { Colors } from "../../Theme/Variables";
import styles from "./styles";

const CheckBox = ({ isChecked, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, isChecked && { borderWidth: 0 }]}
      onPress={onPress}>
      <Gradient
        colors={
          isChecked ? Colors.primaryGreenGradient : [Colors.white, Colors.white]
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <View style={styles.checkBox}>
          {isChecked && <CorrectIcon isSmall={true} />}
        </View>
      </Gradient>
    </TouchableOpacity>
  );
};

const GroupMemberCheckBox = ({ isChecked, onPress, isWhite }) => {
  return (
    <TouchableOpacity
      style={[styles.memberCheckboxContainer, isChecked && { borderWidth: 0 }]}
      onPress={onPress}>
      <View style={styles.checkBox}>
        {isChecked && <GroupMemberTick isWhite={isWhite} />}
      </View>
    </TouchableOpacity>
  );
};

export { CheckBox, GroupMemberCheckBox };
