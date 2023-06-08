import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function PresentationIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8585)">
        <Path
          d="M23 14h-1V5a5.006 5.006 0 00-5-5H7a5.006 5.006 0 00-5 5v9H1a1 1 0 000 2h10v4H9a3 3 0 00-3 3 1 1 0 102 0 1 1 0 011-1h6a1 1 0 011 1 1 1 0 002 0 3 3 0 00-3-3h-2v-4h10a1 1 0 000-2zM4 5a3 3 0 013-3h10a3 3 0 013 3v9H4V5z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8585">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default PresentationIcon;
