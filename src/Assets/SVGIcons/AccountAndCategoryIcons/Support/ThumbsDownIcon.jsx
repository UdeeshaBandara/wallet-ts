import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function ThumbsDownIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_270_12705)">
        <Path
          d="M.049 12.3l.705-5A5.024 5.024 0 015.7 3H19a5.006 5.006 0 015 5v5a5.006 5.006 0 01-5 5h-2.712l-1.914 3.878a3.037 3.037 0 01-5.721-1.837L8.989 18H5a5 5 0 01-4.951-5.7zM19 5h-2v11h2a3 3 0 003-3V8a3 3 0 00-3-3zM2.736 14.968A3 3 0 005 16h5.167a1 1 0 01.987 1.162l-.528 3.2a1.023 1.023 0 00.233.84 1.07 1.07 0 001.722-.212l2.189-4.432a1 1 0 01.23-.292V5H5.7a3.012 3.012 0 00-2.97 2.581l-.706 5a3 3 0 00.712 2.387z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_270_12705">
          <Path
            fill="#fff"
            transform="matrix(-1 0 0 1 24 0)"
            d="M0 0h24v24H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ThumbsDownIcon;
