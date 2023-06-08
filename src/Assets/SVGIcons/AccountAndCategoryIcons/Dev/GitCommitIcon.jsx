import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function GitCommitIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M12 16a4 4 0 100-8 4 4 0 000 8zM1.05 12H7M17.01 12h5.95"
        stroke={props.isWhite ? "#ffffff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default GitCommitIcon;
