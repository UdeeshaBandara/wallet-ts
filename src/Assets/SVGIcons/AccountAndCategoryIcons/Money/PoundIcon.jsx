import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function PoundIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8578)">
        <Path
          d="M21 22H6.884A6.934 6.934 0 008 18v-4h7a1 1 0 000-2H8V8a6 6 0 1112 0 1 1 0 002 0A8 8 0 006 8v4H4a1 1 0 000 2h2v4c0 1.2-.292 4-3 4a1 1 0 000 2h18a1 1 0 000-2z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8578">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PoundIcon
