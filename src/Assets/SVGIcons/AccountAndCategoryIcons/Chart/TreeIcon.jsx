import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function TreeIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7689)">
        <Path
          d="M21.736 16.4A5.009 5.009 0 0017 13h-4v-1.084a6 6 0 10-2 0V13H7a5.009 5.009 0 00-4.736 3.4 4 4 0 102.447-.334A3 3 0 017 15h4v1.127a4 4 0 102 0V15h4a2.998 2.998 0 012.289 1.063 4 4 0 102.447.334v.003zM8 6a4 4 0 118 0 4 4 0 01-8 0zM6 20a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4.001 0 2 2 0 014 0zm6 2a2 2 0 110-4 2 2 0 010 4z"
          fill={props.isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7689">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default TreeIcon
