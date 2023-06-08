import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PlusBlackIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 5v14M5 12h14"
      stroke="#181818"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default PlusBlackIcon
