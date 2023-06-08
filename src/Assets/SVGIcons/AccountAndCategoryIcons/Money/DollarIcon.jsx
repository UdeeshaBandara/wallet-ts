import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function DollarIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7925)">
        <Path
          d="M13.932 4A3.071 3.071 0 0117 7.068a1 1 0 002 0V7v-.055A5.073 5.073 0 0013.932 2H13V1a1 1 0 00-2 0v1h-.932a5.068 5.068 0 00-1.6 9.875L11 12.72V20h-.932A3.071 3.071 0 017 16.932a1 1 0 10-2 0v.123A5.073 5.073 0 0010.068 22H11v1a1 1 0 002 0v-1h.932a5.068 5.068 0 001.6-9.875L13 11.28V4h.932zm.97 10.021a3.068 3.068 0 01-.97 5.979H13v-6.613l1.902.634zM11 10.613l-1.9-.634A3.068 3.068 0 0110.068 4H11v6.613z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7925">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DollarIcon
