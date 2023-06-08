import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function GiftIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_330_9288)">
        <Path
          d="M20 7h-1.738A5.138 5.138 0 0020 3a1 1 0 00-2 0c0 2.622-2.371 3.53-4.174 3.841A9.332 9.332 0 0015 3a3 3 0 00-6 0 9.332 9.332 0 001.174 3.841C8.371 6.53 6 5.622 6 3a1 1 0 00-2 0 5.137 5.137 0 001.738 4H4a4 4 0 00-4 4v1a2 2 0 002 2v5a5.006 5.006 0 005 5h10a5.006 5.006 0 005-5v-5a2 2 0 002-2v-1a4 4 0 00-4-4zm-8-5a1 1 0 011 1 7.71 7.71 0 01-1 3.013A7.71 7.71 0 0111 3a1 1 0 011-1zM2 11a2 2 0 012-2h7v3H2v-1zm2 8v-5h7v8H7a3 3 0 01-3-3zm16 0a3 3 0 01-3 3h-4v-8h7v5zm-7-7V9h7a2 2 0 012 2v1h-9z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_330_9288">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default GiftIcon;
