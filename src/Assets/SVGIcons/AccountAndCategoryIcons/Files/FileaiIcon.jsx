import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function FileaiIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8009)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M7.515 5.008a.744.744 0 00-1.382.013l-1.977 5.187a.626.626 0 001.168.448l.34-.89h2.31l.335.888a.625.625 0 101.17-.441L7.515 5.008zM6.14 8.514l.684-1.8.68 1.8H6.138zM11.232 4.544a.626.626 0 00-.625.625v5.262a.625.625 0 001.25 0V5.169a.625.625 0 00-.625-.625z" />
        <Path d="M19 0H5a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h11.343a4.967 4.967 0 003.536-1.464l2.656-2.658A4.967 4.967 0 0024 16.343V5a5.006 5.006 0 00-5-5zM2 19V5a3 3 0 013-3h14a3 3 0 013 3v10h-4a3 3 0 00-3 3v4H5a3 3 0 01-3-3zm16.465 2.122c-.402.401-.91.679-1.465.8V18a1 1 0 011-1h3.925a3.016 3.016 0 01-.8 1.464l-2.66 2.658z" />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8009">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FileaiIcon
