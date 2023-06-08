import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const AccountIcon = ({ isFocused, ...props }) => {
  if (isFocused) {
    return (
      <Svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M17 19H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"
          stroke="#02B287"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15 19v-8H5v8M5 1v5h8"
          stroke="#02B287"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  } else {
    return (
      <Svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M17 19H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"
          stroke="#181818"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15 19v-8H5v8M5 1v5h8"
          stroke="#181818"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
};

export default AccountIcon;
