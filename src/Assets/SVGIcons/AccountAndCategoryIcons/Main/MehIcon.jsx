import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function MehIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8404)">
        <Path
          d="M12 24a12 12 0 1112-12 12.013 12.013 0 01-12 12zm0-22a10 10 0 1010 10A10.011 10.011 0 0012 2zm5 14a1 1 0 00-1-1H8a1 1 0 000 2h8a1 1 0 001-1zM6 10c0 1 .895 1 2 1s2 0 2-1a2 2 0 00-4 0zm8 0c0 1 .895 1 2 1s2 0 2-1a2 2 0 10-4 0z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8404">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default MehIcon;
