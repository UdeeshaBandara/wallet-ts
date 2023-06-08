import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function PendriveIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_270_13072)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M19 9.026V4a4 4 0 00-4-4H9a4 4 0 00-4 4v5.026A4.977 4.977 0 003 13v2a9 9 0 0018 0v-2a4.977 4.977 0 00-2-3.974zM7 8V4a2 2 0 012-2h6a2 2 0 012 2v4H7zm12 7a7 7 0 11-14 0v-2a3 3 0 013-3h8a3 3 0 013 3v2z" />
        <Path d="M10 5.999a1 1 0 100-2 1 1 0 000 2zM14 5.999a1 1 0 100-2 1 1 0 000 2z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_270_13072">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default PendriveIcon;
