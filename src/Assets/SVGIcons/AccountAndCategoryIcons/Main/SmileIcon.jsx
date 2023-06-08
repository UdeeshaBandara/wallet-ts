import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SmileIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8821)">
        <Path
          d="M12 24a12 12 0 1112-12 12.013 12.013 0 01-12 12zm0-22a10 10 0 1010 10A10.011 10.011 0 0012 2zm5.666 13.746a1 1 0 10-1.33-1.494A7.508 7.508 0 0112 16a7.51 7.51 0 01-4.334-1.746 1 1 0 00-1.332 1.492A9.454 9.454 0 0012 18a9.454 9.454 0 005.666-2.254zM6 10c0 1 .895 1 2 1s2 0 2-1a2 2 0 00-4 0zm8 0c0 1 .895 1 2 1s2 0 2-1a2 2 0 10-4 0z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8821">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SmileIcon;
