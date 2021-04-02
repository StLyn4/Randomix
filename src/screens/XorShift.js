import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { config } from 'react-spring/native';
import { Spring } from 'react-spring/renderprops-native';

import SceneController from '@/SceneController';
import { AnimatedCodeBlock } from '#/Animated';
import speakAsync from '#/speakAsync';

class XorShift extends React.Component {
  state = {
    field1: { opacity: 0 },
    field2: { opacity: 0 },
    field3: { opacity: 0, translateX: 500 },
    field4: { opacity: 0 },
    field5: { opacity: 0 },
    field6: { val: 1234567, color: '#808080' },
    field7: { val: 1234567, color: '#808080' },
    field8: { val: 10356299847303, color: '#808080' },
    field9: { val: 10356359919438, color: '#808080' },
    field10: { opacity: 0, translateY: 200 },
  };

  scene = React.createRef();

  abortHandler = async () => {
    this.setState({
      field1: { opacity: 0 },
      field2: { opacity: 0 },
      field3: { opacity: 0, translateX: 500 },
      field4: { opacity: 0 },
      field5: { opacity: 0 },
      field6: { val: 1234567, color: '#808080' },
      field7: { val: 1234567, color: '#808080' },
      field8: { val: 10356299847303, color: '#808080' },
      field9: { val: 10356359919438, color: '#808080' },
      field10: { opacity: 0, translateY: 200 },
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
    yield await speakAsync('Начнём, как и полагается, с начала');
    yield await speakAsync('Первым в списке алгоритмов выступает');
    this.setState({ field1: { opacity: 1 } });
    yield await speakAsync('Генератор регистров сдвига');

    this.scene.current.nextBlock();
    yield await speakAsync(
      'Генерация каждого числа происходит путём многократного вычисления исключающего «ИЛИ» текущего числа и его битового сдвига',
    );

    this.scene.current.nextBlock();
    this.setState({ field2: { opacity: 1, color: '#fcae1e' } });
    yield await speakAsync(
      'Как и для любого рандомайзера нам необходимы входные значения. Увы, это лишь математика. Магия не существует',
    );
    this.setState({ field2: { opacity: 1, color: 'red' } });
    yield await speakAsync(
      'Нельзя полагаться на системное время. Это очень плохой источник энтропии',
    );

    this.scene.current.nextBlock();
    yield await speakAsync(
      'В идеале, их можно взять с физического рандомайзера, но в случае, если он недоступен, подойдёт и другой генератор',
    );

    this.scene.current.nextBlock();
    yield await speakAsync(
      'Для данного алгоритма нам потребуется 128 бит информации. Либо же двое шестидесяти четырёх битных беззнаковых целых чисел',
    );
    this.setState({
      field3: { opacity: 1, translateX: 0 },
    });

    this.scene.current.nextBlock();
    yield await speakAsync('Пусть это будут эти два числа');

    this.scene.current.nextBlock();
    this.setState({ field4: { opacity: 1 } });
    yield await speakAsync(
      'В первую очередь нам нужно сохранить их копии во временные переменные',
    );

    this.scene.current.nextBlock();
    this.setState({ field5: { opacity: 1 } });
    yield await speakAsync('Теперь копируем значение второго числа в первое');

    this.scene.current.nextBlock();
    yield await speakAsync('Переходим к математике!');

    this.scene.current.nextBlock();
    this.setState({ field6: { val: 10356298612736, color: '#fcae1e' } });
    yield await speakAsync(
      'Сдвигаем t на 23 бита влево. Для этого, представив число в двоичной системе, уберём 23 бита слева и допишем 23 нуля справа. Вуаля',
    );

    this.scene.current.nextBlock();
    this.setState({ field7: { val: 10356299847303, color: '#fcae1e' } });
    yield await speakAsync(
      'Записываем в t результат операции исключающего «ИЛИ», между t, и тем, что получили в прошлом шаге',
    );

    this.scene.current.nextBlock();
    this.setState({ field8: { val: 10356359919438, color: '#fcae1e' } });
    yield await speakAsync('Точно также делаем сдвиг вправо на 17 байт');

    this.scene.current.nextBlock();
    this.setState({ field9: { val: 10357279629297, color: '#fcae1e' } });
    yield await speakAsync(
      'Пускаем в ход переменную s - копию второго начального числа',
    );

    this.scene.current.nextBlock();
    yield await speakAsync(
      'И последний шаг. Сохраняем t в качестве второго числа-состояния, для будущих запусков, после чего можем смело возвращать сумму этого самого числа и сохранённой копии переменной b',
    );
    yield await speakAsync('Звучит сложно');
    this.setState({ field10: { opacity: 1, translateY: 0 } });
    yield await speakAsync('Но на деле две строчки');

    this.scene.current.nextBlock();
    yield await speakAsync(
      'Небольшая заметка... Часто необходимо приводить число к промежутку от нуля до единицы. Для этого в нашем случае необходимо разделить результат на максимальное возможное значение нашего типа',
    );
  }

  render() {
    return (
      <SceneController ref={this.scene}>
        <>
          <Text style={styles.text}>Начнём, как и полагается, с начала.</Text>
          <Text style={styles.text}>
            Первым в списке алгоритмов выступает...
          </Text>
          <Spring to={this.state.field1} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock textStyle={field}>
                ►XorShift+◄
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            Генерация каждого числа происходит путём многократного вычисления
            исключающего «ИЛИ» текущего числа и его битового сдвига.
          </Text>
        </>
        <>
          <Text style={styles.text}>
            Как и для любого рандомайзера нам необходимы входные значения. Увы,
            это лишь математика. Магия не существует.
          </Text>
          <Text style={styles.text}>
            Нельзя полагаться на системное время. Это очень плохой источник
            энтропии (рандома).
          </Text>
          <Spring to={this.state.field2} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock textStyle={field}>
                {new Date().toLocaleTimeString()}
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            В идеале, их можно взять с физического рандомайзера, но в случае,
            если он недоступен, подойдёт и другой генератор.
          </Text>
        </>
        <>
          <Text style={styles.text}>
            Для данного алгоритма нам потребуется 128 бит информации. Либо же 2
            переменные типа uint64_t.
          </Text>
        </>
        <>
          <Text style={styles.text}>Пусть это будут</Text>
          <Spring to={this.state.field3} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock
                textStyle={{
                  opacity: field.opacity,
                  transform: [{ translateX: field.translateX }],
                }}
              >
                1234567 и 987654321
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            В первую очередь нам нужно сохранить их копии во временные
            переменные:
          </Text>
          <Spring to={this.state.field4} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock textStyle={field}>
                {'t = state.a (1234567)\ns = state.b (987654321)'}
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            Теперь копируем значение второго числа в первое:
          </Text>
          <Spring to={this.state.field5} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock textStyle={field}>
                state.a = s
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>Переходим к математике!</Text>
        </>
        <>
          <Text style={styles.text}>
            Сдвигаем t на 23 бита влево. Для этого представим число в двоичной
            системе, уберём 23 бита слева и допишем 23 нуля справа. Вуаля.
          </Text>
          <Spring to={this.state.field6} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock textStyle={{ color: field.color }}>
                {`1234567 << 23 = ${Math.floor(field.val)}`}
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            Записываем в t результат операции исключающего «ИЛИ» между t и тем,
            что получили в прошлом шаге:
          </Text>
          <Spring to={this.state.field7} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock textStyle={{ color: field.color }}>
                {`t ^= t << 23 = ${Math.floor(field.val)}`}
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            Точно также делаем сдвиг вправо на 17 байт:
          </Text>
          <Spring to={this.state.field8} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock textStyle={{ color: field.color }}>
                {`t ^= t >> 17 = ${Math.floor(field.val)}`}
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            Пускаем в ход переменную s (копию второго начального числа).
          </Text>
          <Spring to={this.state.field9} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock textStyle={{ color: field.color }}>
                {`t ^= s ^ (s >> 26) = ${Math.floor(field.val)}`}
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            И последний шаг. Сохраняем t в качестве второго числа-состояния для
            будущих запусков, после чего можем смело возвращать сумму этого
            самого числа и сохранённой копии переменной b. Звучит сложно, но на
            деле 2 строчки:
          </Text>
          <Spring to={this.state.field10} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock
                textStyle={{
                  opacity: field.opacity,
                  transform: [{ translateY: field.translateY }],
                }}
              >
                {'state.b = t\nreturn t + s (10358267283618)'}
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            Небольшая заметка. Часто необходимо приводить число к промежутку от
            0 до 1. Для этого в нашем случае необходимо разделить результат на
            максимальное возможное значение нашего типа (0xffffffffffffffff).
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

export default XorShift;
