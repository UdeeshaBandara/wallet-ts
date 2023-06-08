import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function UserDeleteIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_9085)">
        <Path
          d="M17 24a1 1 0 01-1-1 7 7 0 10-14 0 1 1 0 11-2 0 9 9 0 0118 0 1 1 0 01-1 1zm6-11h-6a1 1 0 010-2h6a1 1 0 010 2zM9 12A6 6 0 119 0a6 6 0 010 12zM9 2a4 4 0 100 8 4 4 0 000-8z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_9085">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default UserDeleteIcon;
