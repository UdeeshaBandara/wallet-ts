import * as React from "react";
import Svg, { Path } from "react-native-svg";

function GoogleDriveIcon(props) {
  return (
    <Svg width={28} height={28} fill="none" {...props}>
      <Path
        d="M25.987 16.6L18.498 4.324a1.74 1.74 0 00-1.484-.823h-6.03a1.738 1.738 0 00-1.483.823l-.006.007-7.479 12.262a1.75 1.75 0 00-.036 1.796l2.988 5.23a1.75 1.75 0 001.52.882H21.51a1.75 1.75 0 001.52-.882l2.988-5.23a1.74 1.74 0 00-.031-1.787zm-2.034.025h-5.084l-3.849-6.417 2.488-4.148 6.445 10.565zm-12.783 0L14 11.909l2.83 4.716h-5.66zm6.71 1.75l2.624 4.375H7.495l2.625-4.375h7.76zM14 8.507L12.043 5.25l3.913-.005L14 8.507zM10.49 6.06l2.49 4.148-3.85 6.417H4.045L10.49 6.06zM3.996 18.375H8.08l-2.094 3.491-1.989-3.491zm18.018 3.492l-2.095-3.492h4.092l-1.996 3.492z"
        fill={props.isWhite ? "#fff" : "#374957"}
      />
    </Svg>
  );
}

export default GoogleDriveIcon;