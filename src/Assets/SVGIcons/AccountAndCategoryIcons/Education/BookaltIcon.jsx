import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function BookaltIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7562)">
        <Path
          d="M22.2 2.163a4.992 4.992 0 00-4.1-1.081l-3.822.694A4 4 0 0012 3.065a4 4 0 00-2.284-1.29L5.9 1.083A5 5 0 000 6v10.793a5 5 0 004.105 4.919l6.286 1.143a9.001 9.001 0 003.218 0l6.291-1.143a5 5 0 004.1-4.92V6a4.983 4.983 0 00-1.8-3.837zM11 20.928a7.339 7.339 0 01-.252-.041l-6.285-1.142A3 3 0 012 16.793V6a3 3 0 013.54-2.951l3.82.7A2 2 0 0111 5.712v15.216zm11-4.135a3 3 0 01-2.463 2.952l-6.285 1.142a7.339 7.339 0 01-.252.04V5.713a2 2 0 011.642-1.968l3.821-.7A3 3 0 0122 6v10.793z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7562">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default BookaltIcon
