import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text, List, TextInput, Button, Menu } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import random from 'fortune-js';

import PreferencesContext from 'app/context/preferences';
import NumberInput from '@/NumberInput';
import Dice from '@/Dice';
import CoinPlate from '@/CoinPlate';

class Game extends React.Component {
  state = {
    choiceExpanded: true,
    randomizer: null,
    randomizerName: null,
    choice3: 0,
    coin3Progress: { progress: 0 },
  };

  expandHandler = () => {
    this.setState((prevState) => ({
      choiceExpanded: !prevState.choiceExpanded,
    }));
  };

  changeRandomizer = (randomizer, name) => {
    this.setState({
      choiceExpanded: false,
      randomizer: random(randomizer),
      randomizerName: name,
    });
  };

  // -------------------------GAME-01----------------------------
  precision1Handler = (num) => {
    this.setState({ number1Precision: num });
  };

  min1Handler = (num) => {
    this.setState({ number1Min: num });
  };

  max1Handler = (num) => {
    this.setState({ number1Max: num });
  };

  gen1Handler = async () => {
    const { number1Min: min, number1Max: max } = this.state;
    const num = await this.state.randomizer.randFloatRange(min, max);
    this.setState((prevState) => ({
      number1Result: num.toFixed(prevState.number1Precision),
    }));
  };
  // ------------------------------------------------------------

  // -------------------------GAME-02----------------------------
  min2Handler = (num) => {
    this.setState({ number2Min: num });
  };

  max2Handler = (num) => {
    this.setState({ number2Max: num });
  };

  gen2Handler = async () => {
    const { number2Min: min, number2Max: max } = this.state;
    // eslint-disable-next-line
    const num = await this.state.randomizer.randRange(min, max);
    this.setState({
      number2Result: num,
    });
  };
  // ------------------------------------------------------------

  // -------------------------GAME-03----------------------------
  select3Handler = (num) => {
    this.setState({
      choice3: num,
      number3Result: null,
      coin3Progress: { progress: 0 },
    });
  };

  gen3Handler = async () => {
    // eslint-disable-next-line
    const num = await this.state.randomizer.randRange(0, 1);
    this.setState({
      number3Result: num,
      coin3Progress: { progress: num },
    });
  };
  // ------------------------------------------------------------

  // -------------------------GAME-04----------------------------
  gen4Handler = async () => {
    // eslint-disable-next-line
    const aiNum = await this.state.randomizer.randRange(1, 6);
    // eslint-disable-next-line
    const playerNum = await this.state.randomizer.randRange(1, 6);
    this.setState({
      ai4Result: aiNum,
      player4Result: playerNum,
    });
  };
  // ------------------------------------------------------------

  render() {
    const { theme } = this.context;
    return (
      <ScrollView style={styles.content}>
        <List.Accordion
          title={this.state.randomizerName ?? 'Выберите рандомайзер'}
          expanded={this.state.choiceExpanded}
          onPress={this.expandHandler}
          left={(props) => (
            <Ionicons name="shuffle-outline" size={32} color={props.color} />
          )}
        >
          <List.Item
            title="XorShift+"
            onPress={() => this.changeRandomizer('XorShift', 'XorShift+')}
            left={(props) => (
              <Ionicons
                name="chevron-forward-outline"
                size={32}
                color={props.color}
                style={styles.choiceIcon}
              />
            )}
          />
          <List.Item
            title="Вихрь Мерсенна"
            onPress={() =>
              this.changeRandomizer('MersenneTwister', 'Вихрь Мерсенна')
            }
            left={(props) => (
              <Ionicons
                name="flash-outline"
                size={32}
                color={props.color}
                style={styles.choiceIcon}
              />
            )}
          />
          <List.Item
            title="Fortune"
            onPress={() => this.changeRandomizer('Fortune', 'Fortune')}
            left={(props) => (
              <Ionicons
                name="eye-outline"
                size={32}
                color={props.color}
                style={styles.choiceIcon}
              />
            )}
          />
        </List.Accordion>

        {this.state.randomizer && (
          <>
            <Text style={styles.title}>Генерация действительного числа:</Text>
            <NumberInput
              label="Точность (0 - 10)"
              minValue={0}
              maxValue={10}
              roundTo={0}
              onEndEditing={this.precision1Handler}
            />
            <View style={styles.row}>
              <NumberInput
                label="От"
                default={-100}
                onEndEditing={this.min1Handler}
                style={{ flex: 1 }}
              />
              <NumberInput
                label="До"
                default={100}
                onEndEditing={this.max1Handler}
                style={{ flex: 1 }}
              />
            </View>
            <TextInput
              label="Результат"
              disabled
              value={String(this.state.number1Result ?? '')}
            />
            <Button
              icon="reload"
              disabled={this.state.number1Precision === undefined}
              mode="contained"
              onPress={this.gen1Handler}
            >
              Сгенерировать
            </Button>

            <Text style={styles.title}>Генерация целого числа:</Text>
            <View style={styles.row}>
              <NumberInput
                label="От"
                default={-100}
                roundTo={0}
                onEndEditing={this.min2Handler}
                style={{ flex: 1 }}
              />
              <NumberInput
                label="До"
                default={100}
                roundTo={0}
                onEndEditing={this.max2Handler}
                style={{ flex: 1 }}
              />
            </View>
            <TextInput
              label="Результат"
              disabled
              value={String(this.state.number2Result ?? '')}
            />
            <Button icon="reload" mode="contained" onPress={this.gen2Handler}>
              Сгенерировать
            </Button>

            <Text style={styles.title}>Что выпадет?</Text>
            <View style={styles.row}>
              <CoinPlate
                progress={this.state.coin3Progress}
                plateStyle={{
                  flex: 1,
                  backgroundColor: theme.colors.primary,
                }}
              />
              <View style={{ flex: 1 }}>
                <Menu.Item
                  icon={
                    this.state.choice3 === 0
                      ? 'checkbox-outline'
                      : 'square-outline'
                  }
                  titleStyle={
                    this.state.number3Result === 0
                      ? [styles.bold, { color: theme.colors.primary }]
                      : null
                  }
                  onPress={() => this.select3Handler(0)}
                  title="Орёл"
                />
                <Menu.Item
                  icon={
                    this.state.choice3 === 1
                      ? 'checkbox-outline'
                      : 'square-outline'
                  }
                  titleStyle={
                    this.state.number3Result === 1
                      ? [styles.bold, { color: theme.colors.primary }]
                      : null
                  }
                  onPress={() => this.select3Handler(1)}
                  title="Решка"
                />
              </View>
            </View>
            <Button icon="reload" mode="contained" onPress={this.gen3Handler}>
              Подбросить монетку
            </Button>

            <Text style={styles.title}>
              Бросаем кости! У кого будет больше?
            </Text>
            {this.state.player4Result && (
              <View style={styles.row}>
                <Dice
                  frameStyle={{ flex: 2 }}
                  imageStyle={{ backgroundColor: theme.colors.primary }}
                  number={this.state.ai4Result}
                />
                <Dice
                  frameStyle={{ flex: 2 }}
                  imageStyle={{ backgroundColor: theme.colors.primary }}
                  number={this.state.player4Result}
                />
                <View style={{ flex: 3 }}>
                  <Menu.Item
                    icon={
                      this.state.ai4Result >= this.state.player4Result
                        ? 'trophy-outline'
                        : 'close-circle-outline'
                    }
                    titleStyle={
                      this.state.ai4Result >= this.state.player4Result
                        ? [styles.bold, { color: theme.colors.primary }]
                        : null
                    }
                    disabled
                    title={`ИИ: ${this.state.ai4Result}`}
                  />
                  <Menu.Item
                    icon={
                      this.state.player4Result >= this.state.ai4Result
                        ? 'trophy-outline'
                        : 'close-circle-outline'
                    }
                    titleStyle={
                      this.state.player4Result >= this.state.ai4Result
                        ? [styles.bold, { color: theme.colors.primary }]
                        : null
                    }
                    disabled
                    title={`Вы: ${this.state.player4Result}`}
                  />
                </View>
              </View>
            )}
            <Button icon="reload" mode="contained" onPress={this.gen4Handler}>
              Бросить кости
            </Button>
          </>
        )}
      </ScrollView>
    );
  }
}

Game.contextType = PreferencesContext;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  choiceIcon: {
    marginLeft: 10,
  },
  title: {
    marginTop: 15,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Game;
