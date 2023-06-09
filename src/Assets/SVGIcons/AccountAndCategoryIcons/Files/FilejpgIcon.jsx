import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function FilejpgIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8266)">
        <Path
          d="M19 0H5a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h11.343a4.968 4.968 0 003.535-1.465l2.658-2.656A4.967 4.967 0 0024 16.343V5a5.006 5.006 0 00-5-5zM2 19V5a3 3 0 013-3h14a3 3 0 013 3v10h-4a3 3 0 00-3 3v4H5a3 3 0 01-3-3zm16.464 2.121a3.02 3.02 0 01-1.464.8V18a1 1 0 011-1h3.922a2.978 2.978 0 01-.8 1.465l-2.658 2.656zM14 9.084v-2.1a1.991 1.991 0 013.035-1.69c.312.19.567.461.737.784a.626.626 0 01-1.11.58A.78.78 0 0016 6.25a.742.742 0 00-.749.75v2.068a.742.742 0 00.749.751.759.759 0 00.75-.735V9h-.25a.5.5 0 010-1h.75a.75.75 0 01.75.75v.334a2 2 0 01-2 1.984 1.991 1.991 0 01-2-1.984zM8 5.65v3.356a2.069 2.069 0 01-2.079 2.063A2.11 2.11 0 014.072 9.9a.651.651 0 111.162-.587.818.818 0 00.687.459.77.77 0 00.779-.783v-3.34a.65.65 0 111.3 0v.001zM11.09 5H10a1 1 0 00-1 1v4.444a.625.625 0 101.25 0V9.223h.84a2.11 2.11 0 100-4.223zm0 2.969h-.832l-.006-1.719h.838a.86.86 0 110 1.719z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8266">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FilejpgIcon
