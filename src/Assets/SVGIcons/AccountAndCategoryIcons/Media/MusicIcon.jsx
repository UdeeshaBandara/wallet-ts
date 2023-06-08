import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function MusicIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8473)">
        <Path
          d="M19 1h-6a5.006 5.006 0 00-5 5v8.026A4.948 4.948 0 005 13a5 5 0 105 5V6a3 3 0 013-3h6a3 3 0 013 3v8.026A4.948 4.948 0 0019 13a4.999 4.999 0 105 5V6a5.006 5.006 0 00-5-5zM5 21a3 3 0 110-6 3 3 0 010 6zm14 0a3 3 0 110-5.999A3 3 0 0119 21z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8473">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default MusicIcon
