import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function PizzaSliceIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8549)" fill={props.isWhite ? "#fff" : "#374957"}>
        <Path d="M23.2.8a2.716 2.716 0 00-2.9-.623L3.155 6.93a4.976 4.976 0 00-3 5.824 15.855 15.855 0 0011.094 11.1 4.983 4.983 0 005.825-3.01l6.758-17.171A2.709 2.709 0 0023.2.8zM11.746 21.913a13.8 13.8 0 01-9.656-9.657 2.949 2.949 0 011.265-3.18 11.987 11.987 0 0011.569 11.572 2.947 2.947 0 01-3.178 1.265zm4.027-3.227c-6.191-.1-10.355-4.265-10.456-10.457l15.693-6.18a.717.717 0 01.77.17.7.7 0 01.182.747l-.662 1.68c-5.758-1.98-8.942 6.21-3.413 8.669l-2.114 5.37zm2.847-7.232a2.654 2.654 0 011.943-4.935l-1.943 4.935z" />
        <Path d="M11 9a2 2 0 100 4 2 2 0 000-4z" />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8549">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PizzaSliceIcon
