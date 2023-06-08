import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function MessengerLineIcon(props) {
  return (
    <Svg width={28} height={28} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_386_9610)">
        <Path
          d="M14 2.333c6.443 0 11.666 5.223 11.666 11.667 0 6.443-5.223 11.666-11.666 11.666a11.616 11.616 0 01-5.674-1.47l-.356-.207-3.537 1.04a1.178 1.178 0 01-1.493-1.335l.03-.128 1.04-3.537a11.618 11.618 0 01-1.677-6.03C2.333 7.557 7.556 2.334 14 2.334zm0 2.333a9.334 9.334 0 00-7.886 14.33c.231.363.33.811.252 1.256l-.045.19-.515 1.751 1.751-.514a1.763 1.763 0 011.447.206A9.334 9.334 0 1014 4.666zm-2.575 6.759a1.166 1.166 0 011.54-.097l.11.097L15.75 14.1l2.675-2.675a1.166 1.166 0 011.746 1.54l-.096.11-3.5 3.5a1.167 1.167 0 01-1.54.096l-.11-.096-2.675-2.676-2.675 2.676a1.167 1.167 0 01-1.747-1.54l.097-.11 3.5-3.5z"
          fill={props.isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_386_9610">
          <Path fill="#fff" d="M0 0h28v28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default MessengerLineIcon;
