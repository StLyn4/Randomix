import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

class CoinPlate extends React.Component {
  plateWidth = 0;

  render() {
    const progress = this.props.progress ?? 0;
    const rotate = progress * 180 ?? 0;
    const translate = progress * this.plateWidth - progress * 64;
    return (
      <View
        style={[styles.plate, this.props.plateStyle]}
        onLayout={({ nativeEvent }) => {
          this.plateWidth = nativeEvent.layout.width;
          this.forceUpdate();
        }}
      >
        <Image
          style={[
            styles.coin,
            {
              transform: [
                { rotateY: `${rotate}deg` },
                { translateX: -translate },
              ],
            },
          ]}
          source={rotate < 90 ? this.props.headSource : this.props.tailSource}
        />
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
