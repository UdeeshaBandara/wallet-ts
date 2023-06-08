import React, { createContext, FC, useContext, useRef, useState } from 'react';
import moment from 'moment';

const TabContext = createContext<any>({
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
  updateFilterState: () => {},
});

interface Props {
  children: any;
}

export const TabContextProvider: FC<Props> = ({ children }) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [dateObject, setDateObject] = useState<any>({
    dateType: '',
    dateTo: null,
    dateFrom: null,
    isFocused: false,
    isSelectedAll: false,
    inputRangeValue: '',
    selectedIndex: 0,
    selectedMonth: moment(new Date()).format('MMMM'),
  });
  const [filterValue, setFilterValue] = useState<string>(
    moment(new Date()).format('MMMM'),
  );
  const filterType = useRef<number>(0);
  const filterTimestamps = useRef([
    moment(new Date()).utc().startOf('month').format('X'),
    moment(new Date()).utc().endOf('month').format('X'),
  ]);

  const isNewAccountAdded = useRef<boolean>(false);
  const isNewFromAccountAdded = useRef<boolean>(false);

  const toggleOpened = () => {
    setOpened(!opened);
  };
  const updateFilterState = (data: any) => {
    setDateObject(data);
  };

  return (
    <TabContext.Provider
      value={{
        opened,
        toggleOpened,
        dateObject,
        updateFilterState,
        filterType,
        filterValue,
        setFilterValue,
        filterTimestamps,
        isNewAccountAdded,
        isNewFromAccountAdded,
      }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabMenu = () => useContext(TabContext);
