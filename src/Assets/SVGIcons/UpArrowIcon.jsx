import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const UpArrowIcon = props => (
  <Svg
    width={14}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="m1 7 6-6 6 6" fill="#F8F8F8" />
    <Path
      d="m1 7 6-6 6 6"
      stroke="#181818"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default UpArrowIcon;
