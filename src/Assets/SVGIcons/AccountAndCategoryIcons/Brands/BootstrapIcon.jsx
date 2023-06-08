import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function BootstrapIcon(props) {
  return (
    <Svg width={28} height={28} fill="none" {...props}>
      <G
        opacity={0.8}
        stroke={props.isWhite ? "#fff" : "#374957"} s
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M2.333 14a2.333 2.333 0 002.333-2.333V7A2.333 2.333 0 017 4.667h14A2.333 2.333 0 0123.333 7v4.667A2.333 2.333 0 0025.666 14M2.333 14a2.334 2.334 0 012.333 2.334V21A2.333 2.333 0 007 23.334h14A2.333 2.333 0 0023.333 21v-4.666A2.333 2.333 0 0125.666 14" />
        <Path d="M10.5 18.667V9.334h4.083a2.333 2.333 0 110 4.667H10.5h4.667a2.333 2.333 0 110 4.666H10.5z" />
      </G>
    </Svg>
  );
}


export default BootstrapIcon;
