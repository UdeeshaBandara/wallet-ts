import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SplitGroupIcon = (props) =>{
  return (
    <Svg width={20} height={20} fill="none" {...props}>
      <Path
        d="M1 4.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zM12 4.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zM12 15.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zM1 15.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0z"
        stroke="#181818"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SplitGroupIcon

