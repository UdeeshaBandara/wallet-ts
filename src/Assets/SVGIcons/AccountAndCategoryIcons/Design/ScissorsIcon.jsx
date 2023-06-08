import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function ScissorsIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8699)">
        <Path
          d="M19 14.001a4.929 4.929 0 00-2.352.615L13.3 10.601l7.467-8.96a1 1 0 00-1.536-1.28L12 9.04 4.768.361a1 1 0 00-1.536 1.28l7.468 8.96-3.348 4.015A4.94 4.94 0 005 14.001a5 5 0 105 5 4.947 4.947 0 00-1.112-3.1L12 12.163l3.111 3.738a4.955 4.955 0 00-1.111 3.1 4.999 4.999 0 105-5zm-14 8a3 3 0 110-6 3 3 0 010 6zm14 0a3 3 0 110-5.999 3 3 0 010 6z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8699">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ScissorsIcon;
