import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function RoomServiceIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8675)">
        <Path
          d="M23 19v-2A11.01 11.01 0 0013 6.05V4.722a2 2 0 10-2 0V6.05A11.01 11.01 0 001 17v2a1 1 0 100 2h22a1 1 0 000-2zM3 17c.473-11.935 17.531-11.926 18 0v2H3v-2z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8675">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default RoomServiceIcon;
