import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function PieChart1Icon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_253_7676)" fill={props.isWhite ? "#fff" : "#374957"}>
        <Path d="M18.713 12H14a2 2 0 01-2-2V5.274a3 3 0 00-1.166-2.383 2.871 2.871 0 00-2.481-.534 10.969 10.969 0 00.553 21.414 11 11 0 0012.734-8.114 2.877 2.877 0 00-.533-2.485A3.056 3.056 0 0018.713 12zm.988 3.168A8.969 8.969 0 118.84 4.3a.871.871 0 01.765.172 1.016 1.016 0 01.4.806V10a4 4 0 004 4h4.712a1.04 1.04 0 01.816.4.884.884 0 01.166.768z" />
        <Path d="M23.651 7.446A10.073 10.073 0 0016.582.372a2.1 2.1 0 00-1.315.075A2.001 2.001 0 0014.02 2.3V7a3 3 0 003 3h4.718a2.008 2.008 0 001.913-2.554zM21.154 8h-4.139a1 1 0 01-1-1l-.008-4.693a.048.048 0 01.025-.01h.026A8.072 8.072 0 0121.735 8h-.581z" />
      </G>
      <Defs>
        <ClipPath id="clip0_253_7676">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PieChart1Icon
