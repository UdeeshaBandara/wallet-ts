import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function CursorTextAltIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_7876)">
        <Path
          d="M22 17.351V6.65A3.492 3.492 0 1017.351 2H6.65A3.492 3.492 0 102 6.65v10.7A3.492 3.492 0 106.65 22h10.7A3.492 3.492 0 1022 17.351zm-4.949 2.65H6.95A3.485 3.485 0 004 17.05V6.95A3.485 3.485 0 006.95 4h10.1A3.485 3.485 0 0020 6.95v10.1A3.484 3.484 0 0017.051 20zm3.45-18a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-17 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 20a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm17 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM13 9v3h1a1 1 0 010 2h-1v1a1 1 0 001 1 1 1 0 010 2 2.98 2.98 0 01-2-.78 2.98 2.98 0 01-2 .78 1 1 0 110-2 1 1 0 001-1v-1h-1a1 1 0 010-2h1V9a1 1 0 00-1-1 1 1 0 010-2c.74.002 1.453.28 2 .78.546-.5 1.259-.778 2-.78a1 1 0 110 2 1 1 0 00-1 1z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_7876">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CursorTextAltIcon;
