import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function FileaddIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8006)">
        <Path
          d="M16 16a1 1 0 01-1 1h-2v2a1 1 0 01-2 0v-2H9a1 1 0 110-2h2v-2a1 1 0 012 0v2h2a1 1 0 011 1zm6-5.515V19a5.006 5.006 0 01-5 5H7a5.006 5.006 0 01-5-5V5a5.006 5.006 0 015-5h4.515a6.958 6.958 0 014.95 2.05l3.484 3.486A6.95 6.95 0 0122 10.485zm-6.949-7.021A5.01 5.01 0 0014 2.684V7a1 1 0 001 1h4.316a4.98 4.98 0 00-.781-1.05l-3.484-3.486zM20 10.485c0-.165-.032-.323-.047-.485H15a3 3 0 01-3-3V2.047c-.162-.015-.321-.047-.485-.047H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3v-8.515z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8006">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FileaddIcon
