import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function RectangleHorizontalIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8629)">
        <Path
          d="M19 3H5a5 5 0 00-5 5v8a5 5 0 005 5h14a5 5 0 005-5V8a5 5 0 00-5-5zm3 13a3 3 0 01-3 3H5a3 3 0 01-3-3V8a3 3 0 013-3h14a3 3 0 013 3v8z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8629">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default RectangleHorizontalIcon;
