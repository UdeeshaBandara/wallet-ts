import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TransferCellSelected = (props) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.118 1H21v5.556M1 19.889 21 1M21 15.444V21h-5.882M13.94 14.333 21 21M1 2.111l5.882 5.556"
      stroke="#F8F8F8"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default TransferCellSelected
