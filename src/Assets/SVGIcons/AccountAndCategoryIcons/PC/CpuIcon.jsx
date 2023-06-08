import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function CpuIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G
        clipPath="url(#prefix__clip0_270_13058)"
        stroke={props.isWhite ? "#ffffff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2z" />
        <Path d="M15 9H9v6h6V9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_270_13058">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CpuIcon;
