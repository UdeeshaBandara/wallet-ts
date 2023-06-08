import React from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export const CustomDatePicker = ({
  open,
  onSetSelectedDate,
  handleClose,
  date,
  mode='date',
  minimumDate = new Date(1970, 0, 1),
  maximumDate = new Date(2100, 11, 31),
}) => {
  return (
    <DateTimePickerModal
      isVisible={open}
      locale="en_GB"
      mode={mode}
      is24Hour={true}
      date={date}
      onConfirm={date => {
        onSetSelectedDate(date);
      }}
      onCancel={() => {
        handleClose();
      }}
      minimumDate={minimumDate}
      maximumDate={maximumDate}
    />
  );
};
