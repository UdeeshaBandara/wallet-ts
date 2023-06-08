import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function EarningsIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7944)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M19 0h-5a1 1 0 100 2h5a2.95 2.95 0 011.285.3L.293 22.293a1 1 0 101.414 1.414L21.7 3.715c.195.4.298.84.3 1.285v5a1 1 0 002 0V5a5.006 5.006 0 00-5-5z" />
        <Path d="M6 10a4 4 0 100-8 4 4 0 000 8zm0-6a2 2 0 110 4 2 2 0 010-4zM18 14a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z" />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7944">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default EarningsIcon
