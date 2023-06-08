import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function MouseIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_270_13075)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M13 3V1a1 1 0 00-2 0v2a7.008 7.008 0 00-7 7v6a8 8 0 0016 0v-6a7.008 7.008 0 00-7-7zm5 13a6 6 0 11-12 0v-6a5.006 5.006 0 015-5h2a5.006 5.006 0 015 5v6z" />
        <Path d="M12 7a1 1 0 00-1 1v2a1 1 0 002 0V8a1 1 0 00-1-1z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_270_13075">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default MouseIcon;
