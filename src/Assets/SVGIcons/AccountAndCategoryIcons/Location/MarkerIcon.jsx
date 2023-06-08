import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function MarkerIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8383)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M12 6a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z" />
        <Path d="M12 24a5.27 5.27 0 01-4.31-2.2c-3.812-5.257-5.745-9.209-5.745-11.747a10.055 10.055 0 0120.11 0c0 2.538-1.933 6.49-5.744 11.747a5.271 5.271 0 01-4.31 2.2zm0-21.819a7.883 7.883 0 00-7.874 7.874c0 2.01 1.893 5.727 5.33 10.466a3.145 3.145 0 005.09 0c3.435-4.739 5.328-8.456 5.328-10.466A7.883 7.883 0 0012 2.181z" />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8383">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default MarkerIcon
