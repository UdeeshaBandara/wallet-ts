import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function TeenyDiscountIcon(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_330_9791)">
        <Path
          d="M9.333 10.267H11.2m5.6 7.466h1.866m0-8.4l-9.333 9.333m3.362-17.191l-2.107 2.103c-.346.346-.814.541-1.303.542h-3.32a1.844 1.844 0 00-1.844 1.844v3.319c0 .489-.195.957-.54 1.303l-2.106 2.11a1.844 1.844 0 000 2.609l2.109 2.107a1.843 1.843 0 01.54 1.303v3.319c0 1.02.824 1.844 1.844 1.844h3.319c.489 0 .957.194 1.302.542l2.11 2.107a1.844 1.844 0 002.607 0l2.108-2.11c.346-.345.814-.539 1.303-.539h3.319a1.844 1.844 0 001.844-1.844v-3.319c0-.489.194-.957.542-1.303l2.107-2.11a1.845 1.845 0 000-2.607l-2.11-2.107a1.844 1.844 0 01-.539-1.303v-3.32a1.844 1.844 0 00-1.844-1.844h-3.32c-.488 0-.957-.195-1.302-.54l-2.111-2.106a1.844 1.844 0 00-2.608 0z"
          stroke={props.isWhite ? "#ffffff" : "#374957"}
          strokeWidth={2}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_330_9791">
          <Path fill="#fff" d="M0 0H28V28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default TeenyDiscountIcon
