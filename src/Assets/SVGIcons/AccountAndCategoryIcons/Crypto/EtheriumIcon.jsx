import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EtheriumIcon(props) {
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
        d="M14 25.666c6.443 0 11.666-5.223 11.666-11.666 0-6.444-5.223-11.667-11.666-11.667C7.556 2.333 2.333 7.556 2.333 14c0 6.443 5.223 11.666 11.667 11.666z"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.166 14l5.833-8.167L19.833 14M8.166 14l5.833 8.166L19.833 14M8.166 14l5.833-2.334L19.833 14M8.166 14l5.833 2.333L19.833 14"
        stroke={props.isWhite ? "#fff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default EtheriumIcon
