import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import { GroupExpenseMainCard, OutlinedRoundButton, SaveCloseController } from "../../../Components";
import { navigate } from "../../../Navigators/Root";

import CancelIcon from "../../../Assets/SVGIcons/CancelIcon";
import MinimizeIcon from "../../../Assets/SVGIcons/MinimizeIcon";
import PlusIcon from "../../../Assets/SVGIcons/PlusIcon";

import { useTheme } from "../../../Theme";
import styles from "./styles";

export default function ExpenseSummaryScreen({ navigation, route }) {
  const { Layout } = useTheme();

  const expense = ["Trip 1", "Trip 2", "Trip 3", "Trip 4"];

  return (
    <SafeAreaView
      style={[
        Layout.fill, styles.parentContainer,
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
        <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
          {expense.map((item, idx) => (
            <GroupExpenseMainCard title={item} payee={"Kamal"} amount={"1000100"} currency={"LKR"}
                                  date={"06-05-2023"} key={idx} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.bottomView}>
        <SaveCloseController
          closeIcon={<MinimizeIcon />}
          handleSubmit={() => navigate("AddNewGroupExpenseScreen", { isEditMode: false })}
          submitButtonText={"Add"}
          submitButtonIcon={<PlusIcon />}
        />
      </View>

    </SafeAreaView>
  );
}

