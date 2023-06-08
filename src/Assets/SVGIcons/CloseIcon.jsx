import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CloseIcon = ({ isWhite, ...props }) => {
  if (isWhite) {
    return (
      <Svg
        width={22}
        height={22}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M16.5 5.5l-11 11M5.5 5.5l11 11"
          stroke="#F8F8F8"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  } else {
    return (
      <Svg
        width={22}
        height={22}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="m16.5 5.5-11 11M5.5 5.5l11 11"
          stroke="#181818"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
};

export default CloseIcon;
