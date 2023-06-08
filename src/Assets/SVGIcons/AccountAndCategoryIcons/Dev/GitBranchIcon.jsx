import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function GitBranchIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 9a9 9 0 01-9 9"
        stroke={props.isWhite ? "#ffffff" : "#374957"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default GitBranchIcon;
