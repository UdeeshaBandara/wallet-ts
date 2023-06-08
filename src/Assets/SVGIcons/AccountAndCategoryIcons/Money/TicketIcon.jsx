import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function TicketIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8946)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M16 0h-.13a2.02 2.02 0 00-1.941 1.532 2 2 0 01-3.858 0A2.02 2.02 0 008.13 0H8a5.006 5.006 0 00-5 5v16a3 3 0 003 3h2.13a2.02 2.02 0 001.941-1.532 2 2 0 013.858 0A2.02 2.02 0 0015.87 24H18a3 3 0 003-3V5a5.006 5.006 0 00-5-5zm2 22l-2.143-.063A4 4 0 008.13 22H6a1 1 0 01-1-1v-4h2a1 1 0 000-2H5V5a3 3 0 013-3l.143.063A4.01 4.01 0 0012 5a4.07 4.07 0 003.893-3H16a3 3 0 013 3v10h-2a1 1 0 000 2h2v4a1 1 0 01-1 1z" />
        <Path d="M13 15h-2a1 1 0 000 2h2a1 1 0 100-2z" />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8946">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default TicketIcon
