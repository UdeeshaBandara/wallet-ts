import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function ShoppingCartCheckIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8765)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M7 24.001a2 2 0 100-4 2 2 0 000 4zM17 24.001a2 2 0 100-4 2 2 0 000 4zM23.685 1.336a1 1 0 00-1.414 0L17.11 6.5l-1.55-1.62a1 1 0 00-1.442 1.387l1.614 1.679a1.872 1.872 0 001.345.6h.033a1.873 1.873 0 001.335-.553l5.239-5.243a1 1 0 000-1.414z" />
        <Path d="M21.9 9.016a1 1 0 00-1.162.807l-.128.709A3 3 0 0117.657 13H5.418l-.94-8H11a1 1 0 100-2H4.242L4.2 2.648A3 3 0 001.222 0H1a1 1 0 000 2h.222a1 1 0 01.993.883l1.376 11.7A5 5 0 008.557 19H19a1 1 0 000-2H8.557a3 3 0 01-2.829-2h11.929a5 5 0 004.921-4.113l.128-.71a1 1 0 00-.806-1.161z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8765">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ShoppingCartCheckIcon;
