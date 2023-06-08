import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function BackpackIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7509)">
        <Path
          d="M9 11a1 1 0 011-1h4a1 1 0 010 2h-4a1 1 0 01-1-1zm15 7v1a5.006 5.006 0 01-5 5H5a5.006 5.006 0 01-5-5v-1a5.01 5.01 0 014-4.9V12a8 8 0 014.015-6.927C8.013 5.048 8 5.026 8 5V4a4 4 0 018 0v1c0 .026-.013.048-.015.073A8 8 0 0120 12v1.1a5.01 5.01 0 014 4.9zM10 4.263c1.31-.35 2.69-.35 4 0V4a2 2 0 10-4 0v.263zM6 16.535a8.369 8.369 0 0112 0V12a6 6 0 10-12 0v4.535zM5 22h.026A4.948 4.948 0 014 19v-3.816A3 3 0 002 18v1a3 3 0 003 3zm10 0a3 3 0 002.874-2.188 6.432 6.432 0 00-11.748 0A3 3 0 009 22h6zm7-4a3 3 0 00-2-2.816V19a4.948 4.948 0 01-1.026 3H19a3 3 0 003-3v-1z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7509">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default BackpackIcon
