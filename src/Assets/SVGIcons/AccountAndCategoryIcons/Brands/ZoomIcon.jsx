import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ZoomIcon(props) {
  return (
    <Svg width={26} height={26} fill="none" {...props}>
      <Path
        d="M18.429 10.167v5.555L22.75 19.5v-13l-4.321 3.667zM4.21 6.5h10.92c1.59 0 3.286 1.303 3.286 3.037v8.879a1.073 1.073 0 01-1.057 1.083H6.123c-1.806 0-2.873-1.625-2.873-3.25l.01-8.667a.956.956 0 01.226-.769.911.911 0 01.726-.31L4.211 6.5z"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ZoomIcon;
