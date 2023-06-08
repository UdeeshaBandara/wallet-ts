import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BitcoinIcon(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14 1.167a12.833 12.833 0 100 25.666 12.833 12.833 0 000-25.666zM14 24.5a10.5 10.5 0 110-21 10.5 10.5 0 010 21zm2.334-16.333V7A1.167 1.167 0 0014 7v1.167h-1.166V7A1.167 1.167 0 0010.5 7v1.167H9.334a1.167 1.167 0 000 2.333H10.5v7H9.334a1.167 1.167 0 100 2.334H10.5V21a1.167 1.167 0 102.334 0v-1.166H14V21a1.167 1.167 0 102.334 0v-1.166a3.5 3.5 0 003.5-3.5A3.5 3.5 0 0018.935 14a3.5 3.5 0 00.899-2.333 3.5 3.5 0 00-3.5-3.5zm0 9.333h-3.5v-2.333h3.5a1.167 1.167 0 110 2.333zm0-4.666h-3.5V10.5h3.5a1.167 1.167 0 110 2.334z"
        fill={props.isWhite ? "#ffffff" : "#374957"}
      />
    </Svg>
  )
}

export default BitcoinIcon
