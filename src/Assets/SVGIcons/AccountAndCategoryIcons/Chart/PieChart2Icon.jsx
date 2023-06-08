import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function PieChart2Icon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7680)">
        <Path
          d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm9.573 9.12l-8.908 1.732a4.945 4.945 0 01-.368-.679l-3.34-7.7A9.987 9.987 0 0121.573 9.12zM12 22A9.995 9.995 0 017.124 3.278l3.338 7.691a7.011 7.011 0 002.167 2.772l6.653 5.092A9.965 9.965 0 0112 22zm8.5-4.755l-6.125-4.688 7.581-1.473c.027.3.046.607.046.916a9.925 9.925 0 01-1.502 5.245z"
          fill={props.isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7680">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PieChart2Icon
