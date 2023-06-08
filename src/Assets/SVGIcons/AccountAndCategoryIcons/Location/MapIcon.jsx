import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function MapIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_8377)">
        <Path
          d="M20.68 1.167l-.021-.007-2.715-.9a5.017 5.017 0 00-2.9-.079l-5.576 1.62a3.025 3.025 0 01-2.048-.18l-.5-.233A5 5 0 000 6v12.075a5.013 5.013 0 003.6 4.8l2.869.9c.484.15.988.227 1.495.225.452.006.902-.055 1.336-.18l5.8-1.6c.53-.144 1.09-.14 1.617.012l2.343.676A4 4 0 0024 19.021V5.876a5.01 5.01 0 00-3.32-4.709zM4.176 20.96A3.012 3.012 0 012 18.075V6a2.953 2.953 0 011.336-2.5A3 3 0 015 3a2.9 2.9 0 011.112.222s.745.32.887.37v18.25l-2.823-.883zM9 21.827V3.88c.34-.018.677-.07 1.006-.155L15 2.274V20.2l-6 1.627zm13-2.806a2 2 0 01-2.433 1.954L17 20.252V2.075l3.018.98A3.006 3.006 0 0122 5.875v13.145z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_253_8377">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default MapIcon
