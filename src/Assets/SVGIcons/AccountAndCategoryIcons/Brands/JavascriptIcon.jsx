import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function JavascriptIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_386_9596)">
        <Path
          d="M20 12.8v-.267a2.133 2.133 0 00-2.133-2.133H16a2.4 2.4 0 000 4.8h1.6a2.4 2.4 0 010 4.8H16a2.4 2.4 0 01-2.4-2.4m-3.2-8v8a2.4 2.4 0 01-4.8 0M.8.8h22.4v22.4H.8V.8z"
          stroke={props.isWhite ? "#fff" : "#374957"}
          strokeWidth={2}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_386_9596">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default JavascriptIcon;
