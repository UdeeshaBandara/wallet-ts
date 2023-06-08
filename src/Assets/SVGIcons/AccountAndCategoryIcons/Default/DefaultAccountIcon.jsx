import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../../../../Theme/Variables';

const DefaultAccountIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={23} height={18}>
    <Path
      style={{
        fill: 'none',
        strokeWidth: 2.4,
        strokeLinecap: 'butt',
        strokeLinejoin: 'round',
        stroke: props.isWhite ? Colors.white : Colors.primaryBlack,
        strokeOpacity: 1,
        strokeMiterlimit: 4,
      }}
      d="M23.5 1.832h-21c-.645 0-1.166.525-1.166 1.167v14.002c0 .642.52 1.167 1.165 1.167h21.002c.644 0 1.165-.525 1.165-1.167V2.999c0-.642-.52-1.167-1.165-1.167Zm0 0"
      transform="scale(.88462 .9)"
    />
    <Path
      style={{
        fill: 'none',
        strokeWidth: 2.4,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        stroke: props.isWhite ? Colors.white : Colors.primaryBlack,
        strokeOpacity: 1,
        strokeMiterlimit: 4,
      }}
      d="M1.334 7.665h23.332M1.334 5.915v3.503m23.332-3.502v3.502m-8.747 3.499h4.663"
      transform="scale(.88462 .9)"
    />
  </Svg>
);

export default DefaultAccountIcon;
