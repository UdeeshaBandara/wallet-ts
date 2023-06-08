import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MapPlusIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.175 22.448a5.43 5.43 0 007.574.019l3.981-3.68c4.314-4.256 4.36-11.203.104-15.516-4.256-4.314-11.203-4.36-15.516-.104l-.104.104C-.071 7.556-.07 14.503 4.215 18.788c.01.008.018.017.027.026l3.933 3.634zM5.625 4.68A8.977 8.977 0 1118.347 17.35l-3.974 3.672a3.506 3.506 0 01-4.825-.018l-3.925-3.626a8.977 8.977 0 010-12.696zm1.36 6.348c0-.551.446-.998.997-.998h2.993V7.04a.997.997 0 011.995 0v2.992h2.992a.997.997 0 110 1.995H12.97v2.993a.997.997 0 11-1.995 0v-2.993H7.982a.997.997 0 01-.997-.997z"
        fill={props.isWhite ? "#ffffff" : "#374957"}
      />
    </Svg>
  )
}

export default MapPlusIcon
