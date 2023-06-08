import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FramerIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}


export default FramerIcon;
