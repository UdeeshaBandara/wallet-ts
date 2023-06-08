import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function ComputerIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_270_13046)">
        <Path
          d="M19 1H5a5.006 5.006 0 00-5 5v8a5.006 5.006 0 005 5h6v2H7a1 1 0 000 2h10a1 1 0 000-2h-4v-2h6a5.006 5.006 0 005-5V6a5.006 5.006 0 00-5-5zM5 3h14a3 3 0 013 3v7H2V6a3 3 0 013-3zm14 14H5a3 3 0 01-2.816-2h19.632A3 3 0 0119 17z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_270_13046">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ComputerIcon;
