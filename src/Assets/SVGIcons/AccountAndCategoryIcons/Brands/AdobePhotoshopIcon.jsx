import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AdobePhotoshopIcon(props) {
  return (
    <Svg width={26} height={26} fill="none" {...props}>
      <Path
        d="M21.125 3.25H4.875A1.625 1.625 0 003.25 4.875v16.25a1.625 1.625 0 001.625 1.625h16.25a1.625 1.625 0 001.625-1.625V4.875a1.625 1.625 0 00-1.625-1.625z"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
      />
      <Path
        d="M7.583 8.125v9.75M8.666 13.542c1.625 0 3.792-.434 3.792-2.709s-2.167-2.708-3.792-2.708H7.583v5.417h1.083zM18.417 11.388c-.542 0-3.25-.27-3.25 1.618 0 1.889 3.25 1.349 3.25 3.237 0 1.888-3.25 1.618-3.25 1.618"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}


export default AdobePhotoshopIcon;
