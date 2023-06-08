import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function MapTimeIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8380)">
        <Path
          d="M12 24a5.419 5.419 0 01-3.808-1.552L4.25 18.805A11 11 0 1119.777 3.222a11 11 0 010 15.556l-3.99 3.689A5.39 5.39 0 0112 24zm0-22a9 9 0 00-6.364 15.364L9.57 21a3.516 3.516 0 004.838.019l3.984-3.682a9 9 0 00-.029-12.7A8.94 8.94 0 0012 2zm0 16a7 7 0 117-7 7.008 7.008 0 01-7 7zm0-12a5 5 0 105 5 5.006 5.006 0 00-5-5zm1.707 6.707a1 1 0 000-1.414L13 10.586V9a1 1 0 00-2 0v2a1 1 0 00.293.707l1 1a1 1 0 001.414 0z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8380">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default MapTimeIcon
