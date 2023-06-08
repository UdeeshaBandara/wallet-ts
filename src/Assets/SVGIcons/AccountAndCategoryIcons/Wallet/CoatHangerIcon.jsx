import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function CoatHangerIcon({isWhite}) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <Path
        d="M26.421 18.725L15.458 10.5l2.566-1.925a.876.876 0 00.35-.7 4.375 4.375 0 00-8.75 0 .875.875 0 001.75 0 2.625 2.625 0 015.217-.413L13.49 9.788l-.03.023-11.882 8.914a1.75 1.75 0 001.047 3.15h22.75a1.75 1.75 0 001.05-3.15h-.004zm-1.046 1.4H2.625L14 11.594l11.375 8.531z"
        fill={isWhite ? "#fff" : "#374957"}
      />
    </Svg>
  );
}

export default CoatHangerIcon;
