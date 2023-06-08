import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function ListCheckIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8329)">
        <Path
          d="M4 6a2.982 2.982 0 01-2.122-.878L.334 3.748a1 1 0 111.332-1.494L3.25 3.668a1 1 0 001.456.04L8.31.277a1 1 0 011.378 1.448l-3.59 3.414A2.964 2.964 0 014 6zm20-2a1 1 0 00-1-1H13a1 1 0 100 2h10a1 1 0 001-1zM6.1 13.14l3.589-3.414A1 1 0 108.31 8.277l-3.6 3.43a1.023 1.023 0 01-1.414 0l-1.59-1.585a1 1 0 00-1.414 1.415l1.585 1.584a3 3 0 004.226.018H6.1zM24 12a1 1 0 00-1-1H13a1 1 0 000 2h10a1 1 0 001-1zM6.1 21.139l3.585-3.415a1 1 0 10-1.378-1.448l-3.6 3.431a.999.999 0 01-1.456-.04l-1.585-1.414a1 1 0 00-1.332 1.494l1.544 1.375a3 3 0 004.226.017H6.1zM24 20a1 1 0 00-1-1H13a1 1 0 000 2h10a1 1 0 001-1z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8329">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ListCheckIcon
