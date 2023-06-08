import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function MenuIcon(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.334 5.5h11.917M7.334 11h11.917M7.334 16.5h11.917M2.75 5.5h.01M2.75 11h.01M2.75 16.5h.01"
        stroke="#181818"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default MenuIcon;
