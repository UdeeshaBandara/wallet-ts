import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CloudIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8479)">
        <Path
          d="M23 20h-8.184A3 3 0 0013 18.184v-4.162c1.344 0 2.52-.012 3.095-.023a4.951 4.951 0 004.766-3.831 5.013 5.013 0 00-3.559-6l-.172-.038c-.3-.067-.45-.1-.588-.43a6 6 0 00-11.367.858 6.366 6.366 0 00-.057 2.732 3.5 3.5 0 00.449 6.588c.272.072.552.113.833.122.655.018 2.534.026 4.494.026H11v4.159A3 3 0 009.184 20H1a1 1 0 000 2h8.184a2.982 2.982 0 005.632 0H23a1 1 0 000-2zM6.456 12a1.473 1.473 0 01-1.4-1.076 1.5 1.5 0 01.851-1.8 2.015 2.015 0 001.18-2.3A4 4 0 0110.982 2 4.013 4.013 0 0114.7 4.469a2.644 2.644 0 002.084 1.63 3.023 3.023 0 012.132 3.623 2.974 2.974 0 01-2.858 2.274c-.693.013-8.847.024-9.602.004zM12 22a1 1 0 110-2 1 1 0 010 2z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8479">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CloudIcon
