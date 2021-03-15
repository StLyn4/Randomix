import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import PreferencesContext from 'app/context/preferences';
import Test from '@/Test';

const Tabs = createMaterialBottomTabNavigator();
const None = () => null;

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
        name="Notes"
        component={Test}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name={tabInfo.focused ? 'musical-notes' : 'musical-notes-outline'}
              size={25}
              color={tabInfo.color}
            />
          ),
          tabBarColor: theme.dark ? null : theme.colors.surface,
        }}
      />
      <Tabs.Screen
        name="Image"
        component={None}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name={tabInfo.focused ? 'image' : 'image-outline'}
              size={25}
              color={tabInfo.color}
            />
          ),
          tabBarColor: theme.dark ? null : theme.colors.surface,
        }}
      />
      <Tabs.Screen
        name="Some people"
        component={Test}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name={tabInfo.focused ? 'people' : 'people-outline'}
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
