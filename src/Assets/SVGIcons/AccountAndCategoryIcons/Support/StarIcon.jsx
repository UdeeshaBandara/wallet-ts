import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function StarIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8860)">
        <Path
          d="M23.836 8.794a3.179 3.179 0 00-3.067-2.226H16.4l-1.327-4.136a3.227 3.227 0 00-6.146 0L7.6 6.568H3.231a3.227 3.227 0 00-1.9 5.832L4.887 15l-1.352 4.187A3.178 3.178 0 004.72 22.8a3.177 3.177 0 003.8-.019L12 20.22l3.482 2.56a3.226 3.226 0 004.983-3.592L19.113 15l3.56-2.6a3.177 3.177 0 001.163-3.606zm-2.343 1.991l-4.144 3.03a1 1 0 00-.362 1.115l1.575 4.87a1.227 1.227 0 01-1.895 1.365l-4.075-3a1 1 0 00-1.184 0l-4.075 3a1.226 1.226 0 01-1.9-1.365l1.58-4.87a1 1 0 00-.362-1.116l-4.144-3.029a1.227 1.227 0 01.724-2.217h5.1a1 1 0 00.952-.694l1.55-4.83a1.227 1.227 0 012.336 0l1.55 4.83a1 1 0 00.952.694h5.1a1.227 1.227 0 01.724 2.217h-.002z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8860">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default StarIcon;
