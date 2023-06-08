import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function StickerIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8873)">
        <Path
          d="M23.967 10.417a12.04 12.04 0 10-13.55 13.55c.162.02.325.032.489.032a3.993 3.993 0 002.805-1.184l9.1-9.1a3.962 3.962 0 001.156-3.298zm-21.9.474a10.034 10.034 0 0119.8-.884 12.006 12.006 0 00-11.86 11.852A9.988 9.988 0 012.063 10.89h.004zM12.3 21.4c-.087.082-.18.158-.278.225a10 10 0 019.606-9.607c-.067.1-.142.192-.224.279L12.3 21.4z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8873">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default StickerIcon;
