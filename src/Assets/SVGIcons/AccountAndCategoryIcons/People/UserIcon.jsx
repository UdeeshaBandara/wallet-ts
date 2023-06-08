import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function UserIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_9094)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M12 12a6 6 0 100-12 6 6 0 000 12zm0-10a4 4 0 110 8 4 4 0 010-8zM12 14.001a9.01 9.01 0 00-9 9 1 1 0 002 0 7 7 0 0114 0 1 1 0 002 0 9.01 9.01 0 00-9-9z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_9094">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}


export default UserIcon;
