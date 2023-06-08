import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function BriefcaseIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_330_9378)">
        <Path
          d="M19 4h-1.1A5.01 5.01 0 0013 0h-2a5.009 5.009 0 00-4.9 4H5a5.006 5.006 0 00-5 5v10a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V9a5.006 5.006 0 00-5-5zm-8-2h2a3 3 0 012.816 2H8.184A3 3 0 0111 2zM5 6h14a3 3 0 013 3v3H2V9a3 3 0 013-3zm14 16H5a3 3 0 01-3-3v-5h9v1a1 1 0 002 0v-1h9v5a3 3 0 01-3 3z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_330_9378">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default BriefcaseIcon
