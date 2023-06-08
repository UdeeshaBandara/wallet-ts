import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function DuplicateIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7938)">
        <Path
          d="M21.155 3.272L18.871.913A3.02 3.02 0 0016.715 0H12a5.009 5.009 0 00-4.9 4H7a5.006 5.006 0 00-5 5v10a5.006 5.006 0 005 5h6a5.006 5.006 0 005-5v-.1a5.01 5.01 0 004-4.9V5.36a2.988 2.988 0 00-.845-2.088zM13 22H7a3 3 0 01-3-3V9a3 3 0 013-3v8a5.006 5.006 0 005 5h4a3 3 0 01-3 3zm4-5h-5a3 3 0 01-3-3V5a3 3 0 013-3h4v2a2 2 0 002 2h2v8a3 3 0 01-3 3z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7938">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DuplicateIcon
