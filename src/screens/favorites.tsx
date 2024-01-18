import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import {useAppSelector} from '../store';

export default function FavoritesScreen() {
  const favourites = useAppSelector(state => state.events.saved);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Events</Text>

      <FlatList
        data={favourites}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Image source={{uri: item.picture}} style={styles.image} />
            <Text style={styles.itemTitle}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    color: '#303030',
    fontSize: 30,
    marginVertical: 10,
  },
  item: {
    borderWidth: 1,
    borderColor: '#dedede',
    padding: 15,
  },
  image: {
    width: 50,
    height: 50,
  },
  separator: {
    height: 10,
  },
  itemTitle: {
    color: '#b50938',
    fontWeight: 'bold',
  },
});
