import * as React from "react";
import Svg, { Path } from "react-native-svg";

function WhatsappIcon(props) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M20.405 3.487A11.804 11.804 0 0011.995 0C5.438 0 .102 5.336.102 11.893c0 2.095.546 4.14 1.585 5.946L0 24l6.305-1.655a11.856 11.856 0 005.684 1.446h.006C18.546 23.791 24 18.455 24 11.898c0-3.177-1.35-6.16-3.595-8.41zm-8.41 18.3a9.867 9.867 0 01-5.036-1.376l-.359-.215-3.74.98.997-3.647-.236-.375a9.852 9.852 0 01-1.51-5.261c0-5.448 4.435-9.884 9.889-9.884a9.797 9.797 0 016.986 2.898c1.864 1.87 3.01 4.35 3.005 6.991 0 5.454-4.548 9.89-9.996 9.89zm5.421-7.403c-.295-.15-1.757-.868-2.03-.964-.273-.102-.472-.15-.67.15-.198.3-.766.964-.943 1.168-.171.198-.348.225-.643.075-1.746-.874-2.893-1.56-4.044-3.536-.306-.525.305-.488.873-1.623.096-.199.048-.37-.027-.52-.075-.15-.67-1.613-.916-2.207-.241-.579-.487-.498-.67-.51-.171-.01-.37-.01-.567-.01a1.1 1.1 0 00-.793.37c-.273.3-1.04 1.018-1.04 2.48 0 1.463 1.067 2.877 1.211 3.075.15.198 2.095 3.198 5.079 4.49 1.885.814 2.625.883 3.568.744.573-.086 1.757-.718 2.003-1.414.247-.697.247-1.291.172-1.415-.07-.133-.268-.208-.563-.353z"
        fill={props.isWhite ? "#fff" : "#374957"}
      />
    </Svg>
  );
}


export default WhatsappIcon;