import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function TaxiIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8910)">
        <Path
          d="M23 11a1 1 0 100-2h-1.4l-.77-2.481a4.964 4.964 0 00-4.13-3.467A4.981 4.981 0 0012.117 0h-.234A4.982 4.982 0 007.3 3.052a4.964 4.964 0 00-4.128 3.466L2.4 9H1a1 1 0 000 2h.781l-.715 2.3A3.958 3.958 0 002 19.444V21a3 3 0 006 0v-1h8v1a3 3 0 006 0v-1.556a3.957 3.957 0 00.934-6.142L22.22 11H23zM11.883 2h.234a2.991 2.991 0 012.226 1H9.657a2.988 2.988 0 012.226-1zm-6.8 5.11A2.986 2.986 0 017.947 5h8.106a2.986 2.986 0 012.865 2.111l1.532 4.934A3.945 3.945 0 0020 12H4c-.15.006-.3.021-.45.045L5.083 7.11zM6 21a1 1 0 11-2 0v-1h2v1zm14 0a1 1 0 11-2 0v-1h2v1zm0-3H4a2 2 0 110-4v1a1 1 0 102 0v-1h12v1a1 1 0 002 0v-1a2 2 0 110 4z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8910">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}


export default TaxiIcon;
