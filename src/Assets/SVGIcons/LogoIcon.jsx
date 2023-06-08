import React from 'react';
import Svg, {Circle, Path, Defs, LinearGradient, Stop, RadialGradient, Pattern, Use, Image} from 'react-native-svg';

const LogoIcon = props => {
  return (
    <Svg
      width={props.small ? 140 : 178}
      height={props.small ? 120 : 158}
      viewBox="0 0 111 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={55.5} cy={55.5} r={55.5} fill="#fff" />
      <Path
        d="M50.683 103.311L16.655 69.283a15.894 15.894 0 010-22.477L60.464 3l21.704 21.702a17.332 17.332 0 010 24.508L50.683 80.673a16.006 16.006 0 000 22.638z"
        fill="url(#paint0_linear_1249_8225)"
      />
      <Path
        d="M93.476 83.159L73.324 103.31a16.011 16.011 0 01-27.33-11.32 16.007 16.007 0 014.689-11.318L83.09 48.265l10.385 10.386a17.332 17.332 0 010 24.508z"
        fill="url(#paint1_radial_1249_8225)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1249_8225"
          x1={79.1}
          y1={-10.8219}
          x2={13.3621}
          y2={119.546}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#6C4DFD" />
          <Stop offset={1} stopColor="#2E0AE6" />
        </LinearGradient>
        <RadialGradient
          id="paint1_radial_1249_8225"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(138.713 101.792) scale(100.606)"
        >
          <Stop stopColor="#67EEE5" />
          <Stop offset={0.16} stopColor="#18ACA2" />
          <Stop offset={0.34} stopColor="#20C9BE" />
          <Stop offset={0.54} stopColor="#25DED2" />
          <Stop offset={1} stopColor="#22ABA2" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};

export default LogoIcon;
