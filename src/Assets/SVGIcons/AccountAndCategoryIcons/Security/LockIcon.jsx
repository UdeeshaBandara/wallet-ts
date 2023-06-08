import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function LockIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8346)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M19 8.424V7A7 7 0 105 7v1.424A5 5 0 002 13v6a5.006 5.006 0 005 5h10a5.006 5.006 0 005-5v-6a5 5 0 00-3-4.576zM7 7a5 5 0 1110 0v1H7V7zm13 12a3 3 0 01-3 3H7a3 3 0 01-3-3v-6a3 3 0 013-3h10a3 3 0 013 3v6z" />
        <Path d="M12 14a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8346">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default LockIcon;
