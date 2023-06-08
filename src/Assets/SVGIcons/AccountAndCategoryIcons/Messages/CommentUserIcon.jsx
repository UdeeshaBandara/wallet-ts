import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CommentUserIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7776)">
        <Path
          d="M12 10a3 3 0 110-6 3 3 0 010 6zm-3.032 5.249a3.183 3.183 0 016.063 0 1.001 1.001 0 001.938-.5c-1.311-4.947-8.63-4.945-9.937 0a1 1 0 101.936.5zm3.041 8.416c-.493 0-.97-.18-1.338-.509L6.923 20H4a4 4 0 01-4-4V4a4 4 0 014-4h16a4 4 0 014 4v12a4 4 0 01-4 4h-2.853L13.3 23.18a1.94 1.94 0 01-1.291.485zM4 2a2 2 0 00-2 2v12a2 2 0 002 2h3.289a1 1 0 01.644.235l4.046 3.41 4.172-3.416a1 1 0 01.637-.229H20a2 2 0 002-2V4a2 2 0 00-2-2H4z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7776">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CommentUserIcon
