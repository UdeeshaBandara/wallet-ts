import * as React from "react"
import Svg, { Path } from "react-native-svg";
const SaveWhiteIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#F8F8F8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 19H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"
    />
    <Path
      stroke="#F8F8F8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19v-8H5v8M5 1v5h8"
    />
  </Svg>
)
export default SaveWhiteIcon
