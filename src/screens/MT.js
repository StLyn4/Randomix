import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { config } from 'react-spring/native';
import { Spring } from 'react-spring/renderprops-native';

import SceneController from '@/SceneController';
import { AnimatedCodeBlock } from '#/Animated';
import speakAsync from '#/speakAsync';

class MT extends React.Component {
  state = {
    field1: { opacity: 0, translateY: -200 },
    field2: { opacity: 0 },
    field3: { opacity: 0 },
    field4: { opacity: 0 },
  };

  scene = React.createRef();

  abortHandler = async () => {
    this.setState({
      field1: { opacity: 0, translateY: -200 },
      field2: { opacity: 0 },
      field3: { opacity: 0 },
      field4: { opacity: 0 },
    });
  };

  componentDidMount = () => {
    this.unsubscribeNavagationFocus = this.props.navigation.addListener(
      'focus',
      () => this.scene.current.runScenario(this.scenario.bind(this)),
    );
    this.unsubscribeNavagationBlur = this.props.navigation.addListener(
      'blur',
      () => this.scene.current.abort(this.abortHandler),
    );
  };

  componentWillUnmount = async () => {
    this.unsubscribeNavagationFocus();
    this.unsubscribeNavagationBlur();
  };

  async *scenario() {
    yield await speakAsync('Гораздо более интересным является Вихрь Мерсенна');
    this.setState({ field1: { opacity: 1, translateY: 0 } });
    yield await speakAsync(
      'Он состоит из двух частей: регистра сдвигов, и «закалки»',
    );

    this.scene.current.nextBlock();
    yield await speakAsync(
      'Регистр сдвига состоит из шестисот двадцати четырёх элементов, каждый длиной 32 бита. Инициализацию начального состояния можно описать так',
    );
    this.setState({ field2: { opacity: 1 } });
    yield await speakAsync(
      'На вход инициализационной функции подается некое значение seed, с помощью которого осуществляется заполнение всего регистра',
    );
    yield await speakAsync(
      'Сперва объявляется переменная index, которая доступна для использования другими функциями алгоритма',
    );
    yield await speakAsync(
      'Дальше начинается инициализация регистра. В первый элемент записывается само значение seed, а во все последующие записываются числа, которые были высчитаны по формуле, с учётом предыдущего',
    );
    yield await speakAsync('После этого счётчик индекса обнуляется');

    this.scene.current.nextBlock();
    this.setState({ field3: { opacity: 1 } });
    yield await speakAsync(
      'На первом и каждом последующем шестьсот двадцать четвёртом шаге происходит перемешивание внутреннего состояния регистра',
    );

    this.scene.current.nextBlock();
    this.setState({ field4: { opacity: 1 } });
    yield await speakAsync(
      'На каждом шаге алгоритм возвращает следующее число из текущего состояния регистра и производит так называемую «закалку»',
    );

    this.scene.current.nextBlock();
    yield await speakAsync(
      'Значения, которые будет возвращать последняя функция - и есть те самые случайные значения',
    );
    yield await speakAsync(
      'Для приведения к диапазону от нуля до единицы нужно представить число как беззнаковое, а потом, как и в прошлом алгоритме, разделить на максимальное возможное значения данного типа',
    );
  }

  render() {
    return (
      <SceneController ref={this.scene}>
        <>
          <Text style={styles.text}>
            Гораздо более интересным является Вихрь Мерсенна.
          </Text>
          <Text style={styles.text}>
            Он состоит из двух частей: регистра сдвигов и «закалки».
          </Text>
          <Spring to={this.state.field1} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock
                textStyle={{
                  opacity: field.opacity,
                  transform: [{ translateY: field.translateY }],
                }}
              >
                {'MT = [0] > [1] > [0] > ... > [623] > Закалка'}
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            Регистр сдвига состоит из 624 элементов, каждый длиной 32 бита.
          </Text>
          <Text style={styles.text}>
            Инициализацию начального состояния можно описать так:
          </Text>
          <Text style={styles.text}>
            На вход инициализационной функции подается некое значение seed, с
            помощью которого осуществляется заполнение всего регистра.
          </Text>
          <Spring to={this.state.field2} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock textStyle={field}>
                {`function initializeGenerator(int seed) {
     index = 0 // глобальный индекс
     MT[0] = seed
     for (int i = 1; i < 624; i++) {
         MT[i] == last 32 bits of(0x6c078965 * (MT[i-1] ^ (right shift by 30 bits(MT[i-1]))) + i)
     }
     index = 0
 }`}
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            На первом и каждом последующем 624-м шаге происходит перемешивание
            внутреннего состояния регистра:
          </Text>
          <Spring to={this.state.field3} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock textStyle={field}>
                {`function generateNumbers() {
     for (int i = 1; i < 624; i++) {
         int y = (MT[i] & 0x80000000)                        // bit 31 (32nd bit) of MT[i]
                        + (MT[(i+1) % 624] & 0x7fffffff)   // bits 0-30 (first 31 bits) of MT[...]
         MT[i] = MT[(i + 397) % 624] ^ (right shift by 1 bit(y))
         if ((y % 2) != 0) { // y is odd
             MT[i] = MT[i] ^ (0x9908b0df)
         }
     }
 }`}
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            На каждом шаге алгоритм возвращает следующее число из текущего
            состояния регистра и производит так называемую «закалку»:
          </Text>
          <Spring to={this.state.field4} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock textStyle={field}>
                {`function randomNumber() {
     if (index == 0) {
         generateNumbers()
     }
     int y = MT[index]
     // tempering
     y ^= (right shift by 11 bits(y))
     y ^= (left shift by 7 bits(y) & (0x9d2c5680))
     y ^= (left shift by 15 bits(y) & (0xefc60000))
     y ^= (right shift by 18 bits(y))

     index = (index + 1) % 624
     return y // "случайное" значение
 }`}
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            Значения, которые будет возращать последняя функция - и есть те
            самые рандомные значения. Для приведения к диапазону от 0 до 1 нужно
            представить число как беззнаковое , а потом, как и в прошлом
            алгоритме, разделить на максимальное возможное значения данного
            типа. А точнее, 0xffffffff.
          </Text>
        </>
      </SceneController>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
  },
});

export default MT;
