import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function ReflectIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8644)">
        <Path
          d="M23 13H1a1 1 0 010-2h22a1 1 0 110 2zm-4.066-5.874a2.427 2.427 0 00-1.284-2.73L9.668.427A3.3 3.3 0 006.4.433 2.809 2.809 0 005 2.914V6a3 3 0 003 3h8.318a2.538 2.538 0 002.616-1.874zM8.737 2.2l8.012 3.98a.421.421 0 01.24.477c-.074.308-.494.341-.671.341H8A1 1 0 017 6V2.914a.825.825 0 01.418-.758c.18-.103.385-.157.593-.156a1.5 1.5 0 01.726.2zm.891 21.395l8.033-3.994a2.425 2.425 0 001.273-2.726A2.538 2.538 0 0016.318 15H8a3 3 0 00-3 3v3.084a2.808 2.808 0 001.4 2.482A3.212 3.212 0 008.032 24a3.286 3.286 0 001.596-.407v.002zM16.318 17c.177 0 .6.034.671.341a.417.417 0 01-.229.473L8.7 21.823a1.313 1.313 0 01-1.279.02.824.824 0 01-.421-.759V18a1 1 0 011-1h8.318z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8644">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ReflectIcon;
