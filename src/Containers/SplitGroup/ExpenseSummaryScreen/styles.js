import { Dimensions, PixelRatio, StyleSheet } from "react-native";
import { Colors } from "../../../Theme/Variables";

const { height } = Dimensions.get('window');
export default StyleSheet.create({
  parentContainer: {
    backgroundColor: Colors.white,
  },
  subContainer: {
    paddingTop: PixelRatio.roundToNearestPixel(height * 0.049),
    paddingHorizontal: 20,

  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
