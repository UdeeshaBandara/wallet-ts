import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function StethoscopeIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8870)">
        <Path
          d="M24 9a3 3 0 10-4 2.816V16a6 6 0 11-12 0v-.08A7.006 7.006 0 0014 9V5a5.006 5.006 0 00-5-5 1 1 0 000 2 3 3 0 013 3v4A5 5 0 112 9V5a3 3 0 013-3 1 1 0 000-2 5.006 5.006 0 00-5 5v4a7.006 7.006 0 006 6.92V16a8 8 0 0016 0v-4.184A3 3 0 0024 9zm-3 1a1 1 0 110-2 1 1 0 010 2z"
          fill={props.isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8870">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default StethoscopeIcon
