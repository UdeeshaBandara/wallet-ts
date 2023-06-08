import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CameraIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7637)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M19 4h-.508l-2.184-2.832A3.024 3.024 0 0013.932 0h-3.864a3.023 3.023 0 00-2.376 1.168L5.508 4H5a5.006 5.006 0 00-5 5v10a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V9a5.006 5.006 0 00-5-5zM9.276 2.39a1.006 1.006 0 01.792-.39h3.864a1.008 1.008 0 01.792.39L15.966 4H8.034l1.242-1.61zM22 19a3 3 0 01-3 3H5a3 3 0 01-3-3V9a3 3 0 013-3h14a3 3 0 013 3v10z" />
        <Path d="M12 8a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z" />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7637">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CameraIcon
