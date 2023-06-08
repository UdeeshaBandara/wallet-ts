import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function ArrowGrowIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7696)" fill={props.isWhite ? "#fff" : "#374957"}>
        <Path d="M22.5 3.976h-3.086a1 1 0 00-.707 1.707l1.086 1.086-3.586 3.585a1.024 1.024 0 01-1.415 0l-.17-.171a3.07 3.07 0 00-4.243 0l-5.1 5.1A1.003 1.003 0 106.7 16.7l5.1-5.1a1.023 1.023 0 011.415 0l.17.17a3.073 3.073 0 004.243 0l3.586-3.585L22.3 9.27a1 1 0 001.7-.71V5.477a1.5 1.5 0 00-1.5-1.5z" />
        <Path d="M23 21.976H5a3 3 0 01-3-3V1a1 1 0 00-2 0v17.976a5.006 5.006 0 005 5h18a1 1 0 000-2z" />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7696">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ArrowGrowIcon
