import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function ShoppingCartIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8771)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M22.713 4.077A2.993 2.993 0 0020.41 3H4.242L4.2 2.649A3 3 0 001.222 0H1a1 1 0 000 2h.222a1 1 0 01.993.883l1.376 11.7A5 5 0 008.557 19H19a1 1 0 000-2H8.557a3 3 0 01-2.82-2h11.92a5 5 0 004.921-4.113l.785-4.354a2.994 2.994 0 00-.65-2.456zM21.4 6.178l-.786 4.354A3 3 0 0117.657 13H5.419l-.941-8H20.41a1 1 0 01.99 1.178zM7 24.001a2 2 0 100-4 2 2 0 000 4zM17 24.001a2 2 0 100-4 2 2 0 000 4z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8771">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ShoppingCartIcon;
