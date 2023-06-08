import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function ClockIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_7729)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 22a10 10 0 1110-10 10.011 10.011 0 01-10 10z" />
        <Path d="M12 6a1 1 0 00-1 1v4.325l-3.372 2.112a1.002 1.002 0 101.062 1.7l3.84-2.4a1 1 0 00.47-.858V7a1 1 0 00-1-1z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_7729">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ClockIcon;
