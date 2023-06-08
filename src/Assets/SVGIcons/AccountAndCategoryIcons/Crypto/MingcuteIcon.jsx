import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function MingcuteIcon(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_394_9369)">
        <Path
          d="M6.658 5.008a1.167 1.167 0 00-1.65 1.65l4.866 4.868a5.832 5.832 0 008.251 0l4.866-4.867a1.166 1.166 0 00-1.65-1.65l-4.868 4.865a3.5 3.5 0 01-4.949 0L6.658 5.008zm0 17.983a1.167 1.167 0 01-1.65-1.65l4.866-4.867a5.832 5.832 0 018.251 0l4.866 4.867a1.166 1.166 0 01-1.65 1.65l-4.867-4.866a3.5 3.5 0 00-4.949 0l-4.867 4.866z"
          fill={props.isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_394_9369">
          <Path fill="#fff" d="M0 0H28V28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default MingcuteIcon
