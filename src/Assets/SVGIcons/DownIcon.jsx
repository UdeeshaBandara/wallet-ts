import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DownIcon = props => (
  <Svg
    width={13}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M11.473 1 6.42 6.053 1.367 1"
      stroke="#181818"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default DownIcon;
