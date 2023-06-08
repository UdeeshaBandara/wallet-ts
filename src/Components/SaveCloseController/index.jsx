import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import CalculatorIcon from '../../Assets/SVGIcons/CalculatorIcon';
import CloseIcon from '../../Assets/SVGIcons/CloseIcon';
import CorrectIcon from '../../Assets/SVGIcons/CorrectIcon';
import { GradientRoundIcon } from '../index';
import { ShortSubmitButton } from '../Buttons';
import { BackButton } from '../index';

import { Colors } from '../../Theme/Variables';
import styles from './styles';

export const SaveCloseController = ({
  closeIcon = <CloseIcon />,
  handleClose,
  handleSubmit,
  handleExtendedCalculator,
  submitButtonText,
  submitButtonIcon,
  disabled,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomView}>
          {submitButtonText === 'Add category' ||
          submitButtonText === 'Add budget' || submitButtonText === 'Create Group' ? (
            <BackButton isSmall={false} onPress={handleClose} />
          ) : (
            <TouchableOpacity style={styles.btnClose} onPress={handleClose}>
              {closeIcon}
            </TouchableOpacity>
          )}

          {submitButtonText === 'Enter' ? (
            <View style={styles.containerRight}>
              <TouchableOpacity
                style={[styles.btnClose, { marginRight: 10 }]}
                onPress={handleExtendedCalculator}>
                <CalculatorIcon />
              </TouchableOpacity>
              <ShortSubmitButton
                icon={<CorrectIcon />}
                title="  Enter"
                onPress={handleSubmit}
              />
            </View>
          ) : submitButtonText === 'Skip' ? (
            <ShortSubmitButton
              icon={submitButtonIcon}
              title={'  ' + submitButtonText}
              onPress={handleSubmit}
              colors={[Colors.white, Colors.white]}
            />
          ) : submitButtonText === 'Delete' ? (
            <ShortSubmitButton
              icon={submitButtonIcon}
              title={'   ' + submitButtonText}
              onPress={handleSubmit}
              colors={[Colors.primaryRed, Colors.primaryRed]}
            />
          ) : submitButtonText === 'Reorder' ? (
            <GradientRoundIcon
              bgColor={['#17CEA0', '#44F0C6']}
              icon={submitButtonIcon}
              onPress={handleSubmit}
            />
          ) : submitButtonText === 'Add category' ||
            submitButtonText === 'Add budget' ? (
            <ShortSubmitButton
              icon={submitButtonIcon}
              title={'  ' + submitButtonText}
              onPress={handleSubmit}
              colors={Colors.primaryPurpleGradient3}
            />
          ) : (
            <ShortSubmitButton
              icon={submitButtonIcon}
              title={'    ' + submitButtonText}
              onPress={handleSubmit}
              disabled={disabled}
            />
          )}
        </View>
        <View style={styles.positionedContainer}>
          <View style={styles.divider} />
        </View>
      </View>
    </View>
  );
};
