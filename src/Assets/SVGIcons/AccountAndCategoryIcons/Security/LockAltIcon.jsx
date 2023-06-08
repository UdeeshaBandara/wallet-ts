import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function LockAltIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8343)">
        <Path
          d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 22a10 10 0 1110-10 10.011 10.011 0 01-10 10zm0-15a2.993 2.993 0 00-1 5.816V16a1 1 0 002 0v-3.184A2.992 2.992 0 0012 7zm0 4a1 1 0 110-2 1 1 0 010 2z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8343">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default LockAltIcon;
