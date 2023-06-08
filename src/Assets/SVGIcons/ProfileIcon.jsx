import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ProfileIcon = props => (
  <Svg
    width={35}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17.5 1C8.387 1 1 8.387 1 17.5S8.387 34 17.5 34 34 26.613 34 17.5 26.613 1 17.5 1Z"
      stroke="#181818"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.748 27.97s3.678-4.695 12.753-4.695 12.753 4.695 12.753 4.695M17.5 17.5a4.95 4.95 0 1 0 .001-9.9 4.95 4.95 0 0 0 0 9.9Z"
      stroke="#181818"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ProfileIcon;
