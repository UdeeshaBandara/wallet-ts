import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const CategoryMinus = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    fill="none"
    {...props}
  >
    <Circle cx={13.5} cy={13.5} r={13.5} fill="#fff" />
    <Path fill="#fff" d="M8 14h11.989Z" />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M8 14h11.989"
    />
  </Svg>
)
export default CategoryMinus
