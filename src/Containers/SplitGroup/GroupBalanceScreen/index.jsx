import React from "react";
import { SafeAreaView, ScrollView, TextInput, View } from "react-native";

import { GroupMember, OutlinedRoundButton } from "../../../Components";

import CancelIcon from "../../../Assets/SVGIcons/CancelIcon";

import { useTheme } from "../../../Theme";
import styles from "./styles";

export default function GroupBalanceScreen({ navigation, route }) {
  const { Layout } = useTheme();

  const friends = ["Kasun", "Amal", "Nimal", "Kamal"];

  return (
    <SafeAreaView
      style={[
        Layout.fill,styles.parentContainer,
      ]}>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <OutlinedRoundButton
            icon={<CancelIcon />}
            onPress={() => {
              navigation.pop();
            }}
          />
        </View>
        <TextInput
          placeholderTextColor="#93929A"
          placeholder={
            "Title"
          }
          editable = {false}
          style={styles.input}
          value={"Balances"}
        />
        <ScrollView contentContainerStyle={{ paddingBottom: 300 }}>
          <View>
            {friends?.map((item, idx) => (
              <GroupMember isMine={idx===0} name={item} amount={-1234} currency={"USD"} isSelectAll={false} isBalance={true} onPress={() => {

              }} key={idx}/>
            ))}

          </View>
        </ScrollView>
      </View>

    </SafeAreaView>
  );
}

