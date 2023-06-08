import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CreditCardIcon({isWhite}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     
    >
      <G clipPath="url(#clip0_330_9635)" fill={isWhite ? "#fff" : "#374957"}>
        <Path d="M5.5 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        <Path d="M19 3H5a5.006 5.006 0 00-5 5v8a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V8a5.006 5.006 0 00-5-5zM5 5h14a3 3 0 013 3H2a3 3 0 013-3zm14 14H5a3 3 0 01-3-3v-6h20v6a3 3 0 01-3 3z" />
      </G>
      <Defs>
        <ClipPath id="clip0_330_9635">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CreditCardIcon
