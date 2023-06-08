import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function FollowingIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8081)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M9 12A6 6 0 109 0a6 6 0 000 12zM9 2a4 4 0 110 8 4 4 0 010-8zM9 14a9.011 9.011 0 00-9 9 1 1 0 002 0 7 7 0 0114 0 1 1 0 002 0 9.011 9.011 0 00-9-9zM22 7.875a2.107 2.107 0 00-2 2.2 2.107 2.107 0 00-2-2.2 2.107 2.107 0 00-2 2.2c0 1.73 2.256 3.757 3.38 4.659a.992.992 0 001.24 0c1.124-.9 3.38-2.929 3.38-4.659a2.107 2.107 0 00-2-2.2z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8081">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default FollowingIcon;
