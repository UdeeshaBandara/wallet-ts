import React from 'react';
import {
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import CloseIcon from '../../Assets/SVGIcons/CloseIcon';
import SearchIcon from '../../Assets/SVGIcons/SearchIcon';

import styles from './styles';

export const SearchBar = props => {
  return (
    <View style={[styles.inputContainer, { borderColor: props.outlinedColor }]}>
      <SearchIcon />
      {props.isTouchable ? (
        <TouchableWithoutFeedback
          style={styles.searchBarBtn}
          onPress={props.onPress}>
          <Text style={styles.searchBtnText} suppressHighlighting={true}>
            {props.placeholder}
          </Text>
        </TouchableWithoutFeedback>
      ) : (
        <TextInput
          placeholder={props.placeholder}
          style={styles.input}
          placeholderTextColor="#181818"
          onChangeText={text => props.onChangeText(text.trim())}
          {...props}
        />
      )}
      {props.canClear && (
        <TouchableOpacity style={styles.btnClose} onPress={props.onPressClear}>
          <CloseIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};
