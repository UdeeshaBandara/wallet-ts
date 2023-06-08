import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SelectedIcon = ({ isSmall = true,isWhite= false, props }) => {
  if (isSmall) {
    return (
      <Svg
        width={18}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M17 8.269v.736a8 8 0 1 1-4.744-7.312"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="m17 2.605-8 8.008-2.4-2.4"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  } else {
    return (
      <Svg
        width={28}
        height={28}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M29 13.72v1.288a14 14 0 11-8.302-12.796"
          stroke={!isWhite ? "#181818" : "#fff"}  
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M29 3.809L15 17.823l-4.2-4.2"
          stroke={!isWhite ? "#181818" : "#fff"}  
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
};
export default SelectedIcon;
