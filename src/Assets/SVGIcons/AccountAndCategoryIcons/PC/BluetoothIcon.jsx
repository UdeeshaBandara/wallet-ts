import * as React from "react";
import Svg from "react-native-svg"

function BluetoothIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Svg.Path
        d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11"
        stroke={props.isWhite ? "#ffffff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BluetoothIcon;
