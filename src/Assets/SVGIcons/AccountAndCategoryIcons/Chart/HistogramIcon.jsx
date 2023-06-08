import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function HistogramIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7665)" fill={props.isWhite ? "#fff" : "#374957"}>
        <Path d="M23 22H5a3 3 0 01-3-3V1a1 1 0 00-2 0v18a5.006 5.006 0 005 5h18a1 1 0 000-2z" />
        <Path d="M6 20a1 1 0 001-1v-7a1 1 0 10-2 0v7a1 1 0 001 1zM10 10v9a1 1 0 002 0v-9a1 1 0 10-2 0zM15 13v6a1 1 0 002 0v-6a1 1 0 10-2 0zM20 9v10a1 1 0 002 0V9a1 1 0 10-2 0zM6 9a1 1 0 00.707-.293l3.586-3.586a1.025 1.025 0 011.414 0l2.172 2.172a3 3 0 004.242 0l5.586-5.586A1 1 0 0022.293.293l-5.586 5.585a1 1 0 01-1.414 0l-2.172-2.17a3 3 0 00-4.242 0L5.293 7.292A1 1 0 006 9z" />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7665">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default HistogramIcon
