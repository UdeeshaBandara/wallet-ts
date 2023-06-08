import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Crypto4Icon(props) {
  return (
    <Svg
      width={16}
      height={25}
      viewBox="0 0 16 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.531 8.425l2.565 1.465V2.564L7.967 0 0 4.487v15.934L7.967 25l7.876-4.67v-7.875L8.24 7.874 5.677 9.157l7.602 4.488.09 5.403-5.402 3.022-5.495-3.114V5.769l5.495-3.022 2.564 1.374v4.304z"
        fill={props.isWhite ? "#fff" : "#374957"}
      />
      <Path
        d="M7.692 12.821l1.74-.916 1.923 1.191-5.678 3.205V9.708l2.015 1.19"
        fill={props.isWhite ? "#fff" : "#374957"}
      />
    </Svg>
  )
}

export default Crypto4Icon
