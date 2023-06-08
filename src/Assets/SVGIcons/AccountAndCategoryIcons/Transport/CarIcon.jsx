import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function CarIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_7644)">
        <Path
          d="M20.9 4.291A5.01 5.01 0 0016.2 1H7.8a5.011 5.011 0 00-4.7 3.291L.4 11.718A6.664 6.664 0 000 14v1a4.979 4.979 0 002 3.978V21a3 3 0 006 0v-1h8v1a3 3 0 006 0v-2-.022A4.979 4.979 0 0024 15v-1a6.655 6.655 0 00-.4-2.281l-2.7-7.428zm-15.918.684A3.009 3.009 0 017.8 3h8.4a3.01 3.01 0 012.82 1.975L21.208 11H2.791l2.191-6.025zM6 21a1 1 0 11-2 0v-1.1c.33.067.664.1 1 .1h1v1zm14 0a1 1 0 01-2 0v-1h1c.336 0 .67-.033 1-.1V21zm2-6a3 3 0 01-3 3H5a3 3 0 01-3-3v-1c.004-.337.045-.672.121-1H4v1a1 1 0 102 0v-1h12v1a1 1 0 002 0v-1h1.879c.076.328.117.663.121 1v1z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_7644">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}


export default CarIcon;
