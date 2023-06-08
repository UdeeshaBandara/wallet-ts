import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MinimizeIcon() {
  return (
    <Svg
      width={13}
      height={8}
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M11.473 1L6.42 6.053 1.367 1"
        stroke="#181818"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default MinimizeIcon
