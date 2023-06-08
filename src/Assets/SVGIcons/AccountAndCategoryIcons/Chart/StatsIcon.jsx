import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function StatsIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8863)" fill={props.isWhite ? "#fff" : "#374957"}>
        <Path d="M23 22H3a1 1 0 01-1-1V1a1 1 0 00-2 0v20a3 3 0 003 3h20a1 1 0 000-2z" />
        <Path d="M15 20.001a1 1 0 001-1v-7a1 1 0 10-2 0v7a1 1 0 001 1zM7 20.001a1 1 0 001-1v-7a1 1 0 10-2 0v7a1 1 0 001 1zM19 20a1 1 0 001-1V7a1 1 0 10-2 0v12a1 1 0 001 1zM11 20a1 1 0 001-1V7a1 1 0 10-2 0v12a1 1 0 001 1z" />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8863">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default StatsIcon
