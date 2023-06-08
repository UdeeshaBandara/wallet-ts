import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CloudUploadIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7745)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M18.4 7.379a1.128 1.128 0 01-.769-.754A8.002 8.002 0 007.337 1.33 8 8 0 002.53 11.862a1.046 1.046 0 01-.308 1.238 5.5 5.5 0 00-2.166 5.2A5.622 5.622 0 005.683 23H11a1 1 0 000-2H5.683a3.614 3.614 0 01-3.646-2.981 3.456 3.456 0 011.376-3.313A3.02 3.02 0 004.4 11.14a6.113 6.113 0 01-.073-4.126A5.956 5.956 0 019.215 3.05 6.11 6.11 0 019.987 3a5.984 5.984 0 015.756 4.28 2.977 2.977 0 002.01 1.99 5.935 5.935 0 01.778 11.09.976.976 0 00-.53.888.987.987 0 001.387.915c4.134-1.987 6.38-7.214 2.88-12.264a6.935 6.935 0 00-3.868-2.52z" />
        <Path d="M18.707 16.706a1 1 0 000-1.413l-1.586-1.586a3 3 0 00-4.242 0l-1.586 1.585a1 1 0 001.414 1.414L14 15.414V23a1 1 0 002 0v-7.586l1.293 1.292a1 1 0 001.414 0z" />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7745">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CloudUploadIcon
