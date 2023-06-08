import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function PaintBrushIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8497)">
        <Path
          d="M23.1.9a3.139 3.139 0 00-4.33 0L7.563 12.1a5.549 5.549 0 00-1.058-.1 5.458 5.458 0 00-3.885 1.608C1.268 14.961.314 18.591.031 20.562a3 3 0 003.408 3.406c1.971-.283 5.6-1.237 6.954-2.589a5.494 5.494 0 001.5-4.94L23.1 5.228a3.068 3.068 0 000-4.33zM8.977 19.964c-.725.725-3.5 1.69-5.824 2.023a1.016 1.016 0 01-.859-.283 1 1 0 01-.282-.859c.333-2.323 1.3-5.1 2.022-5.824a3.5 3.5 0 014.943 4.943zm12.711-16.15L11.067 14.437a5.378 5.378 0 00-1.5-1.508L20.184 2.311a1.086 1.086 0 011.5 0 1.062 1.062 0 01.004 1.504z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8497">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default PaintBrushIcon;
