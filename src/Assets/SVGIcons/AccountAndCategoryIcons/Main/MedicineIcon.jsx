import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function MedicineIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8398)">
        <Path
          d="M16 7l-.023-1.177A2.992 2.992 0 0015 0H9a2.993 2.993 0 00-1 5.816V7a5.006 5.006 0 00-5 5v7a5.006 5.006 0 005 5h8a5.006 5.006 0 005-5v-7a5.006 5.006 0 00-5-5zM9 2h6a1 1 0 110 2H9a1 1 0 110-2zm10 17a3 3 0 01-3 3H8a3 3 0 01-3-3v-7a3 3 0 013-3h1a1 1 0 001-1V6h3.973L14 8.014A1 1 0 0015 9h1a3 3 0 013 3v7zm-3-4a1 1 0 01-1 1h-2v2a1 1 0 01-2 0v-2H9a1 1 0 110-2h2v-2a1 1 0 012 0v2h2a1 1 0 011 1z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8398">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default MedicineIcon;
