import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function MegaphoneIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8401)">
        <Path
          d="M17 0a1 1 0 00-1 1c0 2.949-2.583 4-5 4H4a4 4 0 00-4 4v2a3.98 3.98 0 001.514 3.109l3.572 7.972A3.233 3.233 0 008.039 24a2.982 2.982 0 002.72-4.2l-2.2-4.8H11c2.417 0 5 1.051 5 4a1 1 0 002 0V1a1 1 0 00-1-1zM8.937 20.619A.983.983 0 018.039 22a1.232 1.232 0 01-1.126-.734L4.105 15h2.254l2.578 5.619zM16 14.6a7.723 7.723 0 00-5-1.6H4a2 2 0 01-2-2V9a2 2 0 012-2h7a7.723 7.723 0 005-1.595V14.6zm7.9.852a1 1 0 01-1.342.448l-2-1a1 1 0 11.894-1.79l2 1a1 1 0 01.448 1.337v.005zm-3.79-9a1 1 0 01.448-1.342l2-1a1 1 0 01.894 1.79l-2 1a1 1 0 01-1.342-.448zM20 10a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8401">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default MegaphoneIcon
