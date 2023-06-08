import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function LayersIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8297)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M22.485 10.976l-10.484 6.291-10.486-6.291A1 1 0 00.486 12.69l11 6.6a1 1 0 001.03 0l11-6.6a1 1 0 10-1.028-1.714h-.003z" />
        <Path d="M22.485 15.543l-10.484 6.29-10.486-6.29a.999.999 0 10-1.029 1.715l11 6.6a1 1 0 001.03 0l11-6.6a1 1 0 00-1.028-1.715h-.003zM12 14.773c-.54 0-1.069-.147-1.531-.425L.485 8.358a1 1 0 010-1.715l9.984-5.99a2.973 2.973 0 013.062 0l9.984 5.99a1 1 0 010 1.714l-9.984 5.991a2.976 2.976 0 01-1.531.425zM2.944 7.5l8.556 5.133a.974.974 0 001 0L21.056 7.5 12.5 2.367a.974.974 0 00-1 0L2.944 7.5z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8297">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default LayersIcon;
