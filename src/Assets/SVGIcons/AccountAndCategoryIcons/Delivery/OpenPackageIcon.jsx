import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function OpenPackageIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8494)">
        <Path
          d="M21 8h-4a3 3 0 00-3 3v5h-2v-4a6 6 0 00-3.107-5.253 4 4 0 10-5.786 0A6 6 0 000 12v11a1 1 0 102 0v-5h20v5a1 1 0 002 0V11a3 3 0 00-3-3zM4 4a2 2 0 114 0 2 2 0 01-4 0zm2 4a4 4 0 014 4v4H2v-4a4 4 0 014-4zm10 8v-5a1 1 0 011-1h1v1a1 1 0 002 0v-1h1a1 1 0 011 1v5h-6z"
          fill={props.isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8494">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default OpenPackageIcon
