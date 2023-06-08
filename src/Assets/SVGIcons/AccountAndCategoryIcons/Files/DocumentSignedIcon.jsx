import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function DocumentSignedIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7919)">
        <Path
          d="M19.535 3.122l-1.656-1.658A4.967 4.967 0 0014.343 0H8a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h8a5.006 5.006 0 005-5V6.657a4.968 4.968 0 00-1.465-3.535zm-1.414 1.414c.142.141.269.297.379.464H16V2.5a3.1 3.1 0 01.465.38l1.656 1.656zM19 19a3 3 0 01-3 3H8a3 3 0 01-3-3V5a3 3 0 013-3h6v3a2 2 0 002 2h3v12zM16 9a1 1 0 110 2H8a1 1 0 110-2h8zm1 5a1 1 0 01-1 1H8a1 1 0 110-2h8a1 1 0 011 1zm-.192 3.413a1 1 0 01-.217 1.394A6.464 6.464 0 0113.135 20a3.252 3.252 0 01-2-.7c-.328-.225-.453-.3-.7-.3-.669.104-1.3.377-1.832.794a1 1 0 01-1.214-1.588A5.862 5.862 0 0110.439 17c.666.01 1.31.24 1.832.655.238.214.544.336.864.345a4.585 4.585 0 002.277-.809 1 1 0 011.396.222z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7919">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DocumentSignedIcon
