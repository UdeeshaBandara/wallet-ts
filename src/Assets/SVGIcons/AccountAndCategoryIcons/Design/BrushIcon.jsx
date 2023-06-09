import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function BrushIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_7593)">
        <Path
          d="M19 0H5a5.006 5.006 0 00-5 5v5a7.009 7.009 0 007 7h2v4a3 3 0 006 0v-4h2a7.009 7.009 0 007-7V5a5.006 5.006 0 00-5-5zM2 5a3 3 0 013-3h5v1a1 1 0 002 0V2h2v3a1 1 0 002 0V2h2v5a1 1 0 002 0V2.184A3 3 0 0122 5v5H2V5zm15 10h-3a1 1 0 00-1 1v5a1 1 0 01-2 0v-5a1 1 0 00-1-1H7a5 5 0 01-4.576-3h19.152A5 5 0 0117 15z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_7593">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default BrushIcon;
