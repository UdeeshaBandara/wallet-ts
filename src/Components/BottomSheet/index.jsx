import React, { useMemo } from 'react';
import { View } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import styles from './styles';

const CustomBackdrop = ({ animatedIndex, style }) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 1],
      [0, 1],
      Extrapolate.CLAMP,
    ),
  }));

  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: 'background: rgba(251, 249, 255, 0.9)',
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle],
  );

  return <Animated.View style={containerStyle} />;
};

export const BottomSheet = ({
  bottomSheetModalRef,
  snapPoints,
  onChange,
  children,
}) => {
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
      enableTouchOutsideToClose={true}
      enableHandlePanningGesture={false}
      enableContentPanningGesture={false}
      onChange={onChange}
      keyboardBlurBehavior="restore"
      backdropComponent={CustomBackdrop}
      style={styles.bottomSheetHeader}
      handleIndicatorStyle={{ display: 'none' }}>
      <View style={styles.contentContainer}>{children}</View>
    </BottomSheetModal>
  );
};
