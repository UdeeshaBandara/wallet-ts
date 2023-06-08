import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AdobeXdIcon(props) {
  return (
    <Svg width={28} height={28} fill="none" {...props}>
      <Path
        d="M8.167 9.333l4.666 9.334m-4.666 0l4.666-9.334M24.5 8.167v11.666a4.667 4.667 0 01-4.667 4.667H8.167A4.667 4.667 0 013.5 19.833V8.167A4.667 4.667 0 018.167 3.5h11.666A4.667 4.667 0 0124.5 8.167z"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.834 14v3.967a.7.7 0 01-.7.7H17.5a2.333 2.333 0 010-4.667h2.334zm0 0v-3.5"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}


export default AdobeXdIcon;
