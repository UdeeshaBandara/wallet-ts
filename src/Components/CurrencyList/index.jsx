import React from 'react';
import { SectionList, Text, TouchableOpacity, View } from 'react-native';

import Gradient from '../Gradient/index';

import { Colors } from '../../Theme/Variables';
import styles from './styles';

export const CurrencyList = props => {
  const sortData = Object.values(props?.currencies).sort(
    (a, b) => a.code > b.code,
  );

  const sections = sortData
    .filter(item => !item.isCrypto)
    .reduce((acc, item) => {
      const firstLetter = item.code.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = { title: firstLetter, data: [] };
      }
      acc[firstLetter].data.push(item);
      return acc;
    }, {});

  if (props?.currencies) {
    const cryptoData = Object.values(props.currencies).filter(
      item => item.isCrypto,
    ).sort((a, b) => a.code.localeCompare(b.code));

    if (cryptoData.length > 0) {
      sections['Crypto'] = { title: 'Crypto', data: cryptoData };
    }
  }

  const alphabetSections = Object.values(sections).filter(
    ({ title, data }) => !title.includes('Crypto') && data.length > 0,
  );

  const sectionsArray = alphabetSections.concat(sections.Crypto || []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.resultBtn}
      onPress={() => props.onChangeCurrency(item.code, item.name)}>
      <Gradient
        colors={
          props.currency === item.code
            ? ['#6F51FF', '#8B74FE']
            : [Colors.gray6, Colors.gray6]
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <View style={styles.result}>
          <Text
            style={[
              styles.currency,
              props.currency === item.code && {
                color: Colors.white,
              },
            ]}>
            {item.code}
          </Text>
          <Text
            style={[
              styles.name,
              props.currency === item.code && {
                color: Colors.white,
              },
            ]}>
            {item.name}
          </Text>
        </View>
      </Gradient>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.searchText}>{title}</Text>
  );

  return (
    <SectionList
      keyboardShouldPersistTaps="always"
      sections={sectionsArray}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
