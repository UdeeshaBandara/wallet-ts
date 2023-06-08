import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function MapHomeIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8365)">
        <Path
          d="M12 0a11 11 0 00-7.75 18.806l3.943 3.641a5.442 5.442 0 007.593.02l3.992-3.689A11 11 0 0012 0zm6.392 17.337l-3.984 3.681A3.513 3.513 0 019.57 21l-3.935-3.636A9 9 0 1121 11a8.924 8.924 0 01-2.608 6.337zM16.71 7.663l-3-2.081a3.008 3.008 0 00-3.42 0l-3 2.081A3 3 0 006 10.128V13.5A2.5 2.5 0 008.5 16h7a2.5 2.5 0 002.5-2.5v-3.372a3 3 0 00-1.29-2.465zM16 13.5a.5.5 0 01-.5.5H14v-2a1 1 0 00-1-1h-2a1 1 0 00-1 1v2H8.5a.5.5 0 01-.5-.5v-3.372a1 1 0 01.43-.822l3-2.081a1.006 1.006 0 011.14 0l3 2.081a1 1 0 01.43.822V13.5z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8365">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default MapHomeIcon
