import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function NetworkIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7673)">
        <Path
          d="M20 12a3.995 3.995 0 00-3.172 1.566l-.07-.03A5 5 0 0010.75 7.16l-.09-.172a3.995 3.995 0 10-1.78.913l.073.137a4.992 4.992 0 00-1.134 6.7L5.933 16.5a4 4 0 101.455 1.378l1.838-1.718a4.993 4.993 0 006.54-.871l.278.119A4 4 0 1020 12zM6 4a2 2 0 114 0 2 2 0 01-4 0zM4 22a2 2 0 110-3.999 2 2 0 010 4zm8-7a3 3 0 01-1.6-5.534l.407-.217A3 3 0 1112 15.001zm8 3a2 2 0 110-3.999 2 2 0 010 4z"
          fill={props.isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7673">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default NetworkIcon
