import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function UserRemoveIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_9088)">
        <Path
          d="M9 12A6 6 0 109 0a6 6 0 000 12zM9 2a4 4 0 110 8 4 4 0 010-8zm9 21a1 1 0 01-2 0 7 7 0 10-14 0 1 1 0 11-2 0 9 9 0 0118 0zm5.707-8.707a1 1 0 11-1.414 1.414L20.5 13.914l-1.793 1.793a1 1 0 01-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 011.414-1.414l1.793 1.793 1.793-1.793a1 1 0 011.414 1.414L21.914 12.5l1.793 1.793z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_9088">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default UserRemoveIcon;
