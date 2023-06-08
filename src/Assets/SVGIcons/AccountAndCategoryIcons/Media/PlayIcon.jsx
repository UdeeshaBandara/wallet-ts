import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function PlayIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8556)">
        <Path
          d="M19 24H5a5.006 5.006 0 01-5-5V5a5.006 5.006 0 015-5h14a5.006 5.006 0 015 5v14a5.006 5.006 0 01-5 5zM5 2a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3H5zm4.342 15.005a2.368 2.368 0 01-1.186-.323 2.313 2.313 0 01-1.164-2.021V9.339a2.337 2.337 0 013.5-2.029l5.278 2.635a2.336 2.336 0 01.049 4.084l-5.376 2.687a2.2 2.2 0 01-1.101.289zm-.025-8a.327.327 0 00-.325.334v5.322a.337.337 0 00.5.293l5.376-2.688a.315.315 0 00.12-.266.324.324 0 00-.169-.292L9.545 9.073a.462.462 0 00-.228-.068z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8556">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PlayIcon
