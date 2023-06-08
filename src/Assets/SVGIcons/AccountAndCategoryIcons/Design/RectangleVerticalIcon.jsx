import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function RectangleVerticalIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8626)">
        <Path
          d="M16 0H8a5 5 0 00-5 5v14a5 5 0 005 5h8a5 5 0 005-5V5a5 5 0 00-5-5zm3 19a3 3 0 01-3 3H8a3 3 0 01-3-3V5a3 3 0 013-3h8a3 3 0 013 3v14z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8626">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default RectangleVerticalIcon;
