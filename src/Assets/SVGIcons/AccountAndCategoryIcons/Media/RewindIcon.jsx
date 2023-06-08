import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function RewindIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8657)">
        <Path
          d="M10.42 20.656a3.77 3.77 0 01-2.233-.735l-6.64-4.87a3.784 3.784 0 010-6.1l6.64-4.87A3.783 3.783 0 0114.2 6.853l3.782-2.774A3.784 3.784 0 0124 7.13v9.74a3.784 3.784 0 01-6.02 3.051l-3.78-2.774a3.79 3.79 0 01-3.777 3.51h-.003zm2.787-6.475a1 1 0 01.592.194l5.363 3.933A1.784 1.784 0 0022 16.87V7.13a1.785 1.785 0 00-2.839-1.438l-5.36 3.933a1 1 0 01-1.593-.806V7.13A1.784 1.784 0 009.37 5.692l-6.64 4.87a1.783 1.783 0 000 2.876l6.64 4.87a1.784 1.784 0 002.838-1.438v-1.689a1 1 0 011-1z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8657">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default RewindIcon
