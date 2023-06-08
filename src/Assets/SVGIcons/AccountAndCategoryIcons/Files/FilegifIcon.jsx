import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function FilegifIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8026)">
        <Path
          d="M19 0H5a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h11.343a4.968 4.968 0 003.536-1.465l2.656-2.656A4.968 4.968 0 0024 16.343V5a5.006 5.006 0 00-5-5zM2 19V5a3 3 0 013-3h14a3 3 0 013 3v10h-4a3 3 0 00-3 3v4H5a3 3 0 01-3-3zm16.465 2.121c-.402.4-.91.678-1.465.8V18a1 1 0 011-1h3.922a2.98 2.98 0 01-.8 1.465l-2.657 2.656zM8 8.75v.334a2 2 0 01-2 1.984 1.99 1.99 0 01-2-1.984v-2.1a1.991 1.991 0 013.035-1.69c.312.19.567.462.737.785a.626.626 0 11-1.11.58A.78.78 0 006 6.25a.742.742 0 00-.749.75v2.068A.742.742 0 006 9.819a.759.759 0 00.75-.735V9H6.5a.5.5 0 110-1h.75a.75.75 0 01.75.75zm6-.112v1.8a.624.624 0 11-1.25 0V5.625A.625.625 0 0113.375 5h2.013a.625.625 0 110 1.25H14v1.138h1.239a.625.625 0 110 1.25H14zm-3-3.013v4.819a.624.624 0 11-1.25 0V5.625a.625.625 0 011.25 0z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8026">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FilegifIcon
