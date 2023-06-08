import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function FlipHorizontalIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8062)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M10.207.069H10.2a1 1 0 00-1.13.56L.375 19.759A3 3 0 003.106 24H10a1 1 0 001-1V1.047a1.01 1.01 0 00-.793-.978zM9 22H3.106a1 1 0 01-.91-1.413L9 5.617V22zM23.625 19.759L14.93.628A1.022 1.022 0 0013.778.07a1 1 0 00-.778.975V23a1 1 0 001 1h6.894a3 3 0 002.731-4.241z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8062">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default FlipHorizontalIcon;
