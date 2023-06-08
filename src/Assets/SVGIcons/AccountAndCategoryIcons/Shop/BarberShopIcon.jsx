import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function BarberShopIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_7529)">
        <Path
          d="M11.828 16.462a53.484 53.484 0 01-3.685-5.776C9.665 7.709 11 4.189 11 1a1 1 0 00-2 0 18.683 18.683 0 01-1.995 7.431A18.694 18.694 0 015 1a1 1 0 00-2 0c0 3.174 1.342 6.7 2.868 9.685a50.634 50.634 0 01-3.695 5.777A3.986 3.986 0 107 22.618a3.985 3.985 0 104.828-6.156zM4 22a2 2 0 110-4 2 2 0 010 4zm.883-5.895a50.253 50.253 0 002.122-3.342c.784 1.35 1.534 2.5 2.117 3.341A3.984 3.984 0 007 17.382a3.989 3.989 0 00-2.117-1.277zM10 22a2 2 0 110-4 2 2 0 010 4zm8-16v2h5a1 1 0 110 2h-5v2h5a1 1 0 010 2h-5v2h5a1 1 0 010 2h-5v5a1 1 0 01-2 0V5a5.006 5.006 0 015-5h2a1 1 0 110 2h-2a3 3 0 00-2.816 2H23a1 1 0 110 2h-5z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_7529">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default BarberShopIcon;
