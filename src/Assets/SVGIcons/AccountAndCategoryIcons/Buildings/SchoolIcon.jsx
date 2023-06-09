import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SchoolIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_386_9728)">
        <Path
          d="M19 6h-4.679A3.95 3.95 0 0013 5.388V5l3.53-1.652a1 1 0 000-1.7l-3.2-1.5A1.637 1.637 0 0011 1.636v3.752c-.474.12-.922.328-1.32.612H5a5.006 5.006 0 00-5 5v10a3 3 0 003 3h18a3 3 0 003-3V11a5.006 5.006 0 00-5-5zm2.816 4h-2.159a3.017 3.017 0 01-2.121-.879l-1.122-1.12H19a3 3 0 012.816 2zM5 8h2.586L6.464 9.121a3.017 3.017 0 01-2.121.88H2.184A3 3 0 015 8zm8 14h-2v-3a1 1 0 012 0v3zm8 0h-6v-3a3 3 0 00-6 0v3H3a1 1 0 01-1-1v-9h2.343a4.97 4.97 0 003.535-1.465l2.708-2.707a2 2 0 012.828 0l2.708 2.707A4.969 4.969 0 0019.657 12H22v9a1 1 0 01-1 1zM7 15a1 1 0 01-1 1H5a1 1 0 010-2h1a1 1 0 011 1zm0 4a1 1 0 01-1 1H5a1 1 0 010-2h1a1 1 0 011 1zm13-4a1 1 0 01-1 1h-1a1 1 0 010-2h1a1 1 0 011 1zm0 4a1 1 0 01-1 1h-1a1 1 0 010-2h1a1 1 0 011 1zm-6-7a2 2 0 11-4 0 2 2 0 014 0z"
          fill={props.isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_386_9728">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SchoolIcon
