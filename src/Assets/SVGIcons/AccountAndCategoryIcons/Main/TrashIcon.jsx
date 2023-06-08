import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function TrashIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_9026)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M21 4h-3.1A5.01 5.01 0 0013 0h-2a5.009 5.009 0 00-4.9 4H3a1 1 0 000 2h1v13a5.006 5.006 0 005 5h6a5.006 5.006 0 005-5V6h1a1 1 0 100-2zM11 2h2a3.006 3.006 0 012.829 2H8.171A3.006 3.006 0 0111 2zm7 17a3 3 0 01-3 3H9a3 3 0 01-3-3V6h12v13z" />
        <Path d="M10 17.999a1 1 0 001-1v-6a1 1 0 00-2 0v6a1 1 0 001 1zM14 17.999a1 1 0 001-1v-6a1 1 0 10-2 0v6a1 1 0 001 1z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_9026">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default TrashIcon;
