import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const InfoIcon = ({ isWhite = true, ...props }) => {
  if (isWhite) {
    return (
      <Svg
        width={30}
        height={30}
        fill="none"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M19 37c9.941 0 18-8.059 18-18S28.941 1 19 1 1 9.059 1 19s8.059 18 18 18ZM19 11.8V19M19 26.2h.018"
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
        width={30}
        height={30}
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M19 37c9.941 0 18-8.059 18-18S28.941 1 19 1 1 9.059 1 19s8.059 18 18 18zM19 11.8V19M19 26.2h.018"
          stroke="#181818"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
};

export default InfoIcon;
