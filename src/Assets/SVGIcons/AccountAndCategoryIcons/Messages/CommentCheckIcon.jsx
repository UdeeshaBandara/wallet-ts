import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CommentCheckIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7767)">
        <Path
          d="M10.5 17a2.001 2.001 0 01-1.416-.586L5.3 12.715a1 1 0 011.4-1.43l3.793 3.707 6.806-6.7a1 1 0 011.4 1.424l-6.793 6.707A1.983 1.983 0 0110.5 17zM24 19v-6.66A12.209 12.209 0 0012.836.028 12 12 0 00.029 12.854C.47 19.208 6.082 24 13.083 24H19a5.006 5.006 0 005-5zM12.7 2.024A10.2 10.2 0 0122 12.34V19a3 3 0 01-3 3h-5.917C7.049 22 2.4 18.1 2.025 12.716A10 10 0 0112.7 2.024z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7767">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CommentCheckIcon
