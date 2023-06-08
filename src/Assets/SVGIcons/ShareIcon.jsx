import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ShareIcon = props => (
  <Svg
    width={20}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6.59 12.51l6.83 3.98M13.41 5.51 6.59 9.49"
      stroke="#181818"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ShareIcon;
