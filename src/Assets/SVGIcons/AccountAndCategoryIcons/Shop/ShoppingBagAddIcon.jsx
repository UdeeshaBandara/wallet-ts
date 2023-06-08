import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function ShoppingBagAddIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8752)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M23 18.999h-2v-2a1 1 0 00-2 0v2h-2a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 100-2z" />
        <Path d="M21 6h-3A6 6 0 106 6H3a3 3 0 00-3 3v10a5.006 5.006 0 005 5h9a1 1 0 000-2H5a3 3 0 01-3-3V9a1 1 0 011-1h3v2a1 1 0 102 0V8h8v2a1 1 0 002 0V8h3a1 1 0 011 1v5a1 1 0 002 0V9a3 3 0 00-3-3zM8 6a4 4 0 018 0H8z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8752">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ShoppingBagAddIcon;
