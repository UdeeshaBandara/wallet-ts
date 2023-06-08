import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function BoxIcon({isWhite}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <G clipPath="url(#clip0_253_7574)">
        <Path
          d="M19 0H5a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V5a5.006 5.006 0 00-5-5zm3 5h-7V2h4a3 3 0 013 3zM11 2h2v5a1 1 0 01-2 0V2zM5 2h4v3H2a3 3 0 013-3zm14 20H5a3 3 0 01-3-3V7h7a3 3 0 106 0h7v12a3 3 0 01-3 3zm1-3a1 1 0 01-1 1h-3a1 1 0 010-2h3a1 1 0 011 1z"
          fill={isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7574">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default BoxIcon
