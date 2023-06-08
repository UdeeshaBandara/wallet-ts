import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function BadgeIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_7512)">
        <Path
          d="M20 8a8 8 0 10-14 5.274V21.5a2.5 2.5 0 004.062 1.952l1.626-1.3a.5.5 0 01.624 0l1.626 1.3A2.5 2.5 0 0018 21.5v-8.226A7.957 7.957 0 0020 8zm-8-6a6 6 0 110 12 6 6 0 010-12zm3.717 19.948a.49.49 0 01-.529-.06l-1.626-1.3a2.49 2.49 0 00-3.124 0l-1.625 1.3A.5.5 0 018 21.5v-6.582a7.935 7.935 0 008 0V21.5a.487.487 0 01-.283.448z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_7512">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}


export default BadgeIcon;
