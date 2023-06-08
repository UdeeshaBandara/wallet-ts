import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function GymIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8170)">
        <Path
          d="M22.942 6.837L20.76 4.654l.947-.947a1 1 0 10-1.414-1.414l-.947.947-2.183-2.182a3.7 3.7 0 00-5.105 0 3.61 3.61 0 000 5.106l2.182 2.182-5.894 5.894-2.183-2.182a3.7 3.7 0 00-5.105 0 3.608 3.608 0 000 5.106l2.182 2.182-.947.947a1 1 0 101.414 1.414l.947-.947 2.183 2.182a3.61 3.61 0 105.105-5.105L9.76 15.655l5.9-5.895 2.182 2.182a3.61 3.61 0 105.105-5.105h-.005zM11 20.39a1.6 1.6 0 01-.472 1.138 1.647 1.647 0 01-2.277 0l-5.779-5.78a1.61 1.61 0 012.277-2.276l5.78 5.779A1.6 1.6 0 0111 20.39zm10.528-9.862a1.647 1.647 0 01-2.277 0l-5.779-5.78a1.61 1.61 0 012.277-2.276l5.78 5.779a1.608 1.608 0 010 2.277z"
          fill={props.isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8170">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default GymIcon
