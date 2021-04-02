import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import PreferencesContext from 'app/context/preferences';
import XorShift from '%/XorShift';
import MT from '%/MT';
import Fortune from '%/Fortune';
import Game from '%/Game';

const Tabs = createMaterialBottomTabNavigator();

export default function MainTabs() {
  const { theme } = React.useContext(PreferencesContext);
  return (
    <Tabs.Navigator
      initialRouteName="Test"
      backBehavior="initialRoute"
      shifting
      sceneAnimationEnabled
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.text}
    >
      <Tabs.Screen
        name="XorShift+"
        component={XorShift}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name={
                tabInfo.focused
                  ? 'chevron-forward-circle'
                  : 'chevron-forward-circle-outline'
              }
              size={25}
              color={tabInfo.color}
            />
          ),
          tabBarColor: theme.dark ? null : theme.colors.surface,
        }}
      />
      <Tabs.Screen
        name="Вихрь Мерсенна"
        component={MT}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name={tabInfo.focused ? 'flash' : 'flash-outline'}
              size={25}
              color={tabInfo.color}
            />
          ),
          tabBarColor: theme.dark ? null : theme.colors.surface,
        }}
      />
      <Tabs.Screen
        name="Fortune"
        component={Fortune}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name={tabInfo.focused ? 'eye' : 'eye-outline'}
              size={25}
              color={tabInfo.color}
            />
          ),
          tabBarColor: theme.dark ? null : theme.colors.surface,
        }}
      />
      <Tabs.Screen
        name="Поиграем!"
        component={Game}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name={
                tabInfo.focused ? 'game-controller' : 'game-controller-outline'
              }
              size={25}
              color={tabInfo.color}
            />
          ),
          tabBarColor: theme.dark ? null : theme.colors.surface,
        }}
      />
    </Tabs.Navigator>
  );
}
