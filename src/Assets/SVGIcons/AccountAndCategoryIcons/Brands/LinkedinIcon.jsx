import * as React from "react";
import Svg, { Path } from "react-native-svg";

function LinkedinIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM6 9H2v12h4V9zM4 6a2 2 0 100-4 2 2 0 000 4z"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default LinkedinIcon;