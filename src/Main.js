import React from 'react';
import { View, Appearance } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import PreferencesContext from 'app/context/preferences';
import RootNavigator from '%/RootNavigator';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: { ...PaperDefaultTheme.colors, ...NavigationDefaultTheme.colors },
};
const CombinedDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: { ...NavigationDarkTheme.colors, ...PaperDarkTheme.colors },
};

class Main extends React.Component {
  state = {
    isDark: false,
  };

  toggleTheme = () => {
    this.setState((prevState) => {
      AsyncStorage.setItem(
        'isDarkTheme',
        JSON.stringify(!prevState.isDark),
      ).catch(() => null);
      return { isDark: !prevState.isDark };
    });
  };

  isDarkTheme = async () => {
    const isDarkTheme = await AsyncStorage.getItem('isDarkTheme').catch(
      () => Appearance.getColorScheme() === 'dark',
    );
    return isDarkTheme ?? Appearance.getColorScheme() === 'dark';
  };

  componentDidMount = async () => {
    this.setState({ isDark: await this.isDarkTheme() });
  };

  render() {
    const theme = this.state.isDark ? CombinedDarkTheme : CombinedDefaultTheme;
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: theme.colors.background,
        }}
      >
        <PaperProvider
          theme={theme}
          settings={{ icon: (props) => <Ionicons {...props} /> }}
        >
          <NavigationContainer
            theme={theme}
            documentTitle={{
              formatter: (options, route) => {
                const routeName = options?.title ?? route?.name;
                return routeName ? `Randomix: ${routeName}` : 'Randomix2';
              },
            }}
          >
            <PreferencesContext.Provider
              value={{
                toggleTheme: this.toggleTheme,
                theme,
              }}
            >
              <RootNavigator />
            </PreferencesContext.Provider>
          </NavigationContainer>
        </PaperProvider>
      </View>
    );
  }
}

export default Main;
