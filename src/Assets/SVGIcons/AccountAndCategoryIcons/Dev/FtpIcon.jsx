import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function FtpIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8103)">
        <Path
          d="M23 20h-8.184A3 3 0 0013 18.184V15h4a4 4 0 004-4V6a4 4 0 00-4-4h-4.379a1 1 0 01-.565-.175L10.17.528A2.992 2.992 0 008.47 0H7a4 4 0 00-4 4v7a4 4 0 004 4h4v3.184A3 3 0 009.184 20H1a1 1 0 000 2h8.184a2.983 2.983 0 005.632 0H23a1 1 0 000-2zM7 2h1.47a1 1 0 01.567.176l1.884 1.3c.5.345 1.093.53 1.7.529H17a2 2 0 012 2H5V4a2 2 0 012-2zm-2 9V8h14v3a2 2 0 01-2 2H7a2 2 0 01-2-2zm7 11a1 1 0 110-2 1 1 0 010 2z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8103">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FtpIcon
