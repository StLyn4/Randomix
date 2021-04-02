import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CodeBlock extends React.Component {
  render() {
    return (
      <View style={[styles.block, this.props.blockStyle]}>
        <Text style={[styles.line, this.props.textStyle]}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '99%',
    marginTop: 10,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#282828',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  line: {
    color: '#fcae1e',
    fontWeight: 'bold',
  },
});

export default CodeBlock;
