import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import PreferencesContext from 'app/context/preferences';
import MainTabs from '%/MainTabs';
import Info from '%/Info';

const Stack = createStackNavigator();

export default function RootNavigator() {
  const { toggleTheme, theme } = React.useContext(PreferencesContext);
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <Stack.Navigator
        initialRouteName="MainTabs"
        headerMode="screen"
        screenOptions={{
          animationEnabled: true,
          header: (nav) => {
            const { options } = nav.scene.descriptor;
            const title =
              options.headerTitle ?? options.title ?? nav.scene.route.name;

            return (
              <Appbar.Header
                theme={{ colors: { primary: theme.colors.surface } }}
              >
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={
                    nav.previous
                      ? nav.navigation.goBack
                      : () => nav.navigation.navigate('Информация')
                  }
                  hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
                >
                  <Ionicons
                    name={
                      nav.previous
                        ? 'chevron-back-outline'
                        : 'newspaper-outline'
                    }
                    size={32}
                    color={theme.colors.primary}
                  />
                </TouchableOpacity>
                <Appbar.Content
                  title={title}
                  titleStyle={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: theme.colors.primary,
                  }}
                />
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={toggleTheme}
                  hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
                >
                  <Ionicons
                    name={theme.dark ? 'moon-outline' : 'sunny-outline'}
                    size={32}
                    color={theme.colors.primary}
                  />
                </TouchableOpacity>
              </Appbar.Header>
            );
          },
        }}
      >
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={({ route }) => {
            const routeName =
              getFocusedRouteNameFromRoute(route) ?? 'XorShift+';
            return {
              headerTitle: `Randomix: ${routeName}`,
            };
          }}
        />
        <Stack.Screen
          name="Информация"
          component={Info}
          options={{ headerTitle: 'Randomix: Информация' }}
        />
      </Stack.Navigator>
    </View>
  );
}
