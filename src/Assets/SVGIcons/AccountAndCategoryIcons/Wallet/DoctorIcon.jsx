import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function DoctorIcon({isWhite}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
   
    >
      <G clipPath="url(#clip0_253_7916)">
        <Path
          d="M19 5h-3V4a3 3 0 00-3-3h-2a3 3 0 00-3 3v1H5a5.006 5.006 0 00-5 5v8a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5v-8a5.006 5.006 0 00-5-5zm-9-1a1 1 0 011-1h2a1 1 0 011 1v1h-4V4zm12 14a3 3 0 01-3 3H5a3 3 0 01-3-3v-8a3 3 0 013-3h14a3 3 0 013 3v8zm-6-4a1 1 0 01-1 1h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2v-2a1 1 0 012 0v2h2a1 1 0 011 1z"
          fill={isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7916">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DoctorIcon
