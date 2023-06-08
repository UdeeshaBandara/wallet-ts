import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CalculatorIcon({isWhite}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_253_7616)">
        <Path
          d="M18 24H6a5.006 5.006 0 01-5-5V5a5.006 5.006 0 015-5h12a5.006 5.006 0 015 5v14a5.006 5.006 0 01-5 5zM6 2a3 3 0 00-3 3v14a3 3 0 003 3h12a3 3 0 003-3V5a3 3 0 00-3-3H6zm10 8H8a3 3 0 110-6h8a3 3 0 010 6zM8 6a1 1 0 000 2h8a1 1 0 100-2H8zm-2 7a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm-8 4a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm8-4a1 1 0 100 2 1 1 0 000-2zm1 5a1 1 0 00-1-1h-4a1 1 0 000 2h4a1 1 0 001-1z"
          fill={isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7616">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CalculatorIcon
