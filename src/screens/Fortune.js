import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { config } from 'react-spring/native';
import { Spring } from 'react-spring/renderprops-native';

import SceneController from '@/SceneController';
import { AnimatedCodeBlock } from '#/Animated';
import speakAsync from '#/speakAsync';

class Fortune extends React.Component {
  state = {
    field1: { opacity: 0 },
    field2: { opacity: 0, translateX: 500 },
    field3: { opacity: 0, translateX: 500 },
    field4: { opacity: 0, translateX: 500 },
    field5: { opacity: 0 },
    field6: { opacity: 0, translateX: 500 },
    field7: { opacity: 0, translateX: 500 },
    field8: { opacity: 0 },
    field9: { opacity: 0 },
    field10: {
      color: '#808080',
      i1: 100,
      i2: 200,
      i3: 300,
      p1: 1000,
      p2: 1000,
      p3: 1000,
    },
  };

  scene = React.createRef();

  abortHandler = async () => {
    this.setState({
      field1: { opacity: 0 },
      field2: { opacity: 0, translateX: 500 },
      field3: { opacity: 0, translateX: 500 },
      field4: { opacity: 0, translateX: 500 },
      field5: { opacity: 0 },
      field6: { opacity: 0, translateX: 500 },
      field7: { opacity: 0, translateX: 500 },
      field8: { opacity: 0 },
      field9: { opacity: 0 },
      field10: {
        color: '#808080',
        i1: 100,
        i2: 200,
        i3: 300,
        p1: 1000,
        p2: 1000,
        p3: 1000,
      },
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
    yield await speakAsync('А теперь переходим к наиболее сладкому');
    yield await speakAsync(
      'Бывают такие моменты, когда случайности предыдущих двух алгоритмов недостаточно. К примеру, в криптографии. Тут нам на помощь приходит Фортуна',
    );

    this.scene.current.nextBlock();
    this.setState({ field1: { opacity: 1 } });
    yield await speakAsync(
      'В первую очередь нам нужен сид - минимум 32 байта. Да, минимум',
    );
    yield await speakAsync(
      'Максимум же можно передать 32 сида любого размера, важно только чтобы первый был размером 32 байта и больше',
    );

    this.scene.current.nextBlock();
    yield await speakAsync('Система состоит из трёх частей');
    this.setState({ field2: { opacity: 1, translateX: 0 } });
    yield await speakAsync('Генератор');
    this.setState({ field3: { opacity: 1, translateX: 0 } });
    yield await speakAsync('Аккумулятор и пулы');
    this.setState({ field4: { opacity: 1, translateX: 0 } });
    yield await speakAsync('Кэш');

    this.scene.current.nextBlock();
    yield await speakAsync('Начнём с генератора');
    yield await speakAsync(
      'Это святая святых рандомайзера. Алгоритм его работы порой прост на словах, и сложен в реализации. А порой совсем наоборот',
    );

    this.scene.current.nextBlock();
    yield await speakAsync(
      'Он являет собой, по сути, блочный шифр в режиме счётчика. В данной реализации было принято решение использовать алгоритм "AES-256-CTR"',
    );
    yield await speakAsync(
      'Сами же случайные значения - байты, которые мы получаем от шифра',
    );

    this.scene.current.nextBlock();
    yield await speakAsync('Для работы нам необходимо 3 вещи');
    this.setState({ field5: { opacity: 1 } });
    yield await speakAsync('Данные, ключ, и счётчик');
    yield await speakAsync(
      'Данными в нашем случае могут выступать обычные нулевые значения',
    );
    yield await speakAsync(
      'Счётчик - лишь шестнадцатибайтное число, значение которого увеличивается на 1 при каждом запуске шифра.',
    );

    this.scene.current.nextBlock();
    yield await speakAsync(
      'И самое интересное - ключ. Сперва нужно уточнить, что у ключей есть 2 источника',
    );
    this.setState({ field6: { opacity: 1, translateX: 0 } });
    yield await speakAsync('Аккумулятор');
    this.setState({ field7: { opacity: 1, translateX: 0 } });
    yield await speakAsync('И сам шифр');

    this.scene.current.nextBlock();
    this.setState({ field8: { opacity: 1 } });
    yield await speakAsync(
      'Перед тем, как шифровать данные, алгоритм разбивает их на блоки размером 65536 байт',
    );
    yield await speakAsync(
      'Перед обработкой каждого из них шифр запускается ещё раз, генерируя 32 байта информации. Как раз для нового ключа',
    );

    this.scene.current.nextBlock();
    this.setState({ field9: { opacity: 1 } });
    yield await speakAsync(
      'Но также нужно учесть, что финальный ключ - это не просто сырые данные',
    );
    yield await speakAsync('Это хеш, хеша объединения старого и нового ключей');

    this.scene.current.nextBlock();
    yield await speakAsync('Переходим к аккумулятору');
    this.setState({
      field10: {
        color: '#fcae1e',
        i1: 0,
        i2: 0,
        i3: 0,
        p1: 1100,
        p2: 1200,
        p3: 1300,
      },
    });
    yield await speakAsync(
      'Его задача - получать с внешних источников данные и распределять их по тридцати двум пулам',
    );
    yield await speakAsync(
      'Когда пулы достаточно большие, запускается механизм обновления ключа (но не чаще десяти раз в секунду)',
    );
    yield await speakAsync(
      'При этом первый пул используется всегда, второй пул - каждый второй раз, третий - каждый четвёртый раз и так далее',
    );

    this.scene.current.nextBlock();
    yield await speakAsync(
      'И пока что последняя, но не менее важная часть - кэш. Он не есть частью стандарта',
    );
    yield await speakAsync(
      'Просто показал себя с лучшей стороны, увеличив скорость работы в десятки раз',
    );

    this.scene.current.nextBlock();
    yield await speakAsync(
      'Видите ли, при генерации обычного числа нам необходимо ровно 4 байта информации',
    );
    yield await speakAsync(
      'И каждые 4 байта шифровать отдельно - это надёжно, но очень медленно',
    );
    yield await speakAsync(
      'Поэтому кэш запрашивает у генератора сразу большие куски информации (например, 100 килобайт) и отдаёт их постепенно',
    );
    yield await speakAsync(
      'Если в процессе нужно будет изменить ключ, то записанные значения признаются ненадёжными и стираются...',
    );

    this.scene.current.nextBlock();
    yield await speakAsync('А теперь давайте немного поиграем');
  }

  render() {
    return (
      <SceneController ref={this.scene}>
        <>
          <Text style={styles.text}>
            А теперь переходим к наиболее сладкому.
          </Text>
          <Text style={styles.text}>
            Бывают такие моменты, когда случайности предыдущих двух алгоритмов
            недостаточно. К примеру, в криптографии. Тут нам на помощь приходит
            Фортуна.
          </Text>
        </>
        <>
          <Text style={styles.text}>
            В первую очередь нам нужен сид - минимум 32 байта. Да, минимум.
            Максимум же можно передать 32 сида любого размера, важно только
            чтобы первый был размером 32 байта и больше.
          </Text>
          <Spring to={this.state.field1} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock textStyle={field}>
                seed = [ randomBytes(32), ... ]
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>Система состоит из 3 частей:</Text>
          <Spring to={this.state.field2} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock
                textStyle={{
                  opacity: field.opacity,
                  transform: [{ translateX: field.translateX }],
                }}
              >
                Генератор
              </AnimatedCodeBlock>
            )}
          </Spring>
          <Spring to={this.state.field3} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock
                textStyle={{
                  opacity: field.opacity,
                  transform: [{ translateX: field.translateX }],
                }}
              >
                Аккумулятор и пулы
              </AnimatedCodeBlock>
            )}
          </Spring>
          <Spring to={this.state.field4} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock
                textStyle={{
                  opacity: field.opacity,
                  transform: [{ translateX: field.translateX }],
                }}
              >
                Кэш
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            Начнём с генератора. Это святая святых рандомайзера. Алгоритм его
            работы порой прост на словах, и сложен в реализации. А порой совсем
            наоборот.
          </Text>
        </>
        <>
          <Text style={styles.text}>
            Он являет собой, по сути, блочный шифр в режиме счётчика. В данной
            реализации было принято решение использовать алгоритм AES-256-CTR.
            Сами же случайные значения - байты, которые мы получаем от шифра.
          </Text>
        </>
        <>
          <Text style={styles.text}>
            Для работы нам необходимо 3 вещи: данные, ключ и счётчик. Данными в
            нашем случае могут выступать обычные нулевые значения. Счётчик -
            лишь 16-байтное число, значение которого увеличивается на единицу
            при каждом запуске шифра.
          </Text>
          <Spring to={this.state.field5} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock textStyle={field}>
                {'AES(data, key, counter) => ???'}
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            И самое интересное - ключ. Сперва нужно уточнить, что у ключей есть
            2 источника:
          </Text>
          <Spring to={this.state.field6} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock
                textStyle={{
                  opacity: field.opacity,
                  transform: [{ translateX: field.translateX }],
                }}
              >
                Аккумулятор
              </AnimatedCodeBlock>
            )}
          </Spring>
          <Spring to={this.state.field7} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock
                textStyle={{
                  opacity: field.opacity,
                  transform: [{ translateX: field.translateX }],
                }}
              >
                Сам шифр
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            Перед тем, как шифровать данные, алгоритм разбивает их на блоки
            размером 65536 (0x10000) байт. Перед обработкой каждого из них шифр
            запускается ещё раз, генерируя 32 байта информации. Как раз для
            нового ключа.
          </Text>
          <Spring to={this.state.field8} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock textStyle={field}>
                {
                  '132000 (size) =>\n 1. AES(65536); *ReKey*\n 2. AES(65536); *ReKey*\n 3. AES(928); *ReKey*'
                }
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            Но также нужно учесть, что финальный ключ - это не просто сырые
            данные. Это хеш хеша (SHA256 в квадрате) объединения старого и
            нового ключей.
          </Text>
          <Spring to={this.state.field9} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock textStyle={field}>
                key = SHA256( SHA256( key_data ) )
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            Переходим к аккумулятору. Его задача - получать с внешних источников
            данные и распределять их по 32 пулам. Когда пулы достаточно большие,
            запускается механизм обновления ключа (но не чаще 10 раз в секунду).
            При этом первый пул используется всегда, второй пул - каждый второй
            раз, третий - каждый четвёртый раз и т.д..
          </Text>
          <Spring to={this.state.field10} config={config.wobbly}>
            {(field) => (
              <AnimatedCodeBlock textStyle={{ color: field.color }}>
                {`Input: [ ${Math.floor(field.i1)}, ${Math.floor(
                  field.i2,
                )}, ${Math.floor(field.i3)}, ... ]

Pool №1: ${Math.floor(field.p1)}
Pool №2: ${Math.floor(field.p2)}
Pool №3: ${Math.floor(field.p3)}
...`}
              </AnimatedCodeBlock>
            )}
          </Spring>
        </>
        <>
          <Text style={styles.text}>
            И пока что последняя, но не менее важная часть - кэш. Он не есть
            частью стандарта. Просто показал себя с лучшей стороны, увеличив
            скорость работы в десятки раз.
          </Text>
        </>
        <>
          <Text style={styles.text}>
            Видите ли, при генерации обычного числа нам необходимо ровно 4 байта
            информации. И каждые 4 байта шифровать отдельно - это надёжно, но
            очень медленно. Поэтому кэш запрашивает у генератора сразу большие
            куски информации (например, 100 КБ) и отдаёт их постепенно. Если в
            процессе нужно будет изменить ключ, то записанные значения
            признаются ненадёжными и стираются.
          </Text>
        </>
        <>
          <Text style={styles.text}>А теперь давайте немного поиграем 😁</Text>
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

export default Fortune;
