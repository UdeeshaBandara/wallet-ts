import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function PrintIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_270_13052)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M19 6V4a4 4 0 00-4-4H9a4 4 0 00-4 4v2a5.006 5.006 0 00-5 5v5a5.006 5.006 0 005 5 3 3 0 003 3h8a3 3 0 003-3 5.006 5.006 0 005-5v-5a5.006 5.006 0 00-5-5zM7 4a2 2 0 012-2h6a2 2 0 012 2v2H7V4zm10 17a1 1 0 01-1 1H8a1 1 0 01-1-1v-4a1 1 0 011-1h8a1 1 0 011 1v4zm5-5a3 3 0 01-3 3v-2a3 3 0 00-3-3H8a3 3 0 00-3 3v2a3 3 0 01-3-3v-5a3 3 0 013-3h14a3 3 0 013 3v5z" />
        <Path d="M18 10h-2a1 1 0 000 2h2a1 1 0 000-2z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_270_13052">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default PrintIcon;
