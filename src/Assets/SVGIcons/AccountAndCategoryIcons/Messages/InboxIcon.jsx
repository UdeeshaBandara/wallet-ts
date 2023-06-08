import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function InboxIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8224)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M21 12h-3a2 2 0 00-2 2 2 2 0 01-2 2h-4a2 2 0 01-2-2 2 2 0 00-2-2H3a3 3 0 00-3 3v4a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5v-4a3 3 0 00-3-3zm1 7a3 3 0 01-3 3H5a3 3 0 01-3-3v-4a1 1 0 011-1h3a4 4 0 004 4h4a4 4 0 004-4h3a1 1 0 011 1v4zM3 10h18a1 1 0 100-2H3a1 1 0 000 2zM3 6h18a1 1 0 100-2H3a1 1 0 000 2z" />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8224">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default InboxIcon
