import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Html5Icon(props) {
  return (
    <Svg width={26} height={26} fill="none" {...props}>
      <Path
        d="M23.257 2.52a1.084 1.084 0 00-.8-.353H3.542a1.083 1.083 0 00-1.079 1.18L4.11 21.763a1.083 1.083 0 00.789.947l7.8 2.167a1.08 1.08 0 00.58.001l7.82-2.167a1.083 1.083 0 00.79-.948l1.647-18.416a1.084 1.084 0 00-.28-.828zm-3.46 18.303L12.99 22.71l-6.788-1.885-1.476-16.49h16.547l-1.475 16.49zm-11.326-6.74h7.47l-.354 3.544-2.782.994-3.428-1.224a1.084 1.084 0 10-.729 2.04l3.792 1.355c.236.084.493.084.729 0l3.791-1.355a1.083 1.083 0 00.714-.912l.542-5.416a1.082 1.082 0 00-1.078-1.192H9.452l-.325-3.25h8.553a1.083 1.083 0 100-2.167H7.93a1.083 1.083 0 00-1.078 1.192l.542 5.417a1.084 1.084 0 001.077.975z"
        fill={props.isWhite ? "#fff" : "#374957"}
      />
    </Svg>
  );
}

export default Html5Icon;
