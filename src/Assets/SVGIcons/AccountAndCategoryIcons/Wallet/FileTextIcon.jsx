import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FileTextIcon({isWhite}) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    
    >
      <Path
        d="M14.69 2.475h-8a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2v-12l-6-6z"
        stroke={isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.69 2.475v6h6M16.69 13.475h-8M16.69 17.475h-8M10.69 9.475h-2"
        stroke={isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default FileTextIcon
