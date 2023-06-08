import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function TrainIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_9020)">
        <Path
          d="M15 5a1 1 0 01-1 1h-4a1 1 0 010-2h4a1 1 0 011 1zm6 .72v10.457a5 5 0 01-1.326 3.39l1.25 3.054a1 1 0 01-1.852.757L18 20.745c-1.878.87-3.93 1.3-6 1.255a13.583 13.583 0 01-6-1.255l-1.073 2.633a1 1 0 11-1.851-.757l1.249-3.054A5 5 0 013 16.177V5.72A4.982 4.982 0 016.475.956C8.257.356 10.12.034 12 0a18.33 18.33 0 015.525.957A4.98 4.98 0 0121 5.72zm-2 6.017C17.447 14.065 15.05 16 12 16s-5.447-1.935-7-4.263v4.44a2.958 2.958 0 001.512 2.607A11.33 11.33 0 0012 20c1.902.062 3.79-.356 5.487-1.216A2.957 2.957 0 0019 16.177v-4.44zM19 6v-.28a2.988 2.988 0 00-2.083-2.858A16.365 16.365 0 0012 2a16.4 16.4 0 00-4.917.861A2.99 2.99 0 005 5.72V6c0 2.443 2.645 8 7 8s7-5.557 7-8zm-7 11a1 1 0 100 2 1 1 0 000-2z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_9020">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}


export default TrainIcon;
