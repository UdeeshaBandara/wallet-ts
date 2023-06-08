import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function FolderaddIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8075)">
        <Path
          d="M16 15a1 1 0 01-1 1h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2v-2a1 1 0 012 0v2h2a1 1 0 011 1zm8-7v10a5.006 5.006 0 01-5 5H5a5.006 5.006 0 01-5-5V6a5.006 5.006 0 015-5h2.528c.465 0 .924.109 1.341.316L12.025 2.9c.14.067.292.101.447.1H19a5.006 5.006 0 015 5zM2 6v1h19.816A3 3 0 0019 5h-6.528c-.465 0-.924-.109-1.341-.316L7.975 3.105A1.016 1.016 0 007.528 3H5a3 3 0 00-3 3zm20 12V9H2v9a3 3 0 003 3h14a3 3 0 003-3z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8075">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FolderaddIcon
