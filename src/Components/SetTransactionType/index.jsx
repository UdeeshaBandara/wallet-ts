import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { getIconForTransfer } from '../../Util/Common';
import Gradient from '../Gradient/index';
import { transferTypes } from '../../Util/Constants';

import CorrectIcon from '../../Assets/SVGIcons/CorrectIcon';
import { SaveCloseController } from '../SaveCloseController';
import TickedIcon from '../../Assets/SVGIcons/TickedIcon';

import { Colors } from '../../Theme/Variables';
import styles from './styles';

export const SetTransactionType = ({
  minimizeTransferModal,
  onTransferChange,
  initialType = 0
}) => {
  const [selectedTransferTypeIndex, setSelectedTransferTypeIndex] = useState(initialType);
  return (
    <View style={styles.parentContainer}>
      <View style={styles.subContainer}>
        <KeyboardAwareScrollView enableOnAndroid={true} enableAutomaticScroll>
          <>
            <Text style={styles.accountText}>Set transaction type</Text>
            <ScrollView contentOffset={{ x: 146 * 11, y: 0 }}>
              <>
                {transferTypes?.map((item, idx) => (
                  <TouchableOpacity
                    style={styles.cardBackground}
                    key={idx}
                    onPress={() => setSelectedTransferTypeIndex(idx)}>
                    <Gradient
                      colors={
                        selectedTransferTypeIndex !== idx
                          ? [Colors.gray004, Colors.gray004]
                          : ['#1C1B20', '#A2A1A7']
                      }
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.gradientBackground}>
                      <View style={styles.viewGroup}>
                        {getIconForTransfer(item, selectedTransferTypeIndex)}
                        <Text
                          style={[
                            styles.descriptionText,
                            selectedTransferTypeIndex === idx && {
                              color: Colors.primaryGray,
                            },
                          ]}>
                          {item}
                        </Text>
                      </View>
                      {selectedTransferTypeIndex === idx && (
                        <View style={styles.viewGroup}>
                          <TickedIcon />
                          <Text
                            style={[
                              styles.descriptionText,
                              selectedTransferTypeIndex === idx && {
                                color: Colors.primaryGray,
                              },
                            ]}>
                            Selected
                          </Text>
                        </View>
                      )}
                    </Gradient>
                  </TouchableOpacity>
                ))}
              </>
            </ScrollView>
          </>
        </KeyboardAwareScrollView>
      </View>
      <SaveCloseController
        handleClose={minimizeTransferModal}
        handleSubmit={()=>onTransferChange(selectedTransferTypeIndex)}
        submitButtonText={'Set'}
        submitButtonIcon={<CorrectIcon />}
      />
    </View>
  );
};
