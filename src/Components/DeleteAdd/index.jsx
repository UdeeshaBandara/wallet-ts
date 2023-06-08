import React, { useState, useMemo } from 'react';
import { Text, View } from 'react-native';

import { deleteTypeConstants } from '../../Util/Constants';

import { BottomSheet, SaveCloseController } from '../index';
import CloseIcon from '../../Assets/SVGIcons/CloseIcon';
import TrashIcon from '../../Assets/SVGIcons/TrashIcon';

import { useTheme } from '../../Theme';
import styles from './styles';

export const DeleteAdd = ({
  deleteModalRef,
  handleCloseModal,
  onDelete,
  heading1,
  heading2,
  message,
  type,
  onChange,
  nextDefault = 1
}) => {
  const { Colors } = useTheme();
  const snapPoints = useMemo(() => ['25%', '40%'], []);

  const [next, setNext] = useState(nextDefault);

  const handleNext = () => {
    if (next === 1) {
      setNext(2);
    } else {
      onDelete();
    }
  };

  return (
    <BottomSheet
      bottomSheetModalRef={deleteModalRef}
      snapPoints={snapPoints}
      onChange={onChange}>
      <View style={styles.parentModalContainer}>
        {type === deleteTypeConstants.USER_DATA ? (
          next == 1 ? (
            <View style={[styles.modalSubContainer, { height: 150 }]}>
              <Text style={[styles.modalTitle, { color: Colors.primaryRed }]}>
                {heading1}
              </Text>
              <Text style={styles.txtWarning}>{message}</Text>
            </View>
          ) : (
            <View style={[styles.modalSubContainer, { height: 150 }]}>
              <Text style={[styles.modalTitle, { color: Colors.primaryRed }]}>
                {heading2}
              </Text>
              <Text style={styles.txtWarning}>
                FINAL WARNING! : This action will delete all data for your
                account
                <Text style={styles.boldText}> Permanently</Text> and you won’t
                be able to recover it.
              </Text>
            </View>
          )
        ) : (
          <View style={[styles.modalSubContainer, { height: 150 }]}>
            <Text style={[styles.modalTitle, { color: Colors.primaryRed }]}>
              {heading1}
            </Text>
            <Text style={styles.txtWarning}>{message}</Text>
          </View>
        )}

        <SaveCloseController
          closeIcon={<CloseIcon />}
          submitButtonText={'Delete'}
          submitButtonIcon={<TrashIcon isFilled={false} />}
          handleClose={() => {
            setNext(1), handleCloseModal('deleteModal');
          }}
          handleSubmit={handleNext}
        />
      </View>
    </BottomSheet>
  );
};
