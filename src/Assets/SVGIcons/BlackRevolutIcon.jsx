import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BlackRevoluteIcon = props => (
  <Svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13 24.666c6.443 0 11.666-5.223 11.666-11.666 0-6.444-5.223-11.667-11.666-11.667C6.556 1.333 1.333 6.556 1.333 13c0 6.443 5.223 11.666 11.667 11.666Z"
      stroke="#374957"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m7.166 13 5.833-8.167L18.833 13M7.166 13l5.833 8.166L18.833 13M7.166 13l5.833-2.334L18.833 13M7.166 13l5.833 2.333L18.833 13"
      stroke="#374957"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BlackRevoluteIcon;
