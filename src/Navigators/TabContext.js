import React, { createContext, useContext, useRef, useState } from "react";
import moment from 'moment';

const TabContext = createContext({
  opened: false,
  toggleOpened: () => {},
  dateObject: {
    dateType: '',
    dateTo: null,
    dateFrom: null,
    isFocused: false,
    isSelectedAll: false,
    inputRangeValue: '',
    selectedIndex: 0,
    selectedMonth: null,
  },
  updateFilterState: data => {},
});

export const TabContextProvider = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const [dateObject, setDateObject] = useState({
    dateType: '',
    dateTo: null,
    dateFrom: null,
    isFocused: false,
    isSelectedAll: false,
    inputRangeValue: '',
    selectedIndex: 0,
    selectedMonth: moment(new Date()).format('MMMM'),
  });
  const [filterValue, setFilterValue] = useState(
    moment(new Date()).format('MMMM'),
  );
  const filterType = useRef(0);
  const filterTimestamps = useRef([
    moment(new Date()).utc().startOf('month').format('X'),
    moment(new Date()).utc().endOf('month').format('X'),
  ]);

  const isNewAccountAdded = useRef(false);
  const isNewFromAccountAdded = useRef(false);

  const toggleOpened = () => {
    setOpened(!opened);
  };
  const updateFilterState = data => {
    setDateObject(data);
  };

  return (
    <TabContext.Provider
      value={{ opened, toggleOpened, dateObject, updateFilterState,filterType,filterValue,setFilterValue ,filterTimestamps,isNewAccountAdded,isNewFromAccountAdded}}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabMenu = () => useContext(TabContext);
