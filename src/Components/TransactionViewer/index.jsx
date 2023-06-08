import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import moment from "moment/moment";

import { RecordViewer } from "../RecordViewer";

import BackwardIcon from "../../Assets/SVGIcons/BackwardIcon";
import CalenderIcon from "../../Assets/SVGIcons/CalenderIcon";
import ForwardBlackIcon from "../../Assets/SVGIcons/ForwardBlackIcon";

import styles from "./styles";

export const TransactionViewer = ({
                                    dateObject,
                                    updateFilterState,
                                    filterType,
                                    filterTimestamps,
                                    filterValue,
                                    setFilterValue,
                                    isTransactions,
                                    children,
                                    onMonthChange,
                                    handleShowFilterModal,
                                    bottomSheetModalRef,
                                    handleCloseFilterModal, previousFilterType,previousFilterTimestamps,previousFilterState, setPreviousFilterState

                                  }) => {


  const changeMonth = monthOffset => {
    let currentlySelectedTimeStamp = filterTimestamps.current[0];

    if (monthOffset === -1) {
      filterTimestamps.current[0] = moment.unix(Number(currentlySelectedTimeStamp)).subtract(1, "M").utc().startOf("month").format("X");
      filterTimestamps.current[1] = moment.unix(Number(currentlySelectedTimeStamp)).subtract(1, "M").utc().endOf("month").format("X");
    } else {
      filterTimestamps.current[0] = moment.unix(Number(currentlySelectedTimeStamp)).add(1, "M").utc().startOf("month").format("X");
      filterTimestamps.current[1] = moment.unix(Number(currentlySelectedTimeStamp)).add(1, "M").utc().endOf("month").format("X");
    }
    let updatedFilterValue = formatMonthAndYear(filterTimestamps.current[1]);
    setFilterValue(updatedFilterValue);
    updateFilterState({
      ...dateObject,
      selectedMonth: updatedFilterValue,
      dateTo: null,
      dateFrom: null,
      isFocused: false,
      isSelectedAll: false,
      inputRangeValue: "",
    });
    onMonthChange();
  };
  const formatMonthAndYear = timestamp => {
    let name;
    const currentYear = new Date().getFullYear();

    if (moment.unix(Number(timestamp)).utc().format("YYYY") === currentYear.toString()) {
      name = moment.unix(Number(timestamp)).utc().format("MMMM");
    } else {
      name = moment.unix(Number(timestamp)).utc().format("MMMM YYYY");
    }
    return name;
  };

  return (
    <View style={styles.container}>
      <RecordViewer
        setChoose={setFilterValue}
        dateObject={dateObject}
        updateFilterState={updateFilterState}
        getRecodeValueHandler={(value, type, timestamps) => {

          setFilterValue(value);
          filterType.current = type;
          filterTimestamps.current = timestamps;
          onMonthChange();
        }}
        handleCloseModal={handleCloseFilterModal}
        bottomSheetModalRef={bottomSheetModalRef}
        onChange={() => {
        }
        }
        setPreviousFilterState={setPreviousFilterState}
        previousFilterState={previousFilterState}
        previousFilterType={previousFilterType}
        previousFilterTimestamps={previousFilterTimestamps}
        filterType={filterType}
        filterTimestamps={filterTimestamps}
      >
        <View style={[styles.calenderView, filterType.current !== 0 && { justifyContent: "center" }]}>
          {filterType.current === 0 && <TouchableOpacity
            style={styles.calenderButton}
            onPress={() => changeMonth(-1)}>
            <BackwardIcon />
          </TouchableOpacity>}
          <TouchableOpacity onPress={handleShowFilterModal} style={styles.calender}>
            <CalenderIcon />
            <Text style={styles.txtCalender}>{filterValue}</Text>
          </TouchableOpacity>
          {filterType.current === 0 && <TouchableOpacity
            style={styles.calenderButton}
            onPress={() => changeMonth(1)}>
            <ForwardBlackIcon />
          </TouchableOpacity>}
        </View>
      </RecordViewer>

      {isTransactions ? (
        <View style={styles.transactionsView}>{children}</View>
      ) : (
        <View style={styles.noTransactionsView}>
          <Text style={styles.txtNoTransactions}>No transactions</Text>
          <Text style={styles.txtNoTransactionsDesc}>
            You don’t have any transactions
            for {filterValue}.
            You can add one by scrolling down and tapping Add income or Add
            expense button at the top.
          </Text>
        </View>
      )}
    </View>
  );
};
