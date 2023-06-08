import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function InteractiveIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8247)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M23.708 22.293l-1.077-1.077-1.73-1.727 2.789-2.79a1 1 0 00-.365-1.645l-8.97-3.254a2 2 0 00-2.56 2.56l3.263 8.969a1 1 0 001.646.365L19.49 20.9l1.727 1.727 1.077 1.077a1 1 0 001.414-1.414v.003zM16.4 21.165l-2.724-7.49 7.49 2.724-4.766 4.766z" />
        <Path d="M10 20a10 10 0 1110-10 1 1 0 01-2 0 8 8 0 10-8 8 1 1 0 010 2z" />
        <Path d="M8.084 15.62a1 1 0 01-.383-.076 6 6 0 117.846-7.834.998.998 0 01-1.31 1.318 1 1 0 01-.539-.554 4 4 0 10-5.23 5.226 1 1 0 01-.384 1.924v-.004z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8247">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default InteractiveIcon;
