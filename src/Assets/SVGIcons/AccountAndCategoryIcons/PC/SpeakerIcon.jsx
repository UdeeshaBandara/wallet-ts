import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SpeakerIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_270_13055)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M16 0H8a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h8a5.006 5.006 0 005-5V5a5.006 5.006 0 00-5-5zm3 19a3 3 0 01-3 3H8a3 3 0 01-3-3V5a3 3 0 013-3h8a3 3 0 013 3v14z" />
        <Path d="M12 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 9.999a5 5 0 105 5 5.006 5.006 0 00-5-5zm0 8A3 3 0 1112 12a3 3 0 010 5.999z" />
        <Path d="M12 16.001a1 1 0 100-2 1 1 0 000 2z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_270_13055">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SpeakerIcon;
