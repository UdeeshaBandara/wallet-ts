import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function KeyIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8269)">
        <Path
          d="M7.505 24A7.5 7.5 0 015.469 9.283a7.368 7.368 0 013.881-.048l7.908-7.906A4.5 4.5 0 0120.464 0 3.539 3.539 0 0124 3.536a4.508 4.508 0 01-1.328 3.207L22 7.415A2.014 2.014 0 0120.586 8H19v1a2 2 0 01-2 2h-1v1.586A1.986 1.986 0 0115.414 14l-.65.65a7.335 7.335 0 01-.047 3.88 7.529 7.529 0 01-6.428 5.429c-.26.027-.522.04-.784.041zm0-13a5.5 5.5 0 105.289 6.99 5.4 5.4 0 00-.1-3.3 1 1 0 01.238-1.035L14 12.586V11a2 2 0 012-2h1V8a2 2 0 012-2h1.586l.672-.672A2.52 2.52 0 0022 3.536 1.537 1.537 0 0020.465 2a2.52 2.52 0 00-1.793.743l-8.331 8.33a1 1 0 01-1.036.237A5.461 5.461 0 007.5 11h.005zM5 18a1 1 0 102 0 1 1 0 00-2 0z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8269">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default KeyIcon;
