import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function ToolCropIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_9004)">
        <Path
          d="M23 18h-3V9a5.006 5.006 0 00-5-5H6V1a1 1 0 00-2 0v3H1a1 1 0 000 2h3v9a5.006 5.006 0 005 5h9v3a1 1 0 002 0v-3h3a1 1 0 000-2zM9 18a3 3 0 01-3-3V6h9a3 3 0 013 3v9H9z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_9004">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ToolCropIcon;
