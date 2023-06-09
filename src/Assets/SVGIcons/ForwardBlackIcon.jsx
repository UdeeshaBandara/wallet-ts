import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ForwardBlackIcon = props => (
  <Svg
    width={8}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m1 13 6-6-6-6"
      stroke="#181818"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ForwardBlackIcon;
