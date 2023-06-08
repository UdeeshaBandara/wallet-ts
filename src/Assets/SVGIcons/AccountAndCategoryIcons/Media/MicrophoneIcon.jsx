import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function MicrophoneIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8425)" fill={props.isWhite ? "#ffffff" : "#374957"}>
        <Path d="M12 20a8.009 8.009 0 008-8V8A8 8 0 004 8v4a8.009 8.009 0 008 8zm0-18a6.006 6.006 0 015.91 5H15a1 1 0 100 2h3v2h-3a1 1 0 000 2h2.91a5.993 5.993 0 01-11.82 0H9a1 1 0 000-2H6V9h3a1 1 0 000-2H6.09A6.006 6.006 0 0112 2z" />
        <Path d="M23 12a1 1 0 00-1 1 9.01 9.01 0 01-9 9h-2a9.011 9.011 0 01-9-9 1 1 0 10-2 0 11.013 11.013 0 0011 11h2a11.013 11.013 0 0011-11 1 1 0 00-1-1z" />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8425">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default MicrophoneIcon
