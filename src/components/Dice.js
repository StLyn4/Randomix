import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Transition } from 'react-spring/renderprops-native';

import dice1 from 'app/assets/images/dice/1.png';
import dice2 from 'app/assets/images/dice/2.png';
import dice3 from 'app/assets/images/dice/3.png';
import dice4 from 'app/assets/images/dice/4.png';
import dice5 from 'app/assets/images/dice/5.png';
import dice6 from 'app/assets/images/dice/6.png';

const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = (props) => {
  return (
    <View style={[styles.frame, props.frameStyle]}>
      <Transition
        items={props.number}
        from={{ position: 'absolute', opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {(number) => (style) => (
          <Image
            style={[styles.dice, props.imageStyle, style]}
            source={dices[number - 1]}
          />
        )}
      </Transition>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dice: {
    height: 64,
    width: 64,
    borderRadius: 10,
  },
});

export default Dice;
