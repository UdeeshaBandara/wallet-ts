import React, { createElement, useState, useMemo } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { BottomSheet, SaveCloseController } from '../index';
import { AccountAndCategoryIcons } from '../../Assets/SVGIcons/AccountAndCategoryIcons/index';
import SaveIcon from '../../Assets/SVGIcons/SaveIcon';

import { Colors } from '../../Theme/Variables';
import styles from './styles';

export const AccountAndCategoryIconPicker = ({
  bottomSheetRef,
  colorCode,
  pickedIcon,
  closeBottomSheet,
  handleSubmit,
}) => {
  const snapPoints = useMemo(() => ['25%', '95%'], []);

  const loadAccountAndCategoryIcons = useMemo(() => {
    return AccountAndCategoryIcons;
  }, []);

  const [displayedItemCount, setDisplayedItemCount] = useState(1);
  const [selectedIcon, setSelectedIcon] = useState(pickedIcon);

  const keyExtractor = (_, index) => index.toString();

  const Header = ({ title }) => {
    return (
      <View>
        <View style={styles.separatorTextView}>
          <Text style={styles.separatorText}>{title}</Text>
        </View>
        <View style={styles.separator} />
      </View>
    );
  };

  const renderItem = ({ item }) => {
    const iconTitle = Object.keys(item)[0];
    const iconsList = item[iconTitle] || [];
    let props = { isWhite: null };

    if(colorCode === Colors.primaryYellow || colorCode === Colors.primaryLightBlue || colorCode === Colors.lightPink){
      props.isWhite = null
    } else{
      props.isWhite = true
    }

    return (
      <View style={styles.iconContainer}>
        <Header title={iconTitle} />
        <View style={styles.iconView}>
          {iconsList?.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={[
                styles.icon,
                item.name === selectedIcon && {
                  backgroundColor: colorCode,
                  borderWidth: 0,
                },
              ]}
              onPress={() => handleSelectIcon(item?.name)}>
              {createElement(
                item.component,
                item.name === selectedIcon ? props : null,
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const handleLoadMore = () => {
    setDisplayedItemCount(displayedItemCount + 1);
  };

  const handleSelectIcon = item => {
    setSelectedIcon(item);
  };

  return (
    <BottomSheet bottomSheetModalRef={bottomSheetRef} snapPoints={snapPoints}>
      <View style={styles.parentContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.heading}>Choose icon</Text>
          <FlatList
            data={loadAccountAndCategoryIcons.slice(0, displayedItemCount)}
            maxToRenderPerBatch={1}
            keyExtractor={keyExtractor}
            onEndReachedThreshold={0.1}
            onEndReached={handleLoadMore}
            renderItem={renderItem}
            extraData={selectedIcon}
          />
        </View>
        <View style={styles.bottomView}>
          <SaveCloseController
            handleClose={closeBottomSheet}
            submitButtonText={'Save'}
            submitButtonIcon={<SaveIcon isWhite={true} />}
            handleSubmit={() => handleSubmit(selectedIcon)}
          />
        </View>
      </View>
    </BottomSheet>
  );
};
