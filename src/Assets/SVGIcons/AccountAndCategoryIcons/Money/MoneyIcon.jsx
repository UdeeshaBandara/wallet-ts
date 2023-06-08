import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function MoneyIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8454)">
        <Path
          d="M19 20H5a5.006 5.006 0 01-5-5V9a5.006 5.006 0 015-5h14a5.006 5.006 0 015 5v6a5.006 5.006 0 01-5 5zM5 6a3 3 0 00-3 3v6a3 3 0 003 3h14a3 3 0 003-3V9a3 3 0 00-3-3H5zm7 10a4 4 0 110-8 4 4 0 010 8zm0-6a2 2 0 100 4 2 2 0 000-4zM5 8a1 1 0 100 2 1 1 0 000-2zm13 1a1 1 0 102 0 1 1 0 00-2 0zM5 14a1 1 0 100 2 1 1 0 000-2zm13 1a1 1 0 102 0 1 1 0 00-2 0z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8454">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default MoneyIcon
