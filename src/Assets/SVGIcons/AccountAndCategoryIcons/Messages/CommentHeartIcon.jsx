import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CommentHeartIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7770)">
        <Path
          d="M14.5 7a3.514 3.514 0 00-2.5.99 3.567 3.567 0 00-6 2.71c0 3.256 4.873 6.736 5.43 7.121a1 1 0 001.14 0c.556-.385 5.43-3.865 5.43-7.12A3.607 3.607 0 0014.5 7zM12 15.762c-1.742-1.33-4-3.56-4-5.062-.076-2.006 2.912-2.4 3-.246V11a1 1 0 002 0v-.546c.086-2.152 3.076-1.76 3 .246 0 1.5-2.26 3.732-4 5.062zM12.834.028A12 12 0 00.03 12.854C.47 19.208 6.082 24 13.082 24H19a5.006 5.006 0 005-5v-6.66A12.21 12.21 0 0012.835.028zM22 19a3 3 0 01-3 3h-5.918C7.05 22 2.4 18.1 2.025 12.716A10 10 0 0112.7 2.024 10.2 10.2 0 0122 12.34V19z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7770">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CommentHeartIcon
