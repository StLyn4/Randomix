import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { config } from 'react-spring/native';
import { Spring } from 'react-spring/renderprops-native';
import AnimatedView from '#/AnimatedView';

class Box extends React.Component {
  state = {
    position: {
      x: 0,
    },
  };

  move = () => {
    this.setState((prevState) => ({
      position: {
        ...prevState.position,
        x: Math.random() * (400 - -400) + -400,
      },
    }));
  };

  render() {
    return (
      <Spring native to={this.state.position} config={config.wobbly}>
        {(position) => (
          <TouchableWithoutFeedback onPress={this.move}>
            <AnimatedView
              style={[styles.box, { transform: [{ translateX: position.x }] }]}
            />
          </TouchableWithoutFeedback>
        )}
      </Spring>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
    borderRadius: 10,
  },
});

export default Box;
