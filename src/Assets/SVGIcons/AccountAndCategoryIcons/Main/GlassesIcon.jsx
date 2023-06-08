import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function GlassesIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8133)">
        <Path
          d="M20 0a4 4 0 00-4 4 1 1 0 002 0 2 2 0 114 0v11.026A4.948 4.948 0 0019 14a5 5 0 00-4.145 2.207 3.982 3.982 0 00-5.71 0A5 5 0 005 14a4.948 4.948 0 00-3 1.026V4a2 2 0 114 0 1 1 0 002 0 4 4 0 00-8 0v15a5 5 0 1010 0 2 2 0 014 0 5 5 0 1010 0V4a4 4 0 00-4-4zM5 22a3 3 0 110-6 3 3 0 010 6zm14 0a3 3 0 110-5.999A3 3 0 0119 22z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8133">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default GlassesIcon;
