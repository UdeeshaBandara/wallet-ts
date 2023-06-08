import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BudgetIcon = props => (
  <Svg
    width={14}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7 1v22M12 5H4.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H1"
      stroke="#181818"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BudgetIcon;
