import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

function DotMenuIcon(props) {
  return (
    <Svg
      width={16}
      height={24}
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={3} cy={3} r={3} fill="#7E7E7E" />
      <Circle cx={13} cy={3} r={3} fill="#7E7E7E" />
      <Circle cx={3} cy={12} r={3} fill="#7E7E7E" />
      <Circle cx={13} cy={12} r={3} fill="#7E7E7E" />
      <Circle cx={3} cy={21} r={3} fill="#7E7E7E" />
      <Circle cx={13} cy={21} r={3} fill="#7E7E7E" />
    </Svg>
  );
}

export default DotMenuIcon;
