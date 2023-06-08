import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function ArrowDownIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7692)" fill={props.isWhite ? "#fff" : "#374957"}>
        <Path d="M22.293 12.7l-1.086 1.087-3.585-3.587a3.073 3.073 0 00-4.242 0l-.173.174a1.023 1.023 0 01-1.414 0L6.72 5.293A1 1 0 105.306 6.71l5.072 5.072a3.071 3.071 0 004.242 0l.173-.173a1.023 1.023 0 011.414 0l3.586 3.592-1.086 1.087a1 1 0 00.707 1.707H22.5a1.5 1.5 0 001.5-1.5V13.4a1 1 0 00-1.707-.7z" />
        <Path d="M23 21.976H5a3 3 0 01-3-3V1a1 1 0 00-2 0v17.976a5.006 5.006 0 005 5h18a1 1 0 000-2z" />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7692">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ArrowDownIcon
