import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function ShipIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8746)">
        <Path
          d="M23 20a1 1 0 00-1 1c0 .344-.682 1-1.75 1a2.023 2.023 0 01-1.593-.689 1.93 1.93 0 01.128-.184 12.152 12.152 0 003.156-6.183A3 3 0 0020 11.584V9a4 4 0 00-4-4V4a4 4 0 10-8 0v1a4 4 0 00-4 4v2.571a3 3 0 00-1.972 3.373 12.188 12.188 0 003.187 6.183c.048.06.092.123.133.189A2.005 2.005 0 013.75 22C2.661 22 2 21.306 2 21a1 1 0 10-2 0c0 1.626 1.718 3 3.75 3a4.212 4.212 0 002.763-1 4.295 4.295 0 005.487.016A4.316 4.316 0 0017.5 23a4.208 4.208 0 002.746 1C22.282 24 24 22.626 24 21a1 1 0 00-1-1zM10 4a2 2 0 114 0v1h-4V4zM8 7h8a2 2 0 012 2v1.92l-5.052-1.658a3.026 3.026 0 00-1.891 0L6 10.913V9a2 2 0 012-2zm1.25 15a1.938 1.938 0 01-1.711-.849 5.114 5.114 0 00-.848-1.372A10.253 10.253 0 014 14.607a1.018 1.018 0 01.662-1.153L11 11.383V21c0 .344-.682 1-1.75 1zm5.5 0c-1.089 0-1.75-.694-1.75-1v-9.616l6.305 2.069a1.022 1.022 0 01.666 1.155 10.2 10.2 0 01-2.662 5.171c-.356.41-.642.876-.848 1.378A1.93 1.93 0 0114.75 22z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8746">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ShipIcon;