import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function XiaomiIcon(props) {
  return (
    <Svg width={28} height={28} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_386_9685)">
        <Path
          d="M23.288 23.334a.376.376 0 01-.374-.374V5.04a.376.376 0 01.374-.373h4.33a.376.376 0 01.383.374V22.96c0 .21-.174.378-.384.373h-4.329zm-7.26 0s-.346-.105-.346-.374V11.958a2.544 2.544 0 00-2.571-2.625H5.017c-.469 0-.35.351-.35.351V22.96c0 .314-.352.373-.352.373H.382A.376.376 0 010 22.96V5.04c0-.21.173-.377.383-.373H15.39a4.996 4.996 0 014.959 4.981l.009 13.313a.374.374 0 01-.374.373h-3.955zm-8.048 0a.35.35 0 01-.351-.351v-10.5c0-.192.16-.351.35-.351h4.399a.35.35 0 01.336.35v10.5a.347.347 0 01-.346.352H7.98z"
          fill={props.isWhite ? "#fff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_386_9685">
          <Path fill="#fff" d="M0 0h28v28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default XiaomiIcon;
