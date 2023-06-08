import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function MapNavigationIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8476)">
        <Path
          d="M13.987 6.108c-.039.011-7.228 2.864-7.228 2.864a2.76 2.76 0 00.2 5.212l2.346.587.773 2.524A2.739 2.739 0 0012.617 19h.044a2.738 2.738 0 002.532-1.786s2.693-7.165 2.7-7.2a3.2 3.2 0 00-3.908-3.907l.002.001zm1.983 3.359l-2.648 7.043a.738.738 0 01-.692.49c-.1-.012-.525-.026-.675-.378l-.908-2.976a1 1 0 00-.713-.679l-2.818-.7a.762.762 0 01-.027-1.433l7.06-2.8a1.15 1.15 0 011.094.32 1.19 1.19 0 01.327 1.113zM12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 22a10 10 0 1110-10 10.011 10.011 0 01-10 10z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8476">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default MapNavigationIcon
