import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function TrainSideIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_9016)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M19.99 15.001H1a1 1 0 100 2h18.99a4 4 0 003.825-5.193 13.94 13.94 0 00-13.36-9.807H1a1 1 0 100 2h3v3H1a1 1 0 000 2h19.213a12.046 12.046 0 011.694 3.406 1.968 1.968 0 01-.3 1.773 1.991 1.991 0 01-1.617.821zM9 7.001H6v-3h3v3zm2 0V4.023a11.952 11.952 0 017.407 2.978H11zM23 20.001H1a1 1 0 100 2h22a1 1 0 000-2z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_9016">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default TrainSideIcon;
