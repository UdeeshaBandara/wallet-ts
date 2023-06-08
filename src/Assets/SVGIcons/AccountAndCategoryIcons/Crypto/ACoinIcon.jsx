import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ACoinIcon(props) {
  return (
    <Svg
      width={18}
      height={21}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.36 10.387V8.39h16.859v1.997H.359zm0 4.594v-1.997h16.859v1.997H.359zm2.237 5.474H0L7.51 0h2.558l7.51 20.455h-2.597L8.87 3.236h-.16L2.597 20.455z"
        fill={props.isWhite ? "#fff" : "#374957"}
      />
    </Svg>
  )
}

export default ACoinIcon
