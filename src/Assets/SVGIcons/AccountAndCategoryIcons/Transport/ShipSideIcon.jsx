import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function ShipSideIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8743)">
        <Path
          d="M19.989 12h-1.336a15.71 15.71 0 00-4.328-5.864A5.03 5.03 0 0011.146 5H8.818L8.11 2.315A3.108 3.108 0 102.1 3.9L2.394 5H1a1 1 0 100 2h10.146a3.029 3.029 0 011.913.687 13.411 13.411 0 013.386 4.318h-.82a3.037 3.037 0 00-1.692.5l-1.984 1.322A.993.993 0 0111.4 14H1a1 1 0 000 2h10.4a2.992 2.992 0 001.664-.5l1.983-1.322a.949.949 0 01.574-.168h4.369a2 2 0 011.7.935 1.95 1.95 0 01.123 1.912A9.03 9.03 0 0113.668 22H1a1 1 0 000 2h12.668a11.038 11.038 0 009.948-6.3 4 4 0 00-3.627-5.7zM4.037 3.388a1.107 1.107 0 012.14-.564L6.75 5H4.462l-.425-1.612zM0 10a1 1 0 011-1h9a1 1 0 110 2H1a1 1 0 01-1-1zm4 10a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8743">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ShipSideIcon;
