import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function LabelIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8284)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M20.457 4.555L12.486.126a1 1 0 00-.972 0L3.543 4.555A3 3 0 002 7.177V19a5.006 5.006 0 005 5h10a5.005 5.005 0 005-5V7.177a3 3 0 00-1.543-2.622zM20 19a3 3 0 01-3 3H7a3 3 0 01-3-3V7.177a1 1 0 01.515-.877L12 2.144 19.486 6.3a1 1 0 01.514.877V19z" />
        <Path d="M12 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8284">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default LabelIcon
