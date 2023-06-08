import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const AccountTransferIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} {...props}>
    <Path
      style={{
        fill: 'none',
        strokeWidth: 2.6,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        stroke: '#f8f8f8',
        strokeOpacity: 1,
        strokeMiterlimit: 4,
      }}
      d="M24.002 4.5H31.5v7.498M6.002 29.998 31.5 4.5M31.5 24.002V31.5h-7.498M22.5 22.5l9 9M6.002 6.002 13.5 13.5"
      transform="rotate(.158) scale(.52778)"
    />
  </Svg>
);

export default AccountTransferIcon;
