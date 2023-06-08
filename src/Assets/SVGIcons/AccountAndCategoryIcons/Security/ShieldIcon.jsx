import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function ShieldIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8740)">
        <Path
          d="M18.581 2.14L12.316.051a1 1 0 00-.632 0l-6.266 2.09A4.993 4.993 0 002 6.882V12c0 7.563 9.2 11.74 9.594 11.914a1 1 0 00.812 0C12.8 23.74 22 19.564 22 12V6.883a4.993 4.993 0 00-3.419-4.743zM20 12c0 5.455-6.319 9.033-8 9.89-1.683-.854-8-4.42-8-9.89V6.883a3 3 0 012.051-2.846L12 2.054l5.948 1.983A3 3 0 0120 6.883V12z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8740">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}


export default ShieldIcon;
