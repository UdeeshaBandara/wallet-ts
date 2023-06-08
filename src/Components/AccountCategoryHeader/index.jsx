import React from 'react';
import { View } from 'react-native';

import { getBorderColor } from "../../Util/Common";

import { OutlinedRoundButton, OutlinedChip, RoundIconButton } from '../index';
import CloseIcon from '../../Assets/SVGIcons/CloseIcon';
import EditIcon from '../../Assets/SVGIcons/EditIcon';
import TrashIcon from '../../Assets/SVGIcons/TrashIcon';

import { useTheme } from '../../Theme';

export const AccountCategoryHeader = ({
  onClose,
  onEdit,
  onDelete,
  title,
  colorCode,
}) => {
  const { Layout, Colors } = useTheme();

  return (
    <View style={[Layout.rowHCenter, Layout.justifyContentBetween]}>
      <OutlinedRoundButton
        icon={<CloseIcon isWhite={getBorderColor(colorCode).isWhite} />}
        bgColor={Colors.transparent}
        borderColor={getBorderColor(colorCode).color}
        onPress={onClose}
      />
      <View
        style={[
          Layout.rowHCenter,
          Layout.justifyContentBetween,
          { width: 170 },
        ]}>
        <OutlinedChip
          name="Edit"
          icon={<EditIcon isWhite={getBorderColor(colorCode).isWhite} />}
          bgColor={Colors.transparent}
          fontColor={getBorderColor(colorCode).color}
          onPress={onEdit}
          borderColor={getBorderColor(colorCode).color}
        />
        <RoundIconButton
          icon={<TrashIcon isFilled={false} />}
          bgColor={colorCode === Colors.primaryRed ? Colors.yellow : Colors.primaryRed}
          borderColor={Colors.white}
          isSmall={true}
          onPress={onDelete}
        />
      </View>
    </View>
  );
};
