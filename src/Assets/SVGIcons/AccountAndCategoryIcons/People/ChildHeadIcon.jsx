import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function ChildHeadIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_7715)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M24 11.5a3.5 3.5 0 00-2.15-3.226 10 10 0 00-19.7 0 3.5 3.5 0 001.12 6.719 10.608 10.608 0 002.07 2.955 8.908 8.908 0 00-2.271 4.927 1 1 0 001.983.25 6.924 6.924 0 011.815-3.872A8.949 8.949 0 0012 21a8.94 8.94 0 005.119-1.74 6.923 6.923 0 011.808 3.862 1 1 0 001.984-.247 8.9 8.9 0 00-2.261-4.919 10.625 10.625 0 002.082-2.965A3.5 3.5 0 0024 11.5zm-3.752 1.473a.993.993 0 00-1.117.651C18.215 16.223 15.13 19 12 19s-6.215-2.78-7.131-5.377a.994.994 0 00-1.117-.651A1.605 1.605 0 013.5 13a1.5 1.5 0 01-.27-2.973 1 1 0 00.816-.878A7.96 7.96 0 018.13 3a4.075 4.075 0 00-.022 1.942 4 4 0 007.688.318A.978.978 0 0014.85 4H14.7a.867.867 0 00-.806.631A2 2 0 1112 2.001a7.978 7.978 0 017.954 7.15 1 1 0 00.816.877 1.5 1.5 0 01-.27 2.973 1.614 1.614 0 01-.252-.027z" />
        <Path d="M9.5 13a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM14.5 13a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_7715">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ChildHeadIcon;
