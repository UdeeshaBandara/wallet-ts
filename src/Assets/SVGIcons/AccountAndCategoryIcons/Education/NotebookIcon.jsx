import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function NotebookIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8485)">
        <Path
          d="M19 3.022V1a1 1 0 00-2 0v1.1a5 5 0 00-1-.1h-1V1a1 1 0 00-2 0v1h-2V1a1 1 0 00-2 0v1H8a5 5 0 00-1 .1V1a1 1 0 00-2 0v2.022A4.979 4.979 0 003 7v12a5.006 5.006 0 005 5h8a5.006 5.006 0 005-5V7a4.978 4.978 0 00-2-3.978zM19 19a3 3 0 01-3 3H8a3 3 0 01-3-3V7a3 3 0 013-3h8a3 3 0 013 3v12zM17 8a1 1 0 01-1 1H8a1 1 0 010-2h8a1 1 0 011 1zm0 4a1 1 0 01-1 1H8a1 1 0 010-2h8a1 1 0 011 1zm-4 4a1 1 0 01-1 1H8a1 1 0 010-2h4a1 1 0 011 1z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8485">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default NotebookIcon
