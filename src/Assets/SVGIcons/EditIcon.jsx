import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function EditIcon({ isWhite = true, props }) {
  if (isWhite) {
    return (
      <Svg
        width={22}
        height={22}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <G clipPath="url(#clip0_925_1753)">
          <Path
            d="M15.584 2.75a2.593 2.593 0 113.667 3.667L6.876 18.792l-5.042 1.375 1.375-5.042L15.584 2.75z"
            stroke="#F8F8F8"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_925_1753">
            <Path fill="#fff" d="M0 0H22V22H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    );
  } else {
    return (
      <Svg
        width={22}
        height={22}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M15.584 2.75a2.593 2.593 0 113.667 3.666L6.876 18.791l-5.042 1.375 1.375-5.041L15.584 2.75z"
          stroke="#181818"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
}

export default EditIcon;
