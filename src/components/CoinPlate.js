import React from 'react';
import { View, StyleSheet } from 'react-native';
import { config } from 'react-spring/native';
import { Spring } from 'react-spring/renderprops-native';

import coinHead from 'app/assets/images/coin/head.png';
import coinTail from 'app/assets/images/coin/tail.png';
import { AnimatedImage } from '#/Animated';

class CoinPlate extends React.Component {
  plateWidth = 0;

  render() {
    return (
      <View
        style={[styles.plate, this.props.plateStyle]}
        onLayout={({ nativeEvent }) => {
          this.plateWidth = nativeEvent.layout.width;
          this.forceUpdate();
        }}
      >
        <Spring to={this.props.progress} config={config.wobbly}>
          {(coin) => (
            <AnimatedImage
              style={[
                styles.coin,
                {
                  transform: [
                    { rotateY: `${coin.progress * 180}deg` },
                    { translateX: -(coin.progress * (this.plateWidth - 64)) },
                  ],
                },
              ]}
              source={coin.progress < 0.5 ? coinHead : coinTail}
            />
          )}
        </Spring>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  plate: {
    borderRadius: 32,
  },
  coin: {
    borderRadius: 32,
    height: 64,
    width: 64,
  },
});

export default CoinPlate;
