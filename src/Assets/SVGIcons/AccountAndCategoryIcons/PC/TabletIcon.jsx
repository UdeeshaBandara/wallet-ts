import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function TabletIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_270_13088)">
        <Path
          d="M17 0H7a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h10a5.006 5.006 0 005-5V5a5.006 5.006 0 00-5-5zM7 2h10a3 3 0 013 3v12H4V5a3 3 0 013-3zm10 20H7a3 3 0 01-3-3h7v1a1 1 0 002 0v-1h7a3 3 0 01-3 3z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_270_13088">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}


export default TabletIcon;
