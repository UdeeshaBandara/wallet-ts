import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BikeIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M19.783 12.079a73.63 73.63 0 00-.555-1.873A23.047 23.047 0 0118 5a1 1 0 012 0 1 1 0 002 0 3 3 0 10-6 0c.024.764.131 1.522.319 2.263L11.519 11 5.97 7H9a1 1 0 100-2H5.97A1.969 1.969 0 004.81 8.559l5.07 3.712-1.437 1.119a4.954 4.954 0 101.15 1.638l7.289-5.669c.14.476.727 2.384.856 2.823a4.994 4.994 0 102.046-.1v-.003zM5 20a3 3 0 110-6 3 3 0 010 6zm14 0a3 3 0 110-6 3 3 0 010 6z"
        fill={props.isWhite ? "#ffffff" : "#374957"}
      />
    </Svg>
  );
}

export default BikeIcon;
