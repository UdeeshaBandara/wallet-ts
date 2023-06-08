import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function CalendarIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_324_9244)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M19 2h-1V1a1 1 0 00-2 0v1H8V1a1 1 0 00-2 0v1H5a5.006 5.006 0 00-5 5v12a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V7a5.006 5.006 0 00-5-5zM2 7a3 3 0 013-3h14a3 3 0 013 3v1H2V7zm17 15H5a3 3 0 01-3-3v-9h20v9a3 3 0 01-3 3z" />
        <Path d="M12 16.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM7 16.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17 16.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_324_9244">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CalendarIcon;
