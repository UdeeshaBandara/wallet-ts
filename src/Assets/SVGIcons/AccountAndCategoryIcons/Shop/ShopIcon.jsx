import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function ShopIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8749)">
        <Path
          d="M24 10a.99.99 0 00-.024-.217l-1.3-5.868A4.968 4.968 0 0017.792 0H6.208a4.968 4.968 0 00-4.88 3.915L.024 9.783A.988.988 0 000 10v1c0 .974.355 1.914 1 2.643V19a5.006 5.006 0 005 5h12a5.006 5.006 0 005-5v-5.357c.645-.73 1-1.67 1-2.643v-1zm-22 .11l1.28-5.76A2.982 2.982 0 016.208 2H7v3a1 1 0 002 0V2h6v3a1 1 0 002 0V2h.792a2.982 2.982 0 012.928 2.35L22 10.11V11a2 2 0 01-2 2h-1a2 2 0 01-2-2 1 1 0 00-2 0 2 2 0 01-2 2h-2a2 2 0 01-2-2 1 1 0 10-2 0 2 2 0 01-2 2H4a2 2 0 01-2-2v-.89zM18 22H6a3 3 0 01-3-3v-4.127c.327.085.663.127 1 .127h1a3.99 3.99 0 003-1.357A3.99 3.99 0 0011 15h2a3.99 3.99 0 003-1.357A3.99 3.99 0 0019 15h1c.337 0 .673-.042 1-.127V19a3 3 0 01-3 3z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8749">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ShopIcon;
