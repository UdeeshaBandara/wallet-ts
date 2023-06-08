import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function ShoppingCartAddIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8759)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M7 24.001a2 2 0 100-4 2 2 0 000 4zM17 24.001a2 2 0 100-4 2 2 0 000 4zM23 3h-2V1a1 1 0 00-2 0v2h-2a1 1 0 100 2h2v2a1 1 0 002 0V5h2a1 1 0 100-2z" />
        <Path d="M21.771 9.726a.994.994 0 00-1.162.806A3 3 0 0117.657 13H5.418l-.94-8H13a1 1 0 100-2H4.242L4.2 2.648A3 3 0 001.222 0H1a1 1 0 000 2h.222a1 1 0 01.993.883l1.376 11.7A5 5 0 008.557 19H19a1 1 0 000-2H8.557a3 3 0 01-2.829-2h11.929a5 5 0 004.921-4.112 1 1 0 00-.807-1.162z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8759">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ShoppingCartAddIcon;
