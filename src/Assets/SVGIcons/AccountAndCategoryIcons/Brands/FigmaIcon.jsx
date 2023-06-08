import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FigmaIcon(props) {
  return (
    <Svg width={25} height={24} fill="none" {...props}>
      <Path
        d="M5.958 5.5a3.5 3.5 0 013.5-3.5h3.5v7h-3.5a3.5 3.5 0 01-3.5-3.5z"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.958 2h3.5a3.5 3.5 0 110 7h-3.5V2z"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.958 12.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM5.958 19.5a3.5 3.5 0 013.5-3.5h3.5v3.5a3.5 3.5 0 11-7 0z"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.958 12.5a3.5 3.5 0 013.5-3.5h3.5v7h-3.5a3.5 3.5 0 01-3.5-3.5z"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default FigmaIcon;
