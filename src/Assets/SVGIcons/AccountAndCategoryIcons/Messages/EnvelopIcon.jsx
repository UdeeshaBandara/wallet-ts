import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function EnvelopIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7967)">
        <Path
          d="M22.459 8.1l-6.924-6.636A5.026 5.026 0 008.48 1.45L1.54 8.1A5.028 5.028 0 000 11.708V19a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5v-7.292A5.026 5.026 0 0022.459 8.1zM9.879 2.878a3.013 3.013 0 014.258.016l6.747 6.464-6.763 6.764a3.074 3.074 0 01-4.242 0L3.115 9.358l6.764-6.48zM22 19a3 3 0 01-3 3H5a3 3 0 01-3-3v-7.292c.001-.194.02-.388.059-.578l6.406 6.406a5.024 5.024 0 007.07 0l6.406-6.406c.038.19.058.384.059.578V19z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7967">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default EnvelopIcon
