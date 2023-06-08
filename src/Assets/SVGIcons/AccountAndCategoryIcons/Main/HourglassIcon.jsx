import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function HourglassIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_253_8212)">
        <Path
          d="M17 24H7.005a4.02 4.02 0 01-3.045-1.4 3.945 3.945 0 01-.916-3.158A12.517 12.517 0 017.444 12a12.517 12.517 0 01-4.4-7.444A3.945 3.945 0 013.96 1.4 4.02 4.02 0 017.005 0H17a4.017 4.017 0 013.847 2.877c.159.545.198 1.117.115 1.678A12.556 12.556 0 0116.55 12a12.556 12.556 0 014.406 7.448 3.943 3.943 0 01-.918 3.156A4.017 4.017 0 0116.999 24zm0-22H7.005a2.014 2.014 0 00-1.928 1.428 1.917 1.917 0 00-.055.828c.375 2.5 1.922 4.84 4.6 6.957a1 1 0 010 1.568c-2.678 2.119-4.222 4.461-4.6 6.96a1.917 1.917 0 00.455 1.559 2.014 2.014 0 001.528.7H17a2.016 2.016 0 001.928-1.427c.079-.268.098-.55.056-.827-.373-2.487-1.92-4.829-4.6-6.962a1 1 0 010-1.564c2.68-2.133 4.228-4.475 4.6-6.963a1.915 1.915 0 00-.461-1.557A2.014 2.014 0 0017 2z"
          fill={props.isWhite ? "#ffffff" : "#374957"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_253_8212">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default HourglassIcon;
