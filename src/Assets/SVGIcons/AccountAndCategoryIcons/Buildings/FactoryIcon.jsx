import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FactoryIcon(props) {
  return (
    <Svg width={28} height={28} fill="none" {...props}>
      <Path
        d="M2.56 4.274A2.625 2.625 0 015.187 1.75h1.88a2.625 2.625 0 012.622 2.524l.742 19.25a2.624 2.624 0 01-2.625 2.726h-3.36a2.623 2.623 0 01-2.625-2.727l.74-19.25zM5.187 3.5a.875.875 0 00-.875.84l-.742 19.25a.875.875 0 00.875.91h3.363a.874.874 0 00.875-.91L7.94 4.34a.875.875 0 00-.875-.84h-1.88zm18.44 22.75a2.625 2.625 0 002.624-2.625V7.875a.875.875 0 00-1.494-.62l-5.506 5.508V7.875a.874.874 0 00-1.456-.654l-6.034 5.363.088 2.265L17.5 9.823v5.052a.875.875 0 001.495.62L24.5 9.986v13.638a.875.875 0 01-.875.875h-.875v-5.25A1.75 1.75 0 0021 17.5h-5.25A1.75 1.75 0 0014 19.25v5.25h-1.907a4.358 4.358 0 01-.788 1.75h12.32zM15.75 24.5v-5.25H21v5.25h-5.25z"
        fill={props.isWhite ? "#fff" : "#374957"}
      />
    </Svg>
  );
}


export default FactoryIcon;
