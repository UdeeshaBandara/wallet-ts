import { StyleSheet } from 'react-native';

import { Colors } from '../../Theme/Variables';

export default StyleSheet.create({
  container: {
    width: 29,
    height: 29,
    borderRadius: 50,
    borderColor: Colors.gray002,
    borderWidth: 2,
    overflow: 'hidden',
  },
  checkBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  memberCheckboxContainer: {
    width: 20,
    height: 20,
    borderColor: Colors.gray001,
    borderWidth: 2,
    overflow: 'hidden',
  },
});
