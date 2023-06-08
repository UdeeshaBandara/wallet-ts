import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function BankIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_386_9724)">
        <Path
          d="M24 23a1 1 0 01-1 1H1a1 1 0 010-2h22a1 1 0 011 1zM.29 8.552a2.443 2.443 0 01.154-2.566c.427-.627 1-1.142 1.668-1.5l7.5-3.904a5.174 5.174 0 014.775 0l7.5 3.907c.668.358 1.24.873 1.668 1.5a2.443 2.443 0 01.153 2.566A2.713 2.713 0 0121.292 10H21v8h1a1 1 0 110 2H2a1 1 0 010-2h1v-8h-.292A2.713 2.713 0 01.29 8.552zM5 18h3v-8H5v8zm5-8v8h4v-8h-4zm9 0h-3v8h3v-8zM2.063 7.625A.717.717 0 002.708 8h18.584a.717.717 0 00.645-.375.452.452 0 00-.024-.5 2.7 2.7 0 00-.95-.864l-7.5-3.907a3.176 3.176 0 00-2.925 0l-7.5 3.907a2.712 2.712 0 00-.95.865.452.452 0 00-.025.499z"
          fill={props.isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_386_9724">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default BankIcon
