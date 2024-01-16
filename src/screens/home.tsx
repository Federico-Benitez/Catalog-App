import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useEvents} from '../hooks/events';
import EventList from '../components/events/list';

export default function HomeScreen() {
  const {data, status} = useEvents();

  if (status === 'pending') {
    return <ActivityIndicator size={'large'} />;
  }

  if (!data) {
    return (
      <View>
        <Text>{'Error on load events'}</Text>
      </View>
    );
  }

  return <EventList data={data?.data} />;
}