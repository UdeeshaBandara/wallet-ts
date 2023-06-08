import React, { useMemo, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { getIconForSort } from '../../Util/Common';
import { SORT_ORDER_INDEX, sortTypes } from "../../Util/Constants";
import { setItemToAsyncStorage } from "../../Util/Storage";

import { BottomSheet, SaveCloseController } from '../index';
import CorrectIcon from '../../Assets/SVGIcons/CorrectIcon';
import DotMenuIcon from '../../Assets/SVGIcons/DotMenuIcon';
import Gradient from '../Gradient/index';
import TickedIcon from '../../Assets/SVGIcons/TickedIcon';

import { Colors } from '../../Theme/Variables';
import styles from './styles';

const DragReorder = ({
  reorderModalRef,
  handleCloseModal,
  data = [],
  setAccounts,
  onChange,
  type = 'account',
  handleDragSort,
}) => {
  const snapPoints = useMemo(() => ['25%', '92.5%'], []);

  const [accountsOriginal, setAccountsOriginal] = useState(data);

  const renderItem = ({ item, drag, isActive }) => {
    return (
      <TouchableOpacity
        style={[
          styles.listItem,
          {
            backgroundColor: isActive ? Colors.gray006 : Colors.transparent,
          },
        ]}
        onLongPress={drag}
        disabled={isActive}
        activeOpacity={1}>
        <DotMenuIcon />
        <Text
          style={[
            styles.txtItem,
            {
              color:
                type === 'account'
                  ? item.color
                  : type === 'budget'
                  ? Colors.lightGreen
                  : item.color,
            },
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const onCancel = () => {
    setAccounts(data);
    handleCloseModal(data);
  };

  return (
    <BottomSheet
      snapPoints={snapPoints}
      bottomSheetModalRef={reorderModalRef}
      onChange={onChange}>
      <View style={styles.parentContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.heading}>Reorder</Text>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.listContainer}>
              <DraggableFlatList
                data={accountsOriginal}
                onDragEnd={({ data }) => setAccountsOriginal(data)}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                onDragBegin={() => {}}
                key={data}
              />
            </View>
          </GestureHandlerRootView>
        </View>
        <SaveCloseController
          handleClose={onCancel}
          submitButtonText="Reorder"
          handleSubmit={() => {
            handleDragSort(accountsOriginal);
            setAccounts(accountsOriginal);
            handleCloseModal();
          }}
          submitButtonIcon={<CorrectIcon />}
        />
      </View>
    </BottomSheet>
  );
};

const SortBy = ({ index,sortByModalRef, onChange, handleClose, handleSort, isSplit }) => {
  const snapPoints = useMemo(() => ['25%', '60%'], []);

  const [selectSortIndex, setSelectSortIndex] = useState(index);

  return (
    <BottomSheet
      snapPoints={snapPoints}
      bottomSheetModalRef={sortByModalRef}
      onChange={onChange}>
      <View style={styles.parentContainer}>
        <View style={styles.subContainerSort}>
          <Text style={styles.sortTitle}>Sort By</Text>
          <ScrollView contentOffset={{ x: 0, y: 50 * (selectSortIndex)}}>
            <View style={{ marginBottom: 20 }}>
              {sortTypes.filter(text=> isSplit ? text === 'Title' || text==='Date' || text === 'Balance Amount' : text !== 'Title' && text !=='Date' ).map((item, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={styles.cardBackground}
                  onPress={async() => {
                    await setItemToAsyncStorage(SORT_ORDER_INDEX, idx);
                    setSelectSortIndex(idx);
                  }}>
                  <Gradient
                    colors={
                      selectSortIndex === idx
                        ? Colors.primaryGreenGradient
                        : [Colors.gray004, Colors.gray004]
                    }
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradientBackground}>
                    <View style={styles.viewGroup}>
                      {getIconForSort(item, selectSortIndex)}
                      <Text
                        style={[
                          styles.sortType,
                          selectSortIndex === idx && {
                            color: Colors.primaryGray,
                          },
                        ]}>
                        {item}
                      </Text>
                    </View>
                    {selectSortIndex === idx && (
                      <View style={styles.viewGroup}>
                        <TickedIcon />
                        <Text style={styles.txtSelected}>Selected</Text>
                      </View>
                    )}
                  </Gradient>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottomView}>
          <SaveCloseController
            handleClose={handleClose}
            handleSubmit={() => handleSort(selectSortIndex)}
            submitButtonText={'Set'}
            submitButtonIcon={<CorrectIcon />}
          />
        </View>
      </View>
    </BottomSheet>
  );
};

export { DragReorder, SortBy };
