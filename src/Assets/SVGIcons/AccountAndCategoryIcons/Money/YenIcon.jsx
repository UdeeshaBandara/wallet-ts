import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function YenIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_9145)">
        <Path
          d="M22.61.209a1 1 0 00-1.4.182L12 12.36 2.792.39a1 1 0 00-1.584 1.22L10.738 14H6a1 1 0 000 2h5v2H6a1 1 0 000 2h5v3a1 1 0 002 0v-3h5a1 1 0 100-2h-5v-2h5a1 1 0 100-2h-4.738l9.53-12.39A1 1 0 0022.61.209z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_9145">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default YenIcon
