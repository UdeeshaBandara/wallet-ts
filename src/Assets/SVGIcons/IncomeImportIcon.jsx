import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IncomeImportIcon = (props) => (
  <Svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M42 30v8a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4v-8M14 20l10 10 10-10M24 30V6"
      stroke="#7E7E7E"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default IncomeImportIcon
