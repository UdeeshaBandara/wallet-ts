import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function BulbIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_7602)">
        <Path
          d="M17.994 2.286A9 9 0 003.075 7.822a8.938 8.938 0 002.793 7.761A6.262 6.262 0 018 20.15v.161A3.694 3.694 0 0011.69 24h.62A3.694 3.694 0 0016 20.31v-.549a5.324 5.324 0 011.932-4 8.994 8.994 0 00.062-13.477v.002zM12.31 22h-.62A1.692 1.692 0 0110 20.31L9.992 20H14v.31A1.692 1.692 0 0112.31 22zm4.3-7.74A7.667 7.667 0 0014.246 18H13v-7.184A3 3 0 0015 8a1 1 0 10-2 0 1 1 0 11-2 0 1 1 0 10-2 0 3 3 0 002 2.816V18H9.678a8.634 8.634 0 00-2.448-3.88A7 7 0 0112.01 2a6.92 6.92 0 014.651 1.778 6.993 6.993 0 01-.048 10.481h-.003z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_7602">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const MemoBulbIcon = React.memo(BulbIcon);
export default BulbIcon;
