import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function PyramidIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7683)">
        <Path
          d="M23.413 18.24l-7.82-15.965a4 4 0 00-7.185 0L.587 18.24A4 4 0 004.179 24h15.64a4 4 0 003.594-5.76zM19.6 15H4.4l2.45-5h10.3l2.45 5zM10.2 3.155a2 2 0 013.592 0L16.169 8h-8.34l2.37-4.845zm11.314 17.9a1.963 1.963 0 01-1.7.942H4.179a2 2 0 01-1.8-2.88L3.42 17h17.157l1.038 2.12a1.96 1.96 0 01-.098 1.938l-.004-.003z"
          fill={props.isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7683">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PyramidIcon
