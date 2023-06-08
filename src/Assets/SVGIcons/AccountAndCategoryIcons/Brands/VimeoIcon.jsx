import * as React from "react";
import Svg, { Path } from "react-native-svg";

function VimeoIcon(props) {
  return (
    <Svg width={29} height={23} fill="none" {...props}>
      <Path
        d="M14.5 21.77L27.188 1.833h-4.834L14.5 13.916 6.646 1.833H1.813L14.5 21.77z"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2.417}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.354 1.833H17.52l-3.02 4.23-3.021-4.23H6.646"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2.417}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}


export default VimeoIcon;
