import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function AddressBookIcon({isWhite}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_330_9662)">
        <Path
          d="M18 0H8a5 5 0 00-4.576 3H2a1 1 0 000 2h1v2H2a1 1 0 000 2h1v2H2a1 1 0 000 2h1v2H2a1 1 0 000 2h1v2H2a1 1 0 000 2h1.424A5 5 0 008 24h10a5.006 5.006 0 005-5V5a5.006 5.006 0 00-5-5zm3 19a3 3 0 01-3 3H8a3 3 0 01-3-3V5a3 3 0 013-3h10a3 3 0 013 3v14zm-8-7a3 3 0 100-6 3 3 0 000 6zm5 6a1 1 0 01-2 0 3 3 0 00-6 0 1 1 0 11-2 0c.211-6.608 9.791-6.606 10 0z"
          fill={isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_330_9662">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default AddressBookIcon
