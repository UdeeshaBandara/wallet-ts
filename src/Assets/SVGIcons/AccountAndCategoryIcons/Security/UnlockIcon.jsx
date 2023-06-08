import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function UnlockIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_9067)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M17 8.001H7v-1a5 5 0 019.375-2.422 1 1 0 001.749-.97A7 7 0 005 7v1.424a5 5 0 00-3 4.576v6a5.006 5.006 0 005 5h10a5.006 5.006 0 005-5v-6a5.006 5.006 0 00-5-5zm3 11a3 3 0 01-3 3H7a3 3 0 01-3-3v-6a3 3 0 013-3h10a3 3 0 013 3v6z" />
        <Path d="M12 14.001a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_9067">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}


export default UnlockIcon;
