import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function DefaultIcon({ isSelected, props }) {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.783 6.77a1 1 0 00.752-.544l2.544-5.124 2.544 5.124a1 1 0 00.752.545l5.677.825-4.103 3.974a1 1 0 00-.29.888l.97 5.621-5.087-2.66a1 1 0 00-.926 0l-5.087 2.66.97-5.62a1 1 0 00-.29-.89L1.106 7.597l5.677-.825zM10.005.953h0zm9.225 6.67s0 0 0 0h0l.013-.094-.013.094zm-18.302 0h0z"
        stroke={isSelected ? '#F8F8F8' : '#181818'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default DefaultIcon;
