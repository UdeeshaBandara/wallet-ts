import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';

import PlusIcon from '../../Assets/SVGIcons/PlusIcon';
import { SaveCloseController } from '../SaveCloseController';
import SaveIcon from '../../Assets/SVGIcons/SaveIcon';

import { Colors } from '../../Theme/Variables';
import styles from './styles';

export const DescriptionAdd = ({
  handleCloseModal,
  onDescriptionSubmit,
  placeholder = 'Enter any details here',
  heading = 'Description',
  descriptionProp = '',
  type,
  multiline,
}) => {
  const [description, setDescription] = useState(descriptionProp);

  return (
    <View style={styles.parentContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.accountText}>{heading}</Text>
        <BottomSheetTextInput
          placeholderTextColor={Colors.primaryBlack}
          placeholder={placeholder}
          onChangeText={value => setDescription(value)}
          value={description}
          multiline={multiline}
          style={styles.input}
          maxLength={ type === 'editName' ? 65 : undefined}
        />
      </View>
      <View style={styles.bottomView}>
        <SaveCloseController
          handleClose={handleCloseModal}
          handleSubmit={() => onDescriptionSubmit(description)}
          submitButtonText={type === 'editName' ? 'Save' : 'Add'}
          submitButtonIcon={
            type === 'editName' ? <SaveIcon isWhite={true} /> : <PlusIcon />
          }
        />
      </View>
    </View>
  );
};
