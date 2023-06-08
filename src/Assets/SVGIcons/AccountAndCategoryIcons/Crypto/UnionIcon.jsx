import * as React from "react";
import Svg, { Path } from "react-native-svg";

function UnionIcon(props) {
  return (
    <Svg width={26} height={26} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 6.321l-4.734 4.734L5.512 8.3 13 .812l7.49 7.49-2.754 2.755L13 6.321zm-9.433 3.924L.812 13l2.755 2.754 2.754-2.755-2.754-2.754zM13 19.68l-4.734-4.734-2.758 2.75.004.005L13 25.188l7.49-7.49.002-.002-2.756-2.753L13 19.679zm9.433-9.432L19.68 13l2.754 2.754 2.755-2.754-2.755-2.754zm-6.639 2.75l.002.002-.002.002L13 15.796l-2.792-2.793-.004-.004.004-.004.49-.49.237-.237 2.065-2.065 2.795 2.795z"
        fill={props.isWhite ? "#fff" : "#374957"}
      />
    </Svg>
  );
}

export default UnionIcon;
