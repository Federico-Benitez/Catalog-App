import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';

import {Event} from '../../services/types';
import ListItem from './list-item';

export default function EventList({data}: {data: Event[]}) {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <ListItem data={item} />}
      style={styles.container}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  separator: {
    height: 10,
  },
});
