import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function TruckSideIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_9051)">
        <Path
          d="M19 4.999h-2.1a5.01 5.01 0 00-4.9-4H5a5.006 5.006 0 00-5 5v9a4 4 0 003.061 3.877 3.5 3.5 0 106.9.123h4.082c-.026.166-.04.333-.041.5a3.5 3.5 0 107 0 3.402 3.402 0 00-.061-.623A4 4 0 0024 14.999v-5a5.006 5.006 0 00-5-5zm3 5v1h-5v-4h2a3 3 0 013 3zm-20 5v-9a3 3 0 013-3h7a3 3 0 013 3v11H4a2 2 0 01-2-2zm6 4.5a1.5 1.5 0 11-3 0c0-.17.032-.34.093-.5h2.814c.06.16.092.33.093.5zm9.5 1.5a1.5 1.5 0 01-1.5-1.5c0-.17.032-.34.093-.5h2.814c.061.16.093.33.093.5a1.5 1.5 0 01-1.5 1.5zm2.5-4h-3v-4h5v2a2 2 0 01-2 2z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_9051">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}


export default TruckSideIcon;
