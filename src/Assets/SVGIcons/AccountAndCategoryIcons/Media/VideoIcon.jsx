import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function VideoIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_9119)">
        <Path
          d="M22.9 8.956a1.987 1.987 0 00-2.092.184l-1.833 1.361A5.007 5.007 0 0014 6.001h-.085L9.793 1.88a2.976 2.976 0 00-2.121-.879H1a1 1 0 000 2h6.672c.265 0 .52.106.707.293l2.707 2.707H5a5.006 5.006 0 00-5 5v8a5.006 5.006 0 005 5h9a5.007 5.007 0 004.975-4.5l1.83 1.364a2 2 0 003.2-1.6v-8.521A1.988 1.988 0 0022.9 8.956zM17 19.001a3 3 0 01-3 3H5a3 3 0 01-3-3v-8a3 3 0 013-3h9a3 3 0 013 3v8zm5 .257l-3-2.236V12.98l3-2.236v8.514z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_9119">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default VideoIcon
