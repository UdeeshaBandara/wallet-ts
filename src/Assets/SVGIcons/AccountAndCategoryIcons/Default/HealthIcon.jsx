import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HealthIcon = props => {
  if (props.isWhite) {
    return (
      <Svg
        width={22}
        height={19}
        viewBox="0 0 22 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M18.988 2.503a5.129 5.129 0 00-7.255 0l-.988.988-.988-.988a5.13 5.13 0 00-7.255 7.254l.989.989L10.745 18 18 10.746l.988-.989a5.128 5.128 0 000-7.254z"
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
        height={19}
        viewBox="0 0 22 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M18.988 2.503a5.129 5.129 0 00-7.255 0l-.988.988-.988-.988a5.13 5.13 0 00-7.255 7.254l.989.989L10.745 18 18 10.746l.988-.989a5.128 5.128 0 000-7.254z"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
};

export default HealthIcon;
