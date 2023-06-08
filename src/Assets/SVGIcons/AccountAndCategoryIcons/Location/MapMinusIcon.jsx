import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function MapMinusIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8368)">
        <Path
          d="M8.174 22.453a5.433 5.433 0 007.578.02l3.984-3.683c4.317-4.258 4.363-11.21.104-15.526C15.582-1.052 8.63-1.099 4.314 3.16l-.104.104c-4.287 4.288-4.286 11.24.001 15.527.01.008.018.017.027.026l3.936 3.636zM5.62 4.675a8.983 8.983 0 0112.733 12.676l-3.977 3.675a3.508 3.508 0 01-4.828-.018l-3.928-3.63a8.983 8.983 0 010-12.703zm1.362 6.352c0-.551.447-.998.998-.998h7.985a.998.998 0 110 1.996H7.98a.998.998 0 01-.998-.998z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8368">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default MapMinusIcon
