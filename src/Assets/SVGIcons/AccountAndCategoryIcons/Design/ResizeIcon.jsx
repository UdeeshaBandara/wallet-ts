import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function ResizeIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8651)">
        <Path
          d="M19 0h-8a5.006 5.006 0 00-5 5v6H5a5.006 5.006 0 00-5 5v3a5.006 5.006 0 005 5h3a5.006 5.006 0 005-5v-1h6a5.006 5.006 0 005-5V5a5.006 5.006 0 00-5-5zm-8 16a3 3 0 01-3-3 3 3 0 013 3zm0 3a3 3 0 01-3 3H5a3 3 0 01-3-3v-3a3 3 0 013-3h1a5.006 5.006 0 005 5v1zm11-6a3 3 0 01-3 3h-6c0-.98-.29-1.938-.833-2.753L18 7.414V10a1 1 0 002 0V7a3 3 0 00-3-3h-3a1 1 0 100 2h2.586l-5.833 5.833A4.969 4.969 0 008 11V5a3 3 0 013-3h8a3 3 0 013 3v8z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8651">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ResizeIcon;
