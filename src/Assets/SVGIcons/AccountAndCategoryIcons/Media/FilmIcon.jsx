import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function FilmIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8044)">
        <Path
          d="M19 0H5a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V5a5.006 5.006 0 00-5-5zm1 11h2v2h-2v-2zm0-2V7h2v2h-2zm-2 2H6V2h12v9zM4 13H2v-2h2v2zm0-4H2V7h2v2zm-2 6h2v2H2v-2zm4-2h12v9H6v-9zm14 2h2v2h-2v-2zm2-10h-2V2.184A3 3 0 0122 5zM4 2.184V5H2a3 3 0 012-2.816zM2 19h2v2.816A3 3 0 012 19zm18 2.816V19h2a3 3 0 01-2 2.816z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8044">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FilmIcon
