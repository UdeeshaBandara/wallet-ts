import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DefaultGiftIcon = props => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17.2 10v9H2.8v-9M19 5.5H1V10h18V5.5ZM10 19V5.5M10 5.5H5.95a2.25 2.25 0 1 1 0-4.5C9.1 1 10 5.5 10 5.5ZM10 5.5h4.05a2.25 2.25 0 0 0 0-4.5C10.9 1 10 5.5 10 5.5Z"
      stroke={props.isWhite ? '#fff' : '#374957'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default DefaultGiftIcon;
