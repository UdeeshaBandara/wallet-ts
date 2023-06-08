import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AppleIcon(props) {
  return (
    <Svg width={22} height={26} fill="none" {...props}>
      <Path
        d="M15.667 1.333c.423 2.543-2.231 4.468-3.715 5.333-.438.255-.932-.07-.856-.57.253-1.683 1.18-4.763 4.57-4.763z"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
      />
      <Path
        d="M7.5 6.583c1.047 0 1.972.233 2.677.49.91.326 1.904.326 2.814 0a7.852 7.852 0 012.676-.49c1.266 0 2.876.687 4.083 2.062-4.083 3.188-2.916 8.438.898 9.829-1.218 3.345-3.533 5.609-5.566 5.609-1.75 0-1.748-.817-3.498-.817-1.75 0-1.75.817-3.5.817-2.917 0-6.417-4.667-6.417-10.5 0-4.667 3.5-7 5.833-7z"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
      />
    </Svg>
  );
}

export default AppleIcon;
