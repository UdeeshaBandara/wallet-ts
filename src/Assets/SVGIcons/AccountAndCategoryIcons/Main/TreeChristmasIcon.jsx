import * as React from "react";
import Svg, { Path } from "react-native-svg";

function TreeChristmasIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M20.44 16.854l-1.481-2.221a2.215 2.215 0 00.619-3.072l-2.091-3.135a2.21 2.21 0 00.372-2.836 1.232 1.232 0 00-.081-.109l-4.1-4.782a2.38 2.38 0 00-3.4.051L6.206 5.477a.912.912 0 00-.081.107 2.212 2.212 0 00.38 2.853l-2.083 3.124a2.215 2.215 0 00.619 3.072L3.56 16.854a3.309 3.309 0 002.752 5.145H11v1a1 1 0 102 0v-1h4.687a3.31 3.31 0 002.753-5.145zm-1.6 2.454a1.292 1.292 0 01-1.153.691H6.312a1.31 1.31 0 01-1.088-2.035l2.276-3.41a1 1 0 00-.834-1.555h-.405a.2.2 0 01-.186-.111.2.2 0 01.011-.217l2.745-4.117a1 1 0 00-.334-1.413 1.017 1.017 0 00-.518-.142.2.2 0 01-.186-.11.2.2 0 01-.011-.178l3.962-4.6a.327.327 0 01.464-.052L16.2 6.712a.2.2 0 01-.011.178.2.2 0 01-.189.109 1 1 0 00-.832 1.555l2.745 4.117a.2.2 0 01.011.217.2.2 0 01-.186.111h-.405a1 1 0 00-.832 1.555l2.274 3.41a1.29 1.29 0 01.066 1.344h-.001z"
        fill={props.isWhite ? "#ffffff" : "#374957"}
      />
      <Path
        d="M9 17.999a1 1 0 100-2 1 1 0 000 2zM14 17.999a1 1 0 100-2 1 1 0 000 2zM11 14a1 1 0 100-2 1 1 0 000 2zM13 11a1 1 0 100-2 1 1 0 000 2zM11 8a1 1 0 100-2 1 1 0 000 2z"
        fill={props.isWhite ? "#ffffff" : "#374957"}
      />
    </Svg>
  );
}

export default TreeChristmasIcon;
