import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PythonIcon(props) {
  return (
    <Svg width={28} height={28} fill="none" {...props}>
      <Path
        d="M14 10.5H5.833A2.334 2.334 0 003.5 12.834V17.5a2.333 2.333 0 002.333 2.334h3.5M14 17.5h8.167a2.333 2.333 0 002.333-2.333V10.5a2.333 2.333 0 00-2.333-2.333h-3.5"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.333 10.5V5.833A2.333 2.333 0 0111.666 3.5h4.667a2.333 2.333 0 012.333 2.333v5.834A2.333 2.333 0 0116.333 14h-4.667a2.333 2.333 0 00-2.333 2.333v5.834a2.333 2.333 0 002.333 2.333h4.667a2.333 2.333 0 002.333-2.333V17.5M12.833 7v.012M15.166 21v.012"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PythonIcon;
