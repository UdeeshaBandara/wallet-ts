import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DiscountIcon(props) {
  return (
    <Svg
      width={28}
      height={24}
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.922 21L3.5 11.21v2c0 .53.245 1.04.688 1.41l9.089 7.79c.91.78 2.391.78 3.301 0l7.245-6.21c.91-.78.91-2.05 0-2.83L14.922 21z"
        fill={props.isWhite ? "#ffffff" : "#374957"}
      />
      <Path
        d="M13.277 17.41c.455.39 1.05.59 1.645.59s1.19-.2 1.645-.59l7.245-6.21c.91-.78.91-2.05 0-2.83L14.723.58C14.292.21 13.697 0 13.078 0H5.833C4.55 0 3.5.9 3.5 2v6.21c0 .53.245 1.04.688 1.41l9.089 7.79zM5.833 2h7.245l9.089 7.79L14.922 16 5.833 8.21V2z"
        fill={props.isWhite ? "#ffffff" : "#374957"}
      />
      <Path
        d="M8.458 5.5c.806 0 1.459-.56 1.459-1.25S9.264 3 8.458 3C7.653 3 7 3.56 7 4.25S7.653 5.5 8.458 5.5z"
        fill={props.isWhite ? "#ffffff" : "#374957"}
      />
    </Svg>
  )
}

export default DiscountIcon
