import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function BookIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7565)">
        <Path
          d="M17 0H7a5.006 5.006 0 00-5 5v15a4 4 0 004 4h11a5.006 5.006 0 005-5V5a5.006 5.006 0 00-5-5zm3 5v11H8V2h9a3 3 0 013 3zM6 2.172V16a3.98 3.98 0 00-2 .537V5a3 3 0 012-2.828zM17 22H6a2 2 0 110-4h14v1a3 3 0 01-3 3z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7565">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default BookIcon
