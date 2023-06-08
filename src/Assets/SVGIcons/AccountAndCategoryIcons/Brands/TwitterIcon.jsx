import * as React from "react";
import Svg, { Path } from "react-native-svg";

function TwitterIcon(props) {
  return (
    <Svg width={24} height={25} fill="none" {...props}>
      <Path
        d="M23 3.406a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.279-.028-.557-.08-.83A7.72 7.72 0 0023 3.406z"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}


export default TwitterIcon;
