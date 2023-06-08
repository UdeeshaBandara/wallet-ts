import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function FolderIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8078)">
        <Path
          d="M19 3h-6.528a1.019 1.019 0 01-.447-.1L8.869 1.316A3.014 3.014 0 007.528 1H5a5.006 5.006 0 00-5 5v12a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V8a5.006 5.006 0 00-5-5zM5 3h2.528a1.02 1.02 0 01.447.1l3.156 1.579c.416.21.875.32 1.341.321H19a3 3 0 012.779 1.882L2 6.994V6a3 3 0 013-3zm14 18H5a3 3 0 01-3-3V8.994l20-.113V18a3 3 0 01-3 3z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8078">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FolderIcon
