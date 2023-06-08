import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function PictureIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8542)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M19 0H5a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V5a5.006 5.006 0 00-5-5zM5 2h14a3 3 0 013 3v14a2.95 2.95 0 01-.3 1.285l-9.163-9.163a5.001 5.001 0 00-7.072 0L2 14.586V5a3 3 0 013-3zm0 20a3 3 0 01-3-3v-1.586l4.878-4.878a3 3 0 014.244 0l9.163 9.164c-.4.196-.84.298-1.285.3H5z" />
        <Path d="M16 10.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8542">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PictureIcon
