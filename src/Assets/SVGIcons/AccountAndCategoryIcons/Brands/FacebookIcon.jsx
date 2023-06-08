import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FacebookIcon(props) {
  return (
    <Svg width={26} height={26} fill="none" {...props}>
      <Path
        d="M19.5 2.167h-3.25a5.417 5.417 0 00-5.417 5.417v3.25h-3.25v4.333h3.25v8.667h4.333v-8.667h3.25l1.084-4.333h-4.334v-3.25A1.084 1.084 0 0116.25 6.5h3.25V2.167z"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}


export default FacebookIcon;
