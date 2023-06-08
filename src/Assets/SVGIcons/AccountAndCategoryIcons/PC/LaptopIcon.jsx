import * as React from "react";
import Svg, { Path } from "react-native-svg";

function LaptopIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M22 15.184V8a5.006 5.006 0 00-5-5H7a5.006 5.006 0 00-5 5v7.184A2.993 2.993 0 003 21h18a2.993 2.993 0 001-5.816zM7 5h10a3 3 0 013 3v7h-4.151a2.001 2.001 0 00-1.528.708l-.247.292h-4.15l-.245-.292A2 2 0 008.15 15H4V8a3 3 0 013-3zm14 14H3a1 1 0 010-2h5.152l.246.292A2 2 0 009.925 18h4.149a2.001 2.001 0 001.528-.708l.247-.292h5.15a1 1 0 010 2z"
        fill={props.isWhite ? "#ffffff" : "#374957"}
      />
    </Svg>
  );
}

export default LaptopIcon;
