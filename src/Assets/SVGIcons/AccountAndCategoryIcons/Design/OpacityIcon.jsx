import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function OpacityIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8488)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M2.886 6.837a1 1 0 00.829-.436 10.015 10.015 0 012.809-2.77 1 1 0 10-1.1-1.672A12 12 0 002.06 5.276a1 1 0 00.826 1.56zM2 12c0-.662.065-1.321.193-1.97a1 1 0 10-1.96-.392c-.31 1.561-.31 3.168 0 4.728a1 1 0 001.18.781 1 1 0 00.783-1.177A10.1 10.1 0 012 12zM6.528 20.372a9.998 9.998 0 01-2.81-2.766 1 1 0 00-1.656 1.123 11.991 11.991 0 003.37 3.315 1 1 0 101.1-1.672h-.004zM12 0c-.729.001-1.455.068-2.171.2a1 1 0 10.36 1.968c.597-.11 1.203-.167 1.81-.168v20c-.607 0-1.213-.055-1.81-.164a1 1 0 00-.36 1.968A12.01 12.01 0 0023.999 12 12.014 12.014 0 0012 0z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8488">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default OpacityIcon;
