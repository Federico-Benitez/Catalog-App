import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './home';
import EventDetailScreen from './event-detail';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavouritesScreen from './favourites';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export type RootStackParamList = {
  Events: undefined;
  EventDetail: {id: number; title: string; image_url: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const screens = [
  {
    name: 'Events',
    screen: HomeScreen,
  },
  {
    name: 'EventDetail',
    screen: EventDetailScreen,
  },
] as const;

function Event() {
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

export default function ScreenStacks() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName = route.name === 'Home' ? 'home' : 'favorite';

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name="Home"
          options={{headerShown: false, tabBarLabel: 'Home'}}
          component={Event}
        />
        <Tab.Screen
          name="favourites"
          options={{headerShown: false, tabBarLabel: 'Favourites'}}
          component={FavouritesScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
