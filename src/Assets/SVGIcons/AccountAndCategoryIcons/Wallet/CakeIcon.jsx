import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CakeIcon({isWhite}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_253_7608)">
        <Path
          d="M23 22h-1v-8a5.006 5.006 0 00-5-5h-4V6.04a2.5 2.5 0 001.5-2.29A7.293 7.293 0 0012.738.327a1 1 0 00-1.476 0A7.293 7.293 0 009.5 3.75 2.5 2.5 0 0011 6.04V9H7a5.006 5.006 0 00-5 5v8H1a1 1 0 100 2h22a1 1 0 000-2zM7 11h10a3 3 0 013 3v1.98c-.936-.1-1.5-.7-1.5-.98a1 1 0 00-2 0c0 .343-.682 1-1.75 1-1.089 0-1.75-.694-1.75-1a1 1 0 00-2 0c0 .343-.682 1-1.75 1-1.089 0-1.75-.694-1.75-1a1 1 0 10-2 0c0 .315-.579.888-1.5.981v-1.98a3 3 0 013-3zm-3 6.98A4.156 4.156 0 006.5 17a4.31 4.31 0 005.5.015A4.31 4.31 0 0017.5 17a4.157 4.157 0 002.5.978V22H4v-4.02z"
          fill={isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7608">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CakeIcon
