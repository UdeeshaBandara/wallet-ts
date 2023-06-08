import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TransferIcon = props => (
  <Svg
    width={41}
    height={38}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M39 26v10H28.722M4.056 2 39 36M12.277 36H2V26M14.334 23.998l-12.333 12M36.944 2 26.667 12"
      stroke="#181818"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default TransferIcon;
