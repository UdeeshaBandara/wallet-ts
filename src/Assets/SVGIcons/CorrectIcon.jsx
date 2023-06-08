import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CorrectIcon = ({ isSmall = false, ...props }) => {
  if (isSmall) {
    return (
      <Svg
        width={15}
        height={15}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M11.806 4.336L5.523 10.62 2.667 7.764"
          stroke="#F8F8F8"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  } else {
    return (
      <Svg
        width={26}
        height={26}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M21.667 6.5 9.751 18.417 4.334 13"
          stroke="#F8F8F8"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
};

export default CorrectIcon;
