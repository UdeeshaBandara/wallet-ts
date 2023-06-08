import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Crypto5Icon(props) {
  return (
    <Svg
      width={17}
      height={24}
      viewBox="0 0 17 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.928 9.026l3.924 2.087 2.087-1.043L1.95 7.368V2.61l9.59 4.977 2.086-1.043L1.346.105A.918.918 0 000 .92v6.594a1.71 1.71 0 00.928 1.513zM15.88 7.92a.919.919 0 00-1.043-.166L.928 14.974A1.71 1.71 0 000 16.497v6.584a.918.918 0 001.346.814l13.877-7.2c.579-.3.939-.902.929-1.554V8.568a.907.907 0 00-.272-.648zm-1.67 7.106L1.95 21.39v-4.758l12.26-6.365v4.759z"
        fill={props.isWhite ? "#fff" : "#374957"}
      />
    </Svg>
  )
}

export default Crypto5Icon
