import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const fade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
    // transform: [
    //   {
    //     translateX: current.progress.interpolate({
    //       inputRange: [0, 1],
    //       outputRange: [width, 0],
    //       extrapolate: 'clamp',
    //     }),
    //   },
    //   {
    //     translateY: current.progress.interpolate({
    //       inputRange: [0, 1],
    //       outputRange: [-height, 0],
    //       extrapolate: 'clamp',
    //     }),
    //   },
    // ],
  },
});

export { fade };
