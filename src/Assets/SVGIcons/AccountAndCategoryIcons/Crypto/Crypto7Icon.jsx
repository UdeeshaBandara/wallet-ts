import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Crypto7Icon(props) {
  return (
    <Svg
      width={18}
      height={24}
      viewBox="0 0 18 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.87 6.38L8.069 4.575a1.265 1.265 0 011.749-1.828l.042.042 4.018 4.018a1.263 1.263 0 010 1.788l-4.023 4.018a1.264 1.264 0 01-1.786-1.786l1.887-1.886a6.295 6.295 0 105.2 6.222v-13.9a1.263 1.263 0 012.527 0v14.07a8.843 8.843 0 11-7.815-8.958l.002.005z"
        fill={props.isWhite ? "#fff" : "#374957"}
      />
    </Svg>
  )
}

export default Crypto7Icon
