import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function ThumbsUpIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8940)">
        <Path
          d="M22.773 7.721A4.994 4.994 0 0019 6.001h-3.989l.336-2.042a3.037 3.037 0 00-5.721-1.837L7.712 6H5a5.006 5.006 0 00-5 5v5a5.006 5.006 0 005 5h13.3a5.024 5.024 0 004.951-4.3l.705-5a5 5 0 00-1.183-3.979zM2 16.001v-5a3 3 0 013-3h2v11H5a3 3 0 01-3-3zm19.971-4.582l-.706 5A3.012 3.012 0 0118.3 19H9V7.734a1 1 0 00.23-.292l2.189-4.435a1.07 1.07 0 011.722-.207 1.023 1.023 0 01.233.84l-.528 3.2A1 1 0 0013.833 8H19a3 3 0 012.971 3.42z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8940">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ThumbsUpIcon;
