import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

const ExpenseImportIcon = (props) => (
  <Svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      clipPath="url(#a)"
      stroke="#7E7E7E"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M42 35v8a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4v-8M34 23 24 13 14 23M24 13v24" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="rotate(180 24 24)" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ExpenseImportIcon;
