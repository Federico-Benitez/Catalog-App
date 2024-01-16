import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './home';
import EventDetailScreen from './event-detail';

export type RootStackParamList = {
  Home: undefined;
  EventDetail: {id: number; title: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const screens = [
  {
    name: 'Home',
    screen: HomeScreen,
  },
  {
    name: 'EventDetail',
    screen: EventDetailScreen,
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
