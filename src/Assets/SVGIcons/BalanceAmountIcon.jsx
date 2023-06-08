import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function BalanceAmountIcon({ isSelected, props }) {
  if (isSelected) {
    return (
      <Svg
        width={18}
        height={27}
        viewBox="0 0 18 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Circle
          cx={9}
          cy={17.5263}
          r={8}
          fill="#02B387"
          stroke="#F8F8F8"
          strokeWidth={2}
        />
        <Circle
          cx={9}
          cy={13.7369}
          r={8}
          fill="#02B387"
          stroke="#F8F8F8"
          strokeWidth={2}
        />
        <Path
          d="M17 8.526c0 4.107-3.53 7.527-8 7.527-4.47 0-8-3.42-8-7.527C1 4.42 4.53 1 9 1c4.47 0 8 3.42 8 7.526z"
          fill="#02B387"
          stroke="#F8F8F8"
          strokeWidth={2}
        />
      </Svg>
    );
  } else {
    return (
      <Svg
        width={18}
        height={27}
        viewBox="0 0 18 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Circle
          cx={9}
          cy={17.5264}
          r={8}
          fill={isSelected ? 'rgba(0,0,0,0)' : '#fff'}
          stroke={'#000'}
          strokeWidth={2}
        />
        <Circle
          cx={9}
          cy={13.7373}
          r={8}
          fill={'#fff'}
          stroke={isSelected ? '#fff' : '#000'}
          strokeWidth={2}
        />
        <Path
          d="M17 8.526c0 4.107-3.53 7.527-8 7.527-4.47 0-8-3.42-8-7.527C1 4.42 4.53 1 9 1c4.47 0 8 3.42 8 7.526z"
          fill={'#fff'}
          stroke={'#000'}
          strokeWidth={2}
        />
      </Svg>
    );
  }
}

export default BalanceAmountIcon;
