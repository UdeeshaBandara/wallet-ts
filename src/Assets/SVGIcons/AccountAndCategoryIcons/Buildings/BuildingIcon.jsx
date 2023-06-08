import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function BuildingIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_386_9726)">
        <Path
          d="M7 14a1 1 0 01-1 1H5a1 1 0 010-2h1a1 1 0 011 1zm4-1h-1a1 1 0 000 2h1a1 1 0 000-2zm-5 4H5a1 1 0 000 2h1a1 1 0 000-2zm5 0h-1a1 1 0 000 2h1a1 1 0 000-2zM6 5H5a1 1 0 000 2h1a1 1 0 000-2zm5 0h-1a1 1 0 000 2h1a1 1 0 100-2zM6 9H5a1 1 0 000 2h1a1 1 0 000-2zm5 0h-1a1 1 0 000 2h1a1 1 0 000-2zm13 1v9a5.006 5.006 0 01-5 5H5a5.006 5.006 0 01-5-5V5a5.006 5.006 0 015-5h6a5.006 5.006 0 015 5h3a5.006 5.006 0 015 5zM5 22h9V5a3 3 0 00-3-3H5a3 3 0 00-3 3v14a3 3 0 003 3zm17-12a3 3 0 00-3-3h-3v15h3a3 3 0 003-3v-9zm-3 3a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2zm0-8a1 1 0 100 2 1 1 0 000-2z"
          fill={props.isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_386_9726">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default BuildingIcon
