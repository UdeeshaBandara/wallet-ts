import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function ResourcesIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8654)">
        <Path
          d="M23 3H13a1 1 0 00-1 1v3.27L9.6 3.11a2 2 0 00-3.47 0l-6 10.39A1 1 0 001 15h4.29a7 7 0 1013.42 0H23a1 1 0 001-1V4a1 1 0 00-1-1zM2.73 13l5.13-8.89L11.29 10a7 7 0 00-5 3H2.73zM12 22a5 5 0 110-10.001 5 5 0 010 10zm10-9h-4.26A7.07 7.07 0 0014 10.29V5h8v8z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8654">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ResourcesIcon;
