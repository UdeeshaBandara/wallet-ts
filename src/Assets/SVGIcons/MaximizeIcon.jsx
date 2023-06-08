import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MaximizeIcon(){
  return (
    <Svg
      width={13}
      height={8}
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"

    >
      <Path
        d="M1.528 7L6.58 1.947 11.633 7"
        stroke="#181818"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default MaximizeIcon
