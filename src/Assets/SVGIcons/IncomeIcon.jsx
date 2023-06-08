import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const IncomeIcon = props => (
  <Svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16.625 11.875v3.167a1.584 1.584 0 0 1-1.583 1.583H3.958a1.583 1.583 0 0 1-1.583-1.583v-3.167M5.542 7.917 9.5 11.875l3.959-3.958M9.5 11.875v-9.5"
      stroke="#F8F8F8"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default IncomeIcon;
