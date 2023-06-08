import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PlaystoreIcon(props) {
  return (
    <Svg width={28} height={28} fill="none" {...props}>
      <Path
        d="M18.97 10.5L6.59 3.664a4.083 4.083 0 00-1.166-.444 1.435 1.435 0 00-.945.222M18.97 10.5L15.546 14m3.424-3.5l4.083 2.258c1.453.805 1.453 1.657 0 2.462l-4.083 2.257-3.424-3.5 3.424-3.5v.023zM15.546 14L4.48 3.442M15.546 14L4.49 24.541m11.055-10.54l3.424 3.5-12.355 6.836c-.677.373-1.587.694-2.124.204M4.48 3.442L15.563 14 4.491 24.541M4.48 3.442l-.03.006c-.373.327-.583.997-.583 1.972V22.58c0 .974.216 1.634.624 1.96"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PlaystoreIcon;
