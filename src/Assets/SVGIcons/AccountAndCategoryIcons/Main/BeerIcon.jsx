import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function BeerIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_324_9209)">
        <Path
          d="M19.5 9H19V7a1 1 0 00-1-1 3.9 3.9 0 00-2.016-3.485 4.093 4.093 0 00-2.359-.5.593.593 0 01-.54-.223 4.509 4.509 0 00-7.332.229A3.993 3.993 0 002 6a1 1 0 00-1 1v12a5.006 5.006 0 005 5h8a5.006 5.006 0 005-5h.5a3.5 3.5 0 003.5-3.5v-3A3.5 3.5 0 0019.5 9zM6 4a.963.963 0 01.171.02 1 1 0 001.068-.566A2.5 2.5 0 0111.486 3a2.576 2.576 0 002.332 1.012c.427-.034.855.06 1.228.27A1.937 1.937 0 0116 6h-4a3 3 0 00-3 3v3a1 1 0 01-2 0V9a3 3 0 00-3-3 2 2 0 012-2zm11 15a3 3 0 01-3 3H6a3 3 0 01-3-3V8h1a1 1 0 011 1v3a3 3 0 006 0V9a1 1 0 011-1h5v11zm4-3.5a1.5 1.5 0 01-1.5 1.5H19v-6h.5a1.5 1.5 0 011.5 1.5v3z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_324_9209">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default BeerIcon;
