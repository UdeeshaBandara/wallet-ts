import * as React from "react";
import Svg, { Path } from "react-native-svg";

function TwitchIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M11 11V7m5 4V7m5-5H3v16h5v4l4-4h5l4-4V2z"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}


export default TwitchIcon;
