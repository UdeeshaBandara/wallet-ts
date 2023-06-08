import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function UserAddIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_9080)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M23 11.001h-2v-2a1 1 0 00-2 0v2h-2a1 1 0 100 2h2v2a1 1 0 002 0v-2h2a1 1 0 000-2zM9 12A6 6 0 109 0a6 6 0 000 12zM9 2a4 4 0 110 8 4 4 0 010-8zM9 14.001a9.01 9.01 0 00-9 9 1 1 0 002 0 7 7 0 0114 0 1 1 0 002 0 9.01 9.01 0 00-9-9z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_9080">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default UserAddIcon;
