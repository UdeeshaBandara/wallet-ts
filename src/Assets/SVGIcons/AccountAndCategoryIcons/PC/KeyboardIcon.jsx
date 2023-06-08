import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function KeyboardIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_270_13081)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M19 6h-6V3a1 1 0 00-2 0v3H5a5.006 5.006 0 00-5 5v4a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5v-4a5.006 5.006 0 00-5-5zm3 9a3 3 0 01-3 3H5a3 3 0 01-3-3v-4a3 3 0 013-3h14a3 3 0 013 3v4z" />
        <Path d="M15 14H9a1 1 0 000 2h6a1 1 0 100-2zM10 12h1a1 1 0 000-2h-1a1 1 0 000 2zM19 10h-4a1 1 0 000 2h4a1 1 0 000-2zM6 10H5a1 1 0 000 2h1a1 1 0 000-2zM5 16a1 1 0 100-2 1 1 0 000 2zM19 16a1 1 0 100-2 1 1 0 000 2z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_270_13081">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default KeyboardIcon;
