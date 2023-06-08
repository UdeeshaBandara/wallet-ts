import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SchoolBusIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8693)">
        <Path
          d="M20 10.999h-1v-6a4 4 0 00-4-4H4a4 4 0 00-4 4v11a2.994 2.994 0 002.071 2.838 3.4 3.4 0 00-.071.662 3.5 3.5 0 107 0 3.466 3.466 0 00-.041-.5h6.082c-.026.166-.04.333-.041.5a3.5 3.5 0 107 0 3.402 3.402 0 00-.071-.662A2.994 2.994 0 0024 15.999v-1a4 4 0 00-4-4zm-18 0v-4h2v4H2zm4-4h2v4H6v-4zm4 0h3v10h-3v-10zm5 0h2v4h-2v-4zm-11-4h11a2 2 0 012 2H2a2 2 0 012-2zm-2 10h6v4H3a1 1 0 01-1-1v-3zm5 6.5a1.5 1.5 0 01-3 0c0-.17.032-.34.093-.5h2.814c.061.16.093.33.093.5zm11.5 1.5a1.5 1.5 0 01-1.5-1.5c0-.17.032-.34.093-.5h2.814c.061.16.093.33.093.5a1.5 1.5 0 01-1.5 1.5zm3.5-5a1 1 0 01-1 1h-6v-4h5a2 2 0 012 2v1z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8693">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SchoolBusIcon;
