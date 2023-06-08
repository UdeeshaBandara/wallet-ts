import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function CakeWeddingIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_7611)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M23 22.01h-1V17a5 5 0 00-3-4.576V12a4.98 4.98 0 00-2-3.975L16.161 3.8a1 1 0 00-.981-.8h-.36a1 1 0 00-.981.8L13.2 7h-2.95L11 4a1 1 0 00-1-1H8a1 1 0 00-1 1l.873 3.493A4.993 4.993 0 005 12v.424A5 5 0 002 17v5.01H1a1 1 0 100 2h22a1 1 0 000-2zM10 9h4a3 3 0 013 3H7a3 3 0 013-3zm-3 5h10a3 3 0 013 3v.98c-.936-.1-1.5-.7-1.5-.98a1 1 0 00-2 0c0 .344-.682 1-1.75 1-1.089 0-1.75-.694-1.75-1a1 1 0 00-2 0c0 .344-.682 1-1.75 1-1.089 0-1.75-.694-1.75-1a1 1 0 10-2 0c0 .316-.579.888-1.5.981V17a3 3 0 013-3zm-3 5.979A4.156 4.156 0 006.5 19a4.309 4.309 0 005.5.015A4.31 4.31 0 0017.5 19a4.157 4.157 0 002.5.978v2.032H4v-2.031zM9 2a1 1 0 100-2 1 1 0 000 2zM15 2a1 1 0 100-2 1 1 0 000 2z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_7611">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CakeWeddingIcon;
