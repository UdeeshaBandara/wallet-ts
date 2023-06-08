import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function ProtractorIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8592)">
        <Path
          d="M21.977 11.264C21.613 5.724 16.474 1.041 10.731 1A2 2 0 009 0H7a4 4 0 00-4 4v16a4 4 0 004 4h2a2 2 0 001.731-1H11a11.042 11.042 0 0010.368-7.3c.507-1.42.715-2.93.609-4.436zm-4.409 6.887A8.912 8.912 0 0111 21h-1a1 1 0 00-1 1H7a2 2 0 01-2-2v-1h1a1 1 0 000-2H5v-2h1a1 1 0 000-2H5v-2h1a1 1 0 000-2H5V7h1a1 1 0 000-2H5V4a2 2 0 012-2h2a1 1 0 001 1h.656c4.757 0 9.027 3.844 9.324 8.394a8.926 8.926 0 01-2.412 6.757zM11 7a2 2 0 00-2 2v6a2.013 2.013 0 001.976 1.989 5.09 5.09 0 005-4.5A5.001 5.001 0 0011 7zm0 8V9a3 3 0 012.986 3.3A3.089 3.089 0 0111 15z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8592">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ProtractorIcon;
