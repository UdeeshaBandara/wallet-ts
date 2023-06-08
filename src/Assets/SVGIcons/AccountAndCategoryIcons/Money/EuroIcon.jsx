import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function EuroIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7976)">
        <Path
          d="M21.715 18.363A10 10 0 014.461 15H15a1 1 0 100-2H4.051a9.83 9.83 0 010-2H15a1 1 0 100-2H4.461a10 10 0 0117.254-3.363 1 1 0 001.542-1.274A11.989 11.989 0 002.4 9H1a1 1 0 100 2h1.051c-.028.33-.051.662-.051 1 0 .338.023.669.051 1H1a1 1 0 000 2h1.4a11.989 11.989 0 0020.862 4.637 1 1 0 00-1.542-1.274h-.005z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7976">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default EuroIcon
