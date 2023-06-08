import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function LassoIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8291)">
        <Path
          d="M13 0C6.935 0 2 4.037 2 9a7.544 7.544 0 00.685 3.107 2.94 2.94 0 00-.435 3.072A6.976 6.976 0 000 20a3.888 3.888 0 004 4 1 1 0 10.008-2A1.886 1.886 0 012 20a5.04 5.04 0 011.683-3.426c1.112.328 2.27.475 3.43.435.3 0 .577-.007.843-.016A13.049 13.049 0 0013 18c6.065 0 11-4.037 11-9s-4.935-9-11-9zM4.29 14.688a.987.987 0 010-1.4.985.985 0 011.4 0A8.434 8.434 0 016.737 15a7.449 7.449 0 01-2.447-.312zM13 16c-1.335 0-2.658-.242-3.907-.712A14.453 14.453 0 007.1 11.876a3.042 3.042 0 00-2.691-.795A5.535 5.535 0 013.999 9c0-3.859 4.038-7 9-7 4.964 0 9 3.141 9 7s-4.036 7-9 7z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8291">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default LassoIcon;
