import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../../../../Theme/Variables';

const DefaultCategoryIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={22}
    viewBox="0 0 22 22">
    <Path
      style={{
        fill: 'none',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeOpacity: 1,
        strokeMiterlimit: 4,
        stroke:
          props.colorCode === Colors.primaryYellow || !props.isWhite
            ? Colors.primaryBlack
            : Colors.white,
      }}
      d="M25.298 13.498V27H3.702V13.498"
      transform="scale(.75862 .78571)"
    />
    <Path
      style={{
        fill: 'none',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        stroke:
          props.colorCode === Colors.primaryYellow || !props.isWhite
            ? Colors.primaryBlack
            : Colors.white,
        strokeOpacity: 1,
        strokeMiterlimit: 4,
      }}
      d="M28.001 6.751H1v6.747H28ZM14.5 27V6.752"
      transform="scale(.75862 .78571)"
    />
  </Svg>
);

export default DefaultCategoryIcon;
