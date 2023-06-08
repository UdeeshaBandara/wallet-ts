import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Crypto6Icon(props) {
  return (
    <Svg
      width={22}
      height={26}
      viewBox="0 0 22 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11 0L8.672 1.365l-6.343 3.74L0 6.471v12.94l2.328 1.366 6.402 3.74 2.328 1.365 2.328-1.365 6.286-3.74L22 19.412V6.47l-2.328-1.366-6.344-3.74L11 0zM4.656 16.681v-7.48L11 5.461l6.344 3.74v7.48L11 20.421l-6.344-3.74z"
        fill={props.isWhite ? "#fff" : "#374957"}
      />
    </Svg>
  )
}

export default Crypto6Icon
