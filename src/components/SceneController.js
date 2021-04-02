import React from 'react';
import { FlatList } from 'react-native';

import SceneBlock from '@/SceneBlock';

class SceneController extends React.Component {
  currentBlock = 0;

  view = React.createRef();

  scrollToIndex = (index) => {
    this.currentBlock = Math.max(0, index);
    this.view.current.scrollToIndex({ index: this.currentBlock });
  };

  nextBlock = () => {
    this.currentBlock += 1;
    this.view.current.scrollToIndex({ index: this.currentBlock });
  };

  prevBlock = () => {
    this.currentBlock = Math.max(0, this.currentBlock - 1);
    this.view.current.scrollToIndex({ index: this.currentBlock });
  };

  runScenario = async (scenario) => {
    this.aborted = false;
    this.scenarioSeq = scenario();
    for (;;) {
      if (this.aborted) {
        break;
      }
      const { done } = await this.scenarioSeq.next(); // eslint-disable-line
      if (done) {
        break;
      }
    }
  };

  abort = (callback) => {
    if (callback) {
      callback();
    }
    this.scrollToIndex(0);
    this.aborted = true;
  };

  render() {
    let content = this.props.children ?? [];
    if (typeof content === 'object' && !Array.isArray(content)) {
      content = [content];
    }
    return (
      <FlatList
        ref={this.view}
        data={content}
        renderItem={({ item }) => <SceneBlock>{item}</SceneBlock>}
        keyExtractor={(item, index) => String(index)}
      />
    );
  }
}

export default SceneController;
