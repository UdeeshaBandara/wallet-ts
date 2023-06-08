import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function BellIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7547)">
        <Path
          d="M10 8a2 2 0 110 4 2 2 0 010-4zm14 2a14.27 14.27 0 01-11.484 13.952 2.952 2.952 0 01-2.431-.646A3.012 3.012 0 019 20.99v-1.041a10 10 0 119.382-15.394 1.003 1.003 0 01-1.682 1.09 8 8 0 100 8.709.999.999 0 011.817.338 1.001 1.001 0 01-.14.753A9.96 9.96 0 0111 19.937v1.053a1.017 1.017 0 00.738.977c.137.037.28.043.42.017a12.192 12.192 0 009.47-9.053A3 3 0 1124 10zm-2 0a1 1 0 10-2 0 1 1 0 002 0z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7547">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default BellIcon
