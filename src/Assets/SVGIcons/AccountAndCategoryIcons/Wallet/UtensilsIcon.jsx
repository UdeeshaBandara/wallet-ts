import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function UtensilsIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_9098)">
        <Path
          d="M12 1v6a5.01 5.01 0 01-4 4.9V23a1 1 0 11-2 0V11.9A5.01 5.01 0 012 7V1a1 1 0 012 0v6a3 3 0 002 2.816V1a1 1 0 012 0v8.816A3 3 0 0010 7V1a1 1 0 012 0zm10 9a12.64 12.64 0 01-5 9.775V23a1 1 0 01-2 0V2A1.9 1.9 0 0116.131.217a2.194 2.194 0 012.356.459A13.474 13.474 0 0122 10zm-2 0a11.7 11.7 0 00-3-7.937V17.07A10.3 10.3 0 0020 10z"
          fill={props.isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_9098">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default UtensilsIcon
