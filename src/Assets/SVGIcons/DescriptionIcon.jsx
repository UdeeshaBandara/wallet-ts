import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DescriptionIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17 12H3M21 6H3M21 18H3"
      stroke="#181818"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default DescriptionIcon
