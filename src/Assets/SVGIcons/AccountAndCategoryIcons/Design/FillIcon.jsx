import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function FillIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8041)">
        <Path
          d="M22.326 18.422C23.054 19.456 24 20.652 24 21.5a2.5 2.5 0 01-5 0c0-.775.961-2.008 1.692-3.069a1.001 1.001 0 011.635-.009zm-.877-4.558l-8.672 8.672a5.006 5.006 0 01-7.07 0l-4.243-4.243a5 5 0 010-7.07l5.71-5.71-2.857-2.89A1 1 0 015.74 1.215L8.587 4.1l1.548-1.55-.843-.843A1 1 0 0110.706.293l13 13a1 1 0 11-1.414 1.414l-.843-.843zm-1.414-1.414L11.55 3.964 9.992 5.522 14.71 10.3a1 1 0 11-1.422 1.4L8.58 6.935l-5.7 5.7a3 3 0 000 4.243l4.242 4.243a3.005 3.005 0 004.243 0l8.671-8.67z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8041">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default FillIcon;
