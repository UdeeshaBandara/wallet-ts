import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CubeIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7864)">
        <Path
          d="M20.527 4.217L14.5.737a5.015 5.015 0 00-5 0l-6.027 3.48a5.014 5.014 0 00-2.5 4.33v6.96a5.016 5.016 0 002.5 4.33l6.027 3.48a5.012 5.012 0 005 0l6.027-3.48a5.017 5.017 0 002.5-4.33v-6.96a5.015 5.015 0 00-2.5-4.33zM10.5 2.47a3 3 0 013 0l6.027 3.479c.152.096.296.207.429.33l-6.193 3.575a3.53 3.53 0 01-3.526 0L4.044 6.279c.132-.123.276-.234.429-.33l6.027-3.48zM4.473 18.105a3.008 3.008 0 01-1.5-2.6V8.547c.007-.18.03-.36.07-.535l6.194 3.575a5.491 5.491 0 001.763.635v9.569a2.89 2.89 0 01-.5-.206l-6.027-3.48zm16.554-2.6a3.008 3.008 0 01-1.5 2.6l-6.027 3.48c-.16.084-.328.153-.5.206v-9.57a5.492 5.492 0 001.763-.634l6.193-3.575c.04.176.064.355.07.535v6.958z"
          fill={props.isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7864">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CubeIcon
