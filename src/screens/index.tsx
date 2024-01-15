import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './home';

const Stack = createNativeStackNavigator();

const screens = [
  {
    name: 'home',
    screen: HomeScreen,
  },
] as const;

export default function ScreenStacks() {
  return (
    <Stack.Navigator>
      {screens.map(({name, screen}) => (
        <Stack.Screen
          key={name}
          name={name}
          component={screen}
          options={{title: 'Art of Chicago'}}
        />
      ))}
    </Stack.Navigator>
  );
}
