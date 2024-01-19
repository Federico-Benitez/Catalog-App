import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../store';
import {toggleEvent} from '../services/event-slice';
import {useAppNavigation} from '../hooks/useNavigate';

export default function FavoritesScreen() {
  const favourites = useAppSelector(state => state.events.saved);
  const dispatch = useAppDispatch();

  const {navigate} = useAppNavigation();

  const onDisplayDetails = (event: {
    id: number;
    title: string;
    image_url: string;
    date: string;
  }) => {
    navigate('EventDetail', event);
  };
  const onRemove = (id: number) => {
    dispatch(toggleEvent({id, name: '', picture: '', date: ''}));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Events</Text>

      <FlatList
        data={favourites}
        ListEmptyComponent={<EmptyListMessage />}
        renderItem={({item}) => (
          <View style={styles.item}>
            <View style={{flexDirection: 'row'}}>
              <Image source={{uri: item.picture}} style={styles.image} />
              <View style={{flex: 1}}>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemTitle}>{item.date}</Text>
              </View>
            </View>
            <View style={styles.itemButtonContainer}>
              <TouchableOpacity onPress={() => onRemove(item.id)}>
                <Text style={styles.remove}>Remove from Favorites</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  onDisplayDetails({
                    id: item.id,
                    title: item.name,
                    image_url: item.picture,
                    date: item.date,
                  })
                }>
                <Text style={styles.seeDetails}>See Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        style={styles.list}
      />
    </View>
  );
}

function EmptyListMessage() {
  const {height} = useWindowDimensions();
  const {navigate} = useAppNavigation();

  const onRedirect = () => {
    navigate('Events');
  };
  return (
    <View style={[styles.empty, {height: height * 0.8}]}>
      <Text style={styles.emptyMessage}>
        There are currently no events saved.
      </Text>
      <TouchableOpacity onPress={onRedirect}>
        <Text style={styles.redirect}>Go to list of Events</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  list: {
    flexGrow: 1,
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
    padding: 10,
    marginVertical: 5,
    borderRadius: 12,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  separator: {
    height: 10,
  },
  itemTitle: {
    color: '#4d4d4d',
    fontWeight: 'bold',
    flex: 1,
    paddingHorizontal: 10,
  },
  itemButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  seeDetails: {
    color: '#b50938',
  },
  remove: {
    color: '#bc420a',
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    color: '#4a4a4a',
    fontSize: 18,
  },
  redirect: {
    marginTop: 20,
    color: '#2e3cd3',
  },
});
