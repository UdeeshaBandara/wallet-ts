import React, { useEffect, useState, useMemo } from 'react';
import { Text, View } from 'react-native';

import { getCurrencies } from '../../Util/Common';

import {
  BottomSheet,
  SaveCloseController,
  CurrencyList,
  GradientCard,
  SearchBar,
  onChange,
} from '../index';
import CloseIcon from '../../Assets/SVGIcons/CloseIcon';
import SaveIcon from '../../Assets/SVGIcons/SaveIcon';

import { useTheme } from '../../Theme';
import styles from './styles';

export const SelectCurrency = ({
  currencyModalRef,
  onEditCurrency,
  handleCloseModal,
  onChange,
  currencyObj,
  setCurrencyObj
}) => {
  const { Colors, Layout } = useTheme();
  const snapPoints = useMemo(() => ['25%', '92.5%'], []);

  const [filterCurrencies, setFilterCurrencies] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [isSelected, setIsSelected] = useState(true);
  const [selectedCurrencyObj, setSelectedCurrencyObj] = useState({
    currency: '',
    name: '',
  });

  useEffect(() => {
    const fetchCurrencies = async () => {
      const currencies = await getCurrencies();
      setFilterCurrencies(currencies);
      setMasterData(currencies);
    };
    fetchCurrencies();
  }, []);

  useEffect(() => {
    setSelectedCurrencyObj({
      currency: currencyObj?.currency || '',
      name: currencyObj?.name || '',
    });
  }, [currencyObj]);

  const onChangeCurrency = (code, name) => {
    setSelectedCurrencyObj({
      ...selectedCurrencyObj,
      name: name,
      currency: code,
    });
    setIsSelected(true);
  };

  const onFilterCurrency = text => {
    if (text) {
      const newData = Object.values(masterData).filter(function (item) {
        const itemData = item.code ? item.code.toUpperCase() : ''.toUpperCase();
        const currencyName = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1 || currencyName.indexOf(textData) > -1;
      });
      setFilterCurrencies(newData);
    } else {
      setFilterCurrencies(masterData);
    }
  };


  return (
    <BottomSheet
      bottomSheetModalRef={currencyModalRef}
      snapPoints={snapPoints}
      onChange={onChange}>
      <View style={styles.parentModalContainer}>
        <View style={styles.modalSubContainer}>
          <View style={[Layout.rowHCenter, Layout.justifyContentBetween]}>
            <Text style={styles.modalTitle}>Set Currency</Text>
            <Text style={styles.txtCrypto}>support crypto</Text>
          </View>
          <View style={styles.cardView}>
            <GradientCard
              currency={selectedCurrencyObj.currency}
              name={selectedCurrencyObj.name}
              bgColor={
                !isSelected
                  ? Colors.primaryGreenGradient
                  : Colors.primaryPurpleGradient3
              }
              status={!isSelected ? 'Pre - selected' : 'selected'}
            />
          </View>
          <View style={styles.searchView}>
            <View style={styles.searchContainer}>
              <SearchBar
                placeholder="Search ( USD,EUR,GBP,BTC,etc )"
                onChangeText={text => onFilterCurrency(text.trim())}
              />
              <CurrencyList
                currencies={filterCurrencies}
                currency={selectedCurrencyObj.currency}
                onChangeCurrency={(code, name) => onChangeCurrency(code, name)}
              />
            </View>
          </View>
        </View>
      </View>

      <SaveCloseController
        closeIcon={<CloseIcon />}
        submitButtonText={'Save'}
        submitButtonIcon={<SaveIcon isWhite={true} />}
        handleClose={() => handleCloseModal('currencyModal')}
        handleSubmit={() => onEditCurrency(selectedCurrencyObj.currency)}
      />
    </BottomSheet>
  );
};
