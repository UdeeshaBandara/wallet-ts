import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CommentAltIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7761)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M20 0H4a4 4 0 00-4 4v12a4 4 0 004 4h2.9l4.451 3.763a1 1 0 001.292 0L17.1 20H20a4 4 0 004-4V4a4 4 0 00-4-4zm2 16a2 2 0 01-2 2h-2.9a2 2 0 00-1.291.473L12 21.69l-3.807-3.217A2 2 0 006.9 18H4a2 2 0 01-2-2V4a2 2 0 012-2h16a2 2 0 012 2v12z" />
        <Path d="M7 7h5a1 1 0 100-2H7a1 1 0 000 2zM17 9H7a1 1 0 000 2h10a1 1 0 000-2zM17 13H7a1 1 0 000 2h10a1 1 0 100-2z" />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7761">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CommentAltIcon
