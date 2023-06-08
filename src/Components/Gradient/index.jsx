import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const Gradient = ({ colors, start, end, style, children }) => {
  return (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      style={[styles.gradient, style]}>
      {children}
    </LinearGradient>
  );
};

export default Gradient;
