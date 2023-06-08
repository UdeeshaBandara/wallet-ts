import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function UserTimeIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_9091)">
        <Path
          d="M17 24a7 7 0 117-7 7.008 7.008 0 01-7 7zm0-12a5 5 0 100 10 5 5 0 000-10zm1.707 6.707a1 1 0 000-1.414L18 16.586V15a1 1 0 00-2 0v2a1 1 0 00.293.707l1 1a1 1 0 001.414 0zM2 23a8.3 8.3 0 016.221-8.024 1 1 0 10-.442-1.952A10.213 10.213 0 000 23a1 1 0 102 0zm6.474-12a5.5 5.5 0 115.5-5.5 5.506 5.506 0 01-5.5 5.5zm0-9a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_9091">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default UserTimeIcon;
