import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CategoriesIcon = props => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8 1H1v7h7V1ZM19 1h-7v7h7V1ZM19 12h-7v7h7v-7ZM8 12H1v7h7v-7Z"
      stroke="#181818"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CategoriesIcon;
