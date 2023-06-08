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
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    height: 70,
    marginTop: 20,
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
    borderBottomColor: Colors.inputFieldBorderColor,
    borderBottomWidth: 2,
    marginBottom: 15,
    color: Colors.primaryBlack,
  },
});
