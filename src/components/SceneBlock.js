import React from 'react';
import { StyleSheet, View } from 'react-native';

const SceneBlock = (props) => {
  return <View style={styles.block}>{props.children}</View>;
};

const styles = StyleSheet.create({
  block: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 10,
    padding: 8,
  },
});

export default SceneBlock;
