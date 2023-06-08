import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CoffeeIcon({isWhite}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    
    >
      <Path
        d="M12 8.5c0-1.167.833-2.333 2.5-2.333a3.333 3.333 0 003.333-3.333v-.75M7.333 8.5v-.583a3.5 3.5 0 013.5-3.5 2.333 2.333 0 002.334-2.334V1.5m4.666 10.033V15.5a7 7 0 01-7 7H8.5a7 7 0 01-7-7v-3.967a.7.7 0 01.7-.7h14.933a.7.7 0 01.7.7z"
        stroke={isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.667 10.833h2.917a2.917 2.917 0 010 5.833h-1.75"
        stroke={isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CoffeeIcon
