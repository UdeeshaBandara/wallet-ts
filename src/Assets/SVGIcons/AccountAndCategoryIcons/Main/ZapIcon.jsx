import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ZapIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        stroke={props.isWhite ? "#ffffff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ZapIcon;
