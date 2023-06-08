import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Crypto8Icon(props) {
  return (
    <Svg
      width={24}
      height={22}
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.118 11.618c-.133.01-.822.05-2.358.05-1.222 0-2.09-.036-2.394-.05-4.723-.208-8.248-1.03-8.248-2.015 0-.984 3.525-1.805 8.248-2.016v3.212a35.6 35.6 0 002.415.074c1.466 0 2.2-.06 2.333-.073V7.59c4.713.21 8.23 1.031 8.23 2.013s-3.516 1.805-8.23 2.014h.004zm0-4.361V4.383h6.577V0H2.79v4.383h6.575v2.873C4.02 7.5 0 8.56 0 9.829s4.02 2.326 9.364 2.573v9.21h4.753v-9.213c5.333-.246 9.346-1.304 9.346-2.571 0-1.268-4.01-2.326-9.346-2.572l.001.001z"
        fill={props.isWhite ? "#fff" : "#374957"}
      />
    </Svg>
  )
}

export default Crypto8Icon
