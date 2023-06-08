import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HeadphoneIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M21 12.424V11a9 9 0 10-18 0v1.424A5 5 0 005 22a2 2 0 002-2v-6a2 2 0 00-2-2v-1a7 7 0 1114 0v1a2 2 0 00-2 2v6a2 2 0 002 2 5 5 0 002-9.576zM5 20a3 3 0 010-6v6zm14 0v-6a3 3 0 010 6z"
        fill={props.isWhite ? "#ffffff" : "#374957"}
      />
    </Svg>
  );
}

export default HeadphoneIcon;
