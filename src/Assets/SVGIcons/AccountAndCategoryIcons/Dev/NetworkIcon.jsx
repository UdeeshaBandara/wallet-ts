import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function NetworkIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8482)">
        <Path
          d="M23 20h-8.184A3.001 3.001 0 0013 18.184V14h6a2.99 2.99 0 002-5.22V4a4 4 0 00-4-4H7a4 4 0 00-4 4v4.78A2.99 2.99 0 005 14h6v4.184A3 3 0 009.184 20H1a1 1 0 000 2h8.184a2.983 2.983 0 005.632 0H23a1 1 0 000-2zM5 4a2 2 0 012-2h10a2 2 0 012 2v4h-3.586A1.986 1.986 0 0014 8.586L13.586 9h-3.172L10 8.586A1.986 1.986 0 008.586 8H5V4zm-1 7a1 1 0 011-1h3.586l.414.414a1.985 1.985 0 001.414.586h3.172A1.986 1.986 0 0015 10.414l.414-.414H19a1 1 0 010 2H5a1 1 0 01-1-1zm8 11a1 1 0 110-2 1 1 0 010 2z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8482">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default NetworkIcon
