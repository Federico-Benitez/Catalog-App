import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useEvents} from '../hooks/events';

import ListItem from '../components/events/list-item';

export default function HomeScreen() {
  const {data, status, fetchNextPage, isFetchingNextPage} = useEvents();

  function loadMore() {
    fetchNextPage();
  }

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

  return (
    <FlatList
      data={data.pages.map(page => page.data).flat()}
      renderItem={({item}) => <ListItem data={item} />}
      keyExtractor={item => item.id.toString()}
      onEndReachedThreshold={0.2}
      style={styles.container}
      onEndReached={loadMore}
      ListFooterComponent={isFetchingNextPage ? LoadingSpinner : null}
    />
  );
}

function LoadingSpinner() {
  return (
    <ActivityIndicator
      color={'#303030'}
      size={'large'}
      style={styles.spinner}
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
  spinner: {
    marginVertical: 20,
  },
});
