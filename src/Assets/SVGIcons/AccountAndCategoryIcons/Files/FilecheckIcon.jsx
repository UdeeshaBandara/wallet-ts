import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function FilecheckIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8014)">
        <Path
          d="M19.95 5.536L16.464 2.05A6.954 6.954 0 0011.515 0H7a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h10a5.006 5.006 0 005-5v-8.515a6.955 6.955 0 00-2.05-4.949zM18.536 6.95c.305.314.568.667.781 1.05H15a1 1 0 01-1-1V2.683c.383.213.736.476 1.05.781l3.486 3.486zM20 19a3 3 0 01-3 3H7a3 3 0 01-3-3V5a3 3 0 013-3h4.515c.165 0 .323.032.485.047V7a3 3 0 003 3h4.953c.015.162.047.32.047.485V19zm-3.276-5.689a1 1 0 01-.035 1.413L13.1 18.138a3 3 0 01-4.226-.017l-1.54-1.374a1 1 0 111.332-1.494l1.585 1.414a1 1 0 001.456.04l3.6-3.431a1 1 0 011.417.035z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8014">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FilecheckIcon
