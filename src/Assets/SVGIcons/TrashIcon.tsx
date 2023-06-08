import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function TrashIcon({ isFilled = true, ...props }) {
  if (isFilled) {
    return (
      <Svg
        width={22}
        height={25}
        viewBox="0 0 22 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M1.563 22.656A2.343 2.343 0 003.905 25H17.97a2.343 2.343 0 002.343-2.344V6.25H1.563v16.406zm13.28-12.5a.781.781 0 111.563 0v10.938a.781.781 0 11-1.562 0V10.156zm-4.687 0a.781.781 0 011.563 0v10.938a.781.781 0 01-1.563 0V10.156zm-4.687 0a.781.781 0 111.562 0v10.938a.781.781 0 11-1.562 0V10.156zm15.625-8.593h-5.86l-.459-.914A1.172 1.172 0 0013.725 0h-5.58A1.158 1.158 0 007.1.65l-.46.913H.782a.781.781 0 00-.781.78v1.563a.781.781 0 00.781.782h20.313a.781.781 0 00.781-.782V2.344a.781.781 0 00-.781-.781z"
          fill="#F8F8F8"
        />
      </Svg>
    );
  } else {
    return (
      <Svg
        width={20}
        height={22}
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M1 5h18M17 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5m3 0V3a2 2 0 012-2h4a2 2 0 012 2v2M8 10v6M12 10v6"
          stroke="#F8F8F8"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
}

export default TrashIcon;
