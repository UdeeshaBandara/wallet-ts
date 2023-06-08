import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function ReceiptIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8616)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M16 0H8a5.006 5.006 0 00-5 5v18a1 1 0 001.564.825l2.106-1.439 2.106 1.439a1 1 0 001.13 0l2.1-1.439 2.1 1.439a1 1 0 001.131 0l2.1-1.438 2.1 1.437A1 1 0 0021 23V5a5.006 5.006 0 00-5-5zm3 21.1l-1.1-.752a1 1 0 00-1.132 0l-2.1 1.439-2.1-1.439a1 1 0 00-1.131 0l-2.1 1.439-2.1-1.439a1 1 0 00-1.129 0L5 21.1V5a3 3 0 013-3h8a3 3 0 013 3v16.1z" />
        <Path d="M16 8.001H8a1 1 0 100 2h8a1 1 0 000-2zM14 12H8a1 1 0 100 2h6a1 1 0 100-2z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8616">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ReceiptIcon;
