import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  BackHandler,
  processColor,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { PieChart } from "react-native-charts-wrapper";

import Transaction from "../../../Database/Model/Transaction";

import { DEFAULT_CURRENCY } from "../../../Util/Constants";
import { getItemFromAsyncStorage } from "../../../Util/Storage";
import { navigate } from "../../../Navigators/Root";

import {
  Card,
  GradientRoundIcon, OutlinedChip,
  OutlinedRoundButton,
  RecordViewer,
} from "../../../Components";
import CalenderIcon from "../../../Assets/SVGIcons/CalenderIcon";
import CancelIcon from "../../../Assets/SVGIcons/CancelIcon";
import ExpenseImportIcon from "../../../Assets/SVGIcons/ExpenseImportIcon";
import IncomeImportIcon from "../../../Assets/SVGIcons/IncomeImportIcon";
import PlusIcon from "../../../Assets/SVGIcons/PlusIcon";
import { useTabMenu } from "../../../Navigators/TabContext";

import { useTheme } from "../../../Theme";
import styles from "./styles";

export default function DisplayTransactionScreen({ navigation, route }) {
  const { Layout, Colors } = useTheme();
  let { type, isFromAccount, currencyForAccount, accountId } = route.params;
  const {
    filterType, filterTimestamps, filterValue, setFilterValue, dateObject,
    updateFilterState,
  } = useTabMenu();
  let values = [];

  const bottomSheetModalRef = useRef(null);
  const previousFilterType = useRef(filterType.current);
  const previousFilterTimestamps = useRef(JSON.parse(JSON.stringify(filterTimestamps.current)));

  const [previousFilterState, setPreviousFilterState] = useState(dateObject);
  let [data, setData] = useState({});
  const [isEmpty, setIsEmpty] = useState(true);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isPieChartSelected, setIsPieChartSelected] = useState(false);
  const [currency, setCurrency] = useState("");
  const [isOpenRecordViewerModal, setIsOpenRecordViewerModal] = useState(false);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, [isOpenRecordViewerModal]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      if (isFromAccount) {
        setCurrency(currencyForAccount !== "" ? currencyForAccount : "USD");
        getTransactionsByCategory(filterType.current, filterTimestamps.current, currencyForAccount);
      } else {
        getItemFromAsyncStorage(DEFAULT_CURRENCY).then((value) => {
          setCurrency(value !== "" ? value : "USD");
          getTransactionsByCategory(filterType.current, filterTimestamps.current, value);
        });
      }

    });
    return () => {
      unsubscribe;
    };
  }, [navigation]);

  const handleShowModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const backAction = () => {
    if (isOpenRecordViewerModal) {
      bottomSheetModalRef.current?.close();
      return true;
    } else {
      navigation.pop();
      return true;
    }
  };

  const getTransactionsByCategory = async (
    filterType = -1,
    timestamps = [],
    currency,
  ) => {
    let transactionsByCategory = [];

    if (isFromAccount)
      transactionsByCategory = await getTransactionsByAccount(filterType, timestamps, currency);
    else
      transactionsByCategory = await getAllTransactions(filterType, timestamps, currency);


    if (transactionsByCategory.length > 0) {
      let total = 0;
      transactionsByCategory.forEach((category, index) => {
        total += category.total;
        values[index] = { value: category.total, label: category.name };
        colors[index] = {
          label: category.name,
          color: category.color,
        };
      });
      updateChartValues(
        colors.map(x => processColor(x["color"])),
        values,
      );

      setCategories(transactionsByCategory);
      setTotalAmount(total);

      setColors(colors);
      setIsEmpty(false);
      setIsPieChartSelected(false);
    } else {
      setTotalAmount(0);
      setIsEmpty(true);
    }
  };

  const getAllTransactions = async (
    filterType = -1,
    timestamps = [],
    currency,
  ) => {
    return await Transaction.getTransactionsGroupByCategory(type, filterType, timestamps, currency);
  };

  const getTransactionsByAccount = async (
    filterType = -1,
    timestamps = [],
    currency,
  ) => {

    return await Transaction.getTransactionsFilterByType(type,filterType,timestamps,currency,accountId);

  };


  const handleSelect = event => {
    if (Object.keys(event.nativeEvent).length > 0) {
      setIsPieChartSelected(true);
      let index = categories.findIndex(
        e => e.name === event.nativeEvent.data.label,
      );
      let colorIndex = colors.findIndex(
        e => e.label === event.nativeEvent.data.label,
      );
      const categoryCopy = [...categories];
      categoryCopy.unshift(categoryCopy.splice(index, 1)[0]);
      setCategories(categoryCopy);
      //Regenerate colors list with reduced alpha to highlight selected portion
      updateChartValues(
        colors.map((x, idx) => {
          return idx !== colorIndex
            ? processColor(x["color"] + "55")
            : processColor(x["color"]);
        }),
      );
    } else {
      setIsPieChartSelected(false);
      updateChartValues(colors.map(x => processColor(x["color"])));
    }
  };

  const updateChartValues = (colors, values = data.dataSets[0].values) => {
    let updatedValues = JSON.parse(JSON.stringify(values));

    setData({
      ...data,
      dataSets: [
        {
          values: updatedValues,
          label: "",
          config: {
            colors: colors,
            valueTextSize: 20,
            valueTextColor: processColor("black"),
            sliceSpace: 0,
            selectionShift: 5,
            valueFormatter: "#.#'%'",
          },
        },
      ],
    });
  };


  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <View style={styles.container}>
        <View style={styles.header}>
          <OutlinedRoundButton
            icon={<CancelIcon />}
            onPress={() => {
              navigation.pop();
            }}
          />
          <View style={styles.headerRightView}>
            <RecordViewer
              setChoose={setFilterValue}
              dateObject={dateObject}
              updateFilterState={updateFilterState}
              getRecodeValueHandler={async (value, type, timestamps) => {
                filterType.current = type;
                filterTimestamps.current = timestamps;
                setFilterValue(value);
                await getTransactionsByCategory(type, timestamps, currency);
              }}
              handleCloseModal={handleCloseModal}
              bottomSheetModalRef={bottomSheetModalRef}
              onChange={idx => setIsOpenRecordViewerModal(idx >= 1)}
              setPreviousFilterState={setPreviousFilterState}
              previousFilterState={previousFilterState}
              previousFilterType={previousFilterType}
              previousFilterTimestamps={previousFilterTimestamps}
              filterType={filterType}
              filterTimestamps={filterTimestamps}
            >
              <View style={{ maxWidth: 200 }}>
                <OutlinedChip
                  name={filterValue}
                  icon={<CalenderIcon />}
                  onPress={handleShowModal}
                />
              </View>
            </RecordViewer>
            <GradientRoundIcon
              bgColor={["#17CEA0", "#44F0C6"]}
              icon={<PlusIcon />}
              onPress={() =>
                navigate("AddTransactionScreen", {
                  type: type,
                  isEditMode: false,
                  isFromAccount: false,
                  isFromCategory: false,
                })
              }
            />
          </View>
        </View>
        <Text style={styles.txtIncome}>
          {type === "income" ? "Income" : "Expense"}
        </Text>
        <View style={styles.amountRow}>
          <Text style={styles.txtAmount}>
            {parseFloat(totalAmount.toFixed()).toLocaleString().split(".")[0]}
          </Text>
          <Text style={styles.txtCurrency}>
            {" "}
            .{totalAmount.toFixed(2).split(".")[1]}
          </Text>
          <Text style={styles.txtCurrency}> {currency}</Text>
        </View>
        <View style={styles.parentContainer}>
          {isEmpty ? (
            <View style={styles.mainCircle}>
              <View style={styles.innerCircle} />
            </View>
          ) : (
            <View>
              <PieChart
                style={{ width: 300, height: 300 }}
                chartDescription={{ text: "" }}
                logEnabled={false}
                data={data}
                legend={{ enabled: false }}
                drawEntryLabels={false}
                rotationEnabled={false}
                usePercentValues={true}
                holeRadius={40}
                transparentCircleRadius={40}
                transparentCircleColor={processColor("transparent")}
                touchEnabled={true}
                maxAngle={360}
                holeColor={processColor("transparent")}
                onSelect={event => handleSelect(event)}
              />
            </View>
          )}
          {type === "income" ? (
            <View style={[styles.importIcon, { top: isEmpty ? -155 : -180 }]}>
              <IncomeImportIcon />
            </View>
          ) : (
            <View style={[styles.importIcon, { top: isEmpty ? -155 : -180 }]}>
              <ExpenseImportIcon />
            </View>
          )}
        </View>
        <View style={{ marginTop: 5, marginBottom: 80 }}>
          <ScrollView contentContainerStyle={{ paddingBottom: 420 }}>
            {!isEmpty
              ? categories?.map((item, id) => (
                <View key={id}>
                  <Card
                    balance={item.total.toFixed(2)}
                    title={item.name}
                    currency={item.currency}
                    percentage={
                      ((item.total / totalAmount) * 100).toFixed(1) + " %"
                    }
                    screenName="transaction"
                    isSelectedCategory={isPieChartSelected && id === 0}
                    colorCode={item.color}
                    icon={item.icon}
                  />
                </View>
              ))
              : null}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
