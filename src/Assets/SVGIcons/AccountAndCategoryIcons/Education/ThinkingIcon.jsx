import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function ThinkingIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8185)">
        <Path
          d="M19.8 4.419A10.9 10.9 0 009.453.106 11 11 0 002.26 17.674c.496.684.756 1.51.74 2.355v.97a3 3 0 003 3h7a3 3 0 003-3h.494a5.014 5.014 0 004.957-4.344L21.67 15H22a1.961 1.961 0 002-2c0-1.42-2.932-7.015-4.2-8.581zm.993 8.58a1 1 0 00-.991.87l-.334 2.525A3.008 3.008 0 0116.494 19H15a1 1 0 00-1 1v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-.971a5.9 5.9 0 00-1.151-3.571 9 9 0 015.876-14.37A9.267 9.267 0 0111.005 2a8.941 8.941 0 017.218 3.648A31.217 31.217 0 0122 13h-1.207zM16.2 8.012a1.001 1.001 0 00-1.366-.37l-.982.565A3.994 3.994 0 0012 7.142V6a1 1 0 00-2 0v1.142a3.994 3.994 0 00-1.855 1.064l-.982-.564a1 1 0 00-1 1.734l.993.57c-.1.343-.152.697-.156 1.054.005.356.058.71.159 1.053l-.993.57a1 1 0 101 1.735l.982-.564c.509.516 1.15.884 1.852 1.064V16a1 1 0 002 0v-1.142a3.996 3.996 0 001.855-1.064l.982.564a1.002 1.002 0 001-1.734l-.993-.571c.1-.343.152-.697.156-1.053a3.94 3.94 0 00-.16-1.053l.994-.571A1 1 0 0016.2 8.01zM11 13a2 2 0 110-4 2 2 0 010 4z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8185">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ThinkingIcon