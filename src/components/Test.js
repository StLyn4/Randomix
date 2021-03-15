import React from 'react';
import { View } from 'react-native';

import Box from '@/Box';

class Test extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Box />
        <Box />
        <Box />
      </View>
    );
  }
}

export default Test;
