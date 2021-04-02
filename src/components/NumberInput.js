import React from 'react';
import { TextInput } from 'react-native-paper';

const filterNumber = (text) => {
  return Array.prototype.filter
    .call(text, (char, i) => {
      return (
        (i === 0 && char === '-' && text.length > 1) || /[\d,.-]/.test(char)
      );
    })
    .join('');
};

class NumberInput extends React.Component {
  state = {
    strForm: '',
  };

  changeTextHandler = (text) => {
    this.setState({ strForm: filterNumber(text) });
  };

  processInput = (text) => {
    const minValue = this.props.minValue || Number.MIN_SAFE_INTEGER;
    const maxValue = this.props.maxValue || Number.MAX_SAFE_INTEGER;

    const input = parseFloat(text);
    let num = Number.isNaN(input) ? Math.min(0, maxValue) : input;
    num = Math.min(maxValue, Math.max(minValue, num));

    if (this.props.roundTo !== undefined) {
      if (this.props.roundTo === 0) {
        num = Math.round(num);
      } else {
        const m = 10 * this.props.roundTo;
        num = Math.round(num * m) / m;
      }
    }

    this.setState({ strForm: String(num) });

    const callback = this.props.onEndEditing || this.props.onChangeText;
    callback(num);
  };

  endEditingHandler = ({ nativeEvent }) => {
    this.processInput(nativeEvent.text.replace(',', '.'));
  };

  blurHandler = ({ nativeEvent }) => {
    const { text } = nativeEvent;
    if (text !== undefined) {
      this.processInput(text.replace(',', '.'));
    }
  };

  componentDidMount = () => {
    if (this.props.default) {
      this.processInput(this.props.default);
    }
  };

  render() {
    return (
      <TextInput
        {...this.props}
        value={this.state.strForm}
        onChangeText={this.changeTextHandler}
        onEndEditing={this.endEditingHandler}
        onBlur={this.blurHandler}
      />
    );
  }
}

export default NumberInput;
