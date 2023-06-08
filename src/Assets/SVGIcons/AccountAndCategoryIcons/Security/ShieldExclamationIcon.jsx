import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function ShieldExclamationIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8730)">
        <Path
          d="M12 15a1 1 0 01-1-1V6a1 1 0 012 0v8a1 1 0 01-1 1zm.793 8.76C14.953 22.892 22 19.479 22 12.043V6.872a4.993 4.993 0 00-3.426-4.746L12.315.05a.985.985 0 00-.63 0L5.426 2.126A4.993 4.993 0 002 6.872v5.17c0 6.563 7.005 10.577 9.153 11.65.272.13.555.233.847.308.271-.056.537-.136.793-.24zm5.151-19.736A3 3 0 0120 6.872v5.17c0 6.184-6.087 9.112-7.953 9.862C10.159 20.96 4 17.459 4 12.043V6.872a3 3 0 012.056-2.848L12 2.054l5.944 1.97zM12 17a1 1 0 100 2 1 1 0 000-2z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8730">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}


export default ShieldExclamationIcon;
