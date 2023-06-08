import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import moment from "moment";
import { ScrollView } from "react-native-gesture-handler";

import { dateRangeItems } from "../../Util/Constants";
import { getMonthAndYear } from "../../Util/Common";

import { BottomSheet, SaveCloseController } from "../index";
import BackwardIcon from "../../Assets/SVGIcons/BackwardIcon";
import { CustomDatePicker } from "../CustomDatePicker";
import CorrectIcon from "../../Assets/SVGIcons/CorrectIcon";
import CloseIcon from "../../Assets/SVGIcons/CloseIcon";
import ForwardBlackIcon from "../../Assets/SVGIcons/ForwardBlackIcon";
import Gradient from "../Gradient";
import { GradientPressableChip } from "../Chips";

import { Colors } from "../../Theme/Variables";
import styles from "./styles";

export const RecordViewer = ({
                               getRecodeValueHandler,
                               onChange,
                               bottomSheetModalRef,
                               handleCloseModal,
                               setChoose,
                               children,
                               updateFilterState,
                               dateObject,
                               previousFilterType,
                               previousFilterTimestamps,
                               previousFilterState,
                               setPreviousFilterState,
                               filterType,
                               filterTimestamps
                             }) => {
  const initialDate = new Date();

  const snapPoints = useMemo(
    () => ["25%", Platform.OS === "android" ? "95%" : "92.5%"],
    [],
  );

  const monthAndYears = useRef(getMonthAndYear());


  const [open, setOpen] = useState(false);
  const [monthPositionOnViewer, setMonthPositionOnViewer] = useState(false);
  const [horizontalScrollValue, setHorizontalScrollValue] = useState(0);
  const [minimumDate, setMinimumDate] = useState(new Date(1970, 0, 1));
  const [maximumDate, setMaximumDate] = useState(new Date(2100, 11, 31));

  const handleSelectMonth = dateObj => {

    previousFilterType.current = 0;
    previousFilterTimestamps.current[0] = moment(dateObj).add(1, "M").utc().startOf("month").format("X");
    previousFilterTimestamps.current[1] = moment(dateObj).add(1, "M").utc().endOf("month").format("X");

    let formattedDate = formatMonthAndYear(dateObj);
    setPreviousFilterState({
      ...previousFilterState,
      selectedMonth: formattedDate,
      dateTo: null,
      dateFrom: null,
      isFocused: false,
      isSelectedAll: false,
      inputRangeValue: "",
    });
  };

  const formatMonthAndYear = item => {
    let name;
    const currentYear = initialDate.getFullYear();

    if (item.getFullYear() === currentYear) {
      name = moment(item).format("MMMM");
    } else {
      name = moment(item).format("MMMM YYYY");
    }
    return name;
  };

  const handleDateRangePickers = type => {
    if (type === "To") {
      setMaximumDate(new Date(2100, 11, 31));
      if (previousFilterState.dateFrom === null) {
        setMinimumDate(new Date(1970, 0, 1));
      } else {
        setMinimumDate(moment(previousFilterState.dateFrom.toString(), "MMM. D, YYYY").utc().toDate());
      }
    } else {
      setMinimumDate(new Date(1970, 0, 1));
      if (previousFilterState.dateTo === null) {
        setMaximumDate(new Date(2100, 11, 31));
      } else {
        setMaximumDate(moment(previousFilterState.dateTo.toString(), "MMM. D, YYYY").utc().toDate());
      }
    }
    setOpen(true);
    setPreviousFilterState({ ...previousFilterState, dateType: type });
  };

  const onSetSelectedDate = item => {
    setOpen(false);
    let formattedDate = moment(item).format("MMM. D, YYYY");
    if (formattedDate) {
      if (previousFilterState.dateType === "To") {
        previousFilterTimestamps.current[1] = moment(item).utc().subtract(1, "day").endOf("day").format("X");
        if (previousFilterState.dateFrom === null) {
          previousFilterTimestamps.current[0] = 0;
          setMinimumDate(new Date(1970, 0, 1));
        }

        setMaximumDate(item);

        previousFilterType.current = 3;
        setPreviousFilterState({
          ...previousFilterState,
          dateTo: formattedDate,
          selectedMonth: null,
          isFocused: false,
          isSelectedAll: previousFilterState.dateFrom === null,
          inputRangeValue: "",
        });
      } else {
        previousFilterTimestamps.current[0] = moment(item).utc().startOf("day").format("X");

        setMinimumDate(item);

        if (previousFilterState.dateTo === null) {
          previousFilterTimestamps.current[1] = 0;
          previousFilterType.current = 2;
          setMaximumDate(new Date(2100, 11, 31));
        } else {
          previousFilterType.current = 3;
        }


        setPreviousFilterState({
          ...previousFilterState,
          selectedMonth: null,
          dateFrom: formattedDate,
          isFocused: false,
          isSelectedAll: false,
          inputRangeValue: "",
        });
      }
    }
  };

  const previousDateRange = () => {
    if (previousFilterState.selectedIndex > 0) {
      setPreviousFilterState({
        ...previousFilterState,
        isSelectedAll: false,
        inputRangeValue: "1",
        selectedIndex: previousFilterState.selectedIndex - 1,
        selectedMonth: null,
        dateTo: null,
        dateFrom: null,
        isFocused: true,
      });
      getTimestampRelatedToDateType(dateRangeItems[previousFilterState.selectedIndex - 1], previousFilterState.selectedIndex - 1);
    }
  };

  const nextDateRange = () => {
    if (previousFilterState.selectedIndex < dateRangeItems.length - 1) {
      setPreviousFilterState({
        ...previousFilterState,
        isSelectedAll: false,
        inputRangeValue: "1",
        selectedIndex: previousFilterState.selectedIndex + 1,
        selectedMonth: null,
        dateTo: null,
        dateFrom: null,
        isFocused: true,
      });
      getTimestampRelatedToDateType(dateRangeItems[previousFilterState.selectedIndex + 1], previousFilterState.selectedIndex + 1);
    }
  };

  const getTimestampRelatedToDateType = (type, howManyTimes) => {
    previousFilterType.current = 3;
    switch (type) {
      case "Day":
        previousFilterTimestamps.current[0] = moment(initialDate).utc().subtract(howManyTimes, "day").startOf("day").format("X");
        break;
      case "Week":
        previousFilterTimestamps.current[0] = moment(initialDate).utc().subtract(howManyTimes, "week").format("X");
        break;
      case "Month":
        previousFilterTimestamps.current[0] = moment(initialDate).utc().subtract(howManyTimes, "M").format("X");
        break;
      case "Year":
        previousFilterTimestamps.current[0] = moment(initialDate).utc().subtract(howManyTimes, "y").format("X");
        break;
    }
    previousFilterTimestamps.current[1] = moment(initialDate).utc().endOf("day").format("X");
  };

  const onSelectAllTime = () => {
    previousFilterType.current = 1;
    if (previousFilterState.isSelectedAll) {
      setPreviousFilterState({ ...previousFilterState, dateTo: null, isSelectedAll: false });
    } else {
      previousFilterTimestamps.current[0] = moment(initialDate).utc().add(1, "day").startOf("day").format("X");
      setPreviousFilterState({
        ...previousFilterState,
        isSelectedAll: true,
        inputRangeValue: "",
        selectedMonth: null,
        dateTo: moment(initialDate).add(1, "day").startOf("day").format("MMM. D, YYYY"),
        dateFrom: null,
        isFocused: false,
      });

      setMaximumDate(initialDate);
      setMinimumDate(new Date(1970, 0, 1));

    }
  };

  const onSubmit = () => {
    let value;
    switch (true) {
      case previousFilterState.selectedMonth != null &&
      previousFilterState.dateFrom == null &&
      previousFilterState.dateTo == null &&
      previousFilterState.isSelectedAll == false &&
      previousFilterState.isFocused == false:
        value = previousFilterState.selectedMonth;
        break;
      case previousFilterState.dateFrom !== null &&
      previousFilterState.dateTo == null &&
      previousFilterState.selectedMonth == null &&
      previousFilterState.isSelectedAll == false &&
      previousFilterState.isFocused == false:
        value = `From ${previousFilterState.dateFrom} `;
        break;
      case previousFilterState.dateTo !== null &&
      previousFilterState.dateFrom == null &&
      previousFilterState.selectedMonth == null &&
      previousFilterState.isSelectedAll == false &&
      previousFilterState.isFocused == false:
        value = `To ${previousFilterState.dateTo}`;
        break;
      case previousFilterState.dateFrom !== "" &&
      previousFilterState.dateTo !== null &&
      previousFilterState.selectedMonth == null &&
      previousFilterState.isSelectedAll == false &&
      previousFilterState.isFocused == false:
        value = `${previousFilterState.dateFrom} - ${previousFilterState.dateTo}`;
        break;
      case previousFilterState.isFocused == true &&
      previousFilterState.dateTo == null &&
      previousFilterState.selectedMonth == null &&
      previousFilterState.isSelectedAll == false &&
      previousFilterState.dateFrom == null:
        if (previousFilterState.inputRangeValue > 1) {
          value = `Last ${previousFilterState.inputRangeValue} ${
            dateRangeItems[previousFilterState.selectedIndex]
          }s`;
        } else {
          value = `Last ${previousFilterState.inputRangeValue} ${
            dateRangeItems[previousFilterState.selectedIndex]
          }`;
        }

        break;
      case previousFilterState.isSelectedAll !== false &&
      previousFilterState.dateTo != null &&
      previousFilterState.selectedMonth == null &&
      previousFilterState.isFocused == false &&
      previousFilterState.dateFrom == null:
        value = `To ${previousFilterState.dateTo}`;
        break;
      default:
        handleSelectMonth(initialDate);
        value = moment(initialDate).format("MMMM");
        break;
    }

    setChoose(value);
    setMonthPositionOnViewer(!monthPositionOnViewer);
    getRecodeValueHandler(value, previousFilterType.current, [...previousFilterTimestamps.current]);
    filterTimestamps.current = [...previousFilterTimestamps.current];
    filterType.current = previousFilterType.current;
    updateFilterState(previousFilterState);
    bottomSheetModalRef.current?.dismiss();
  };

  const resetStateAndClose = () => {

    setPreviousFilterState(dateObject);
    previousFilterTimestamps.current = [...filterTimestamps.current];
    previousFilterType.current = filterType.current;
    handleCloseModal();
  };

  useEffect(() => {
    if (dateObject.selectedMonth) {
      const monthInNumber = Number(moment(dateObject.selectedMonth, "MMMM").format("M"));
      const yearInNumber = Number(moment(dateObject.selectedMonth, "YYYY").format("Y"));
      switch (true) {
        case +yearInNumber === initialDate.getFullYear() - 1: // previous year
          const xValueForPreviousYear = 110 * (+monthInNumber - 1);
          setHorizontalScrollValue(xValueForPreviousYear);
          break;
        case +yearInNumber === initialDate.getFullYear() + 1: // next year
          const incrementAccMonth = +monthInNumber - 1 > 7 ? 25 : 23;
          const xValueForNextYear = 110 * (+monthInNumber + incrementAccMonth);
          setHorizontalScrollValue(xValueForNextYear);
          break;
        default: // current year
          const xValueForCurrentYear = 110 * (+monthInNumber + 11);
          setHorizontalScrollValue(xValueForCurrentYear);
          break;
      }
    } else {
      //focusing to current month if it's not selected month based filtering
      const xValueForCurrentYear = 110 * (Number(moment(initialDate, "MMMM").format("M")) + 11);
      setHorizontalScrollValue(xValueForCurrentYear);
    }
  }, [monthPositionOnViewer, previousFilterState]);

  return (
    <>
      {children}
      <BottomSheet
        snapPoints={snapPoints}
        bottomSheetModalRef={bottomSheetModalRef}
        onChange={onChange}>
        <View style={styles.contentContainer}>
          <View style={styles.container}>
            <KeyboardAwareScrollView enableOnAndroid={true} enableAutomaticScroll>
              <Text
                style={[
                  styles.title,
                  previousFilterState.selectedMonth != null && {
                    color: Colors.primaryBlack,
                  },
                ]}>
                Choose month
              </Text>
              <View style={styles.monthContainer}>
                <ScrollView horizontal={true} contentOffset={{ x: horizontalScrollValue, y: 0 }}>
                  <View style={styles.monthList}>
                    {monthAndYears.current.map((item, idx) => (
                      <View key={idx} style={styles.monthListItem}>
                        <GradientPressableChip
                          onPress={() => handleSelectMonth(item)}
                          name={formatMonthAndYear(item)}
                          isSelected={
                            previousFilterState.selectedMonth === formatMonthAndYear(item)
                          }
                        />
                      </View>
                    ))}
                  </View>
                </ScrollView>
              </View>
              <View style={styles.dividerContainer}>
                <View style={styles.divider} />
              </View>
              <View style={styles.customRangeContainer}>
                <Text
                  style={[
                    styles.textCustomRange,
                    (previousFilterState.dateFrom != null ||
                      previousFilterState.dateTo != null ||
                      previousFilterState.isSelectedAll) && {
                      color: Colors.primaryBlack,
                    },
                  ]}>
                  Or custom range
                </Text>
                <View style={styles.dateContainer}>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={[
                        styles.txtRange,
                        previousFilterState.dateFrom !== null && {
                          color: Colors.lightGreen,
                          marginRight: 12,
                        },
                      ]}>
                      From
                    </Text>
                    <Text style={styles.txtRange}>{previousFilterState.dateFrom}</Text>
                  </View>
                  <TouchableOpacity onPress={() => handleDateRangePickers("From")}>
                    {previousFilterState.dateFrom != null ? (
                      <TouchableOpacity
                        style={[styles.btnClose, { marginRight: 5 }]}
                        onPress={() => {
                          previousFilterTimestamps.current[0] = 0;
                          previousFilterType.current = 3;
                          setPreviousFilterState({
                            ...previousFilterState,
                            dateFrom: null,
                            isSelectedAll: previousFilterState.dateTo !== null,
                          });
                        }
                        }>
                        <CloseIcon />
                      </TouchableOpacity>
                    ) : (
                      <Text style={styles.txtAddDate}>Add date</Text>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.dateContainer}>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={[
                        styles.txtRange,
                        previousFilterState.dateTo !== null && {
                          color: Colors.lightGreen,
                          marginRight: 12,
                        },
                      ]}>
                      To
                    </Text>
                    <Text style={styles.txtRange}>{previousFilterState.dateTo}</Text>
                  </View>
                  <TouchableOpacity onPress={() => handleDateRangePickers("To")}>
                    {previousFilterState.dateTo != null ? (
                      <TouchableOpacity
                        style={[styles.btnClose, { marginRight: 5 }]}
                        onPress={() => {
                          previousFilterTimestamps.current[1] = 0;
                          previousFilterType.current = 2;
                          setPreviousFilterState({ ...previousFilterState, dateTo: null, isSelectedAll: false });
                        }
                        }>
                        <CloseIcon />
                      </TouchableOpacity>
                    ) : (
                      <Text style={styles.txtAddDate}>Add date</Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.customRangeContainer}>
                <Text
                  style={[
                    styles.textCustomRange,
                    previousFilterState.isFocused && { color: Colors.primaryBlack },
                  ]}>
                  Or in the last
                </Text>
                <View style={styles.lastContainer}>
                  <View style={styles.inputContainer}>
                    <Gradient
                      colors={
                        previousFilterState.isFocused
                          ? ["#6F51FF", "#8B74FE"]
                          : [Colors.gray6, Colors.gray6]
                      }
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}>
                      <View style={styles.inputView}>
                        <TextInput
                          style={[
                            styles.input,
                            previousFilterState.isFocused && {
                              color: "#ffff",
                            },
                          ]}
                          value={previousFilterState.inputRangeValue}
                          onChangeText={text => {
                            getTimestampRelatedToDateType(dateRangeItems[previousFilterState.selectedIndex], text);
                            setPreviousFilterState({
                              ...previousFilterState,
                              inputRangeValue: text.trim(),
                              isSelectedAll: false,
                              selectedMonth: null,
                              dateTo: null,
                              dateFrom: null,
                              isFocused: true,
                            });
                          }
                          }
                          placeholder="0"
                          inputMode="numeric"
                          cursorColor={Colors.primaryBlack}
                          selectionColor={Colors.primaryBlack}
                          placeholderTextColor={
                            previousFilterState.isFocused ? "#ffff" : Colors.primaryBlack
                          }
                          textAlignVertical="center"
                          textAlign="center"
                        />
                      </View>
                    </Gradient>
                  </View>
                  <View style={styles.chooseLastChip}>
                    <TouchableOpacity
                      style={{ padding: 10 }}
                      onPress={previousDateRange}>
                      <BackwardIcon />
                    </TouchableOpacity>
                    <View style={{ width: 80 }}>
                      <Text style={styles.chooseLastChipText}>
                        {previousFilterState.inputRangeValue > 1
                          ? `${dateRangeItems[previousFilterState.selectedIndex]}s`
                          : dateRangeItems[previousFilterState.selectedIndex]}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{ padding: 10 }}
                      onPress={nextDateRange}>
                      <ForwardBlackIcon />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.customRangeContainer}>
                <Text
                  style={[
                    styles.textCustomRange,
                    previousFilterState.isSelectedAll && { color: Colors.primaryBlack },
                  ]}>
                  Or all time
                </Text>
                <View style={{ marginTop: 10, width: 200 }}>
                  <GradientPressableChip
                    name={
                      previousFilterState.isSelectedAll
                        ? "Unselect All Time"
                        : "Select All Time"
                    }
                    isSelected={previousFilterState.isSelectedAll}
                    onPress={onSelectAllTime}
                  />
                </View>
              </View>
            </KeyboardAwareScrollView>
            <SaveCloseController
              handleClose={resetStateAndClose}
              submitButtonText={"Set"}
              submitButtonIcon={<CorrectIcon/>}
              handleSubmit={onSubmit}
              disabled={(!previousFilterState.isFocused &&
                previousFilterState.dateTo == null &&
                previousFilterState.selectedMonth == null &&
                !previousFilterState.isSelectedAll &&
                previousFilterState.dateFrom == null)}
            />
            <CustomDatePicker
              handleClose={() => setOpen(false)}
              onSetSelectedDate={text => onSetSelectedDate(text)}
              open={open}
              date={initialDate}
              minimumDate={minimumDate}
              maximumDate={maximumDate}
            />
          </View>
        </View>
      </BottomSheet>
    </>
  );
};
