import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function ElearningIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7941)">
        <Path
          d="M19.9 3.091a3.999 3.999 0 00-5-2.938l-1.724.493c-.437.126-.839.35-1.176.654a2.981 2.981 0 00-1.176-.654L9.1.153a4 4 0 00-4.995 2.938A5 5 0 000 8.001v7a5.006 5.006 0 005 5h6v2H8a1 1 0 000 2h8a1 1 0 100-2h-3v-2h6a5.005 5.005 0 005-5V8a5 5 0 00-4.1-4.91zm-6.9.44a1 1 0 01.725-.96l1.725-.494A2 2 0 0118 4v3.938a2.006 2.006 0 01-1.45 1.921L13 10.873V3.531zm-6.2-1.13a1.993 1.993 0 011.75-.324l1.725.493a1 1 0 01.725.961v7.342L7.45 9.86A2.006 2.006 0 016 7.94V4a1.987 1.987 0 01.8-1.6zM22 15a3 3 0 01-3 3H5a3 3 0 01-3-3V8a3 3 0 012-2.817v2.754a4.014 4.014 0 002.9 3.845l3.451.987a6.018 6.018 0 003.3 0l3.451-.987A4.014 4.014 0 0020 7.938V5.184A3 3 0 0122 8v7z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7941">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ElearningIcon
