import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Crypto1Icon(props) {
  return (
    <Svg
      width={22}
      height={25}
      viewBox="0 0 22 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.554 20.459V4.864L11.688.777l9.939 3.556-10.951 4.036v15.72L.554 20.46zm11.267-3.113v-8.02l9.806-3.746v15.397l-9.806-3.63z"
        fill={props.isWhite ? "#fff" : "#374957"}
      />
    </Svg>
  )
}

export default Crypto1Icon
