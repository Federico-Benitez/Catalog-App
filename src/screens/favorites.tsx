import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
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
  }) => {
    navigate('EventDetail', event);
  };
  const onRemove = (id: number) => {
    dispatch(toggleEvent({id, name: '', picture: ''}));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Events</Text>

      <FlatList
        data={favourites}
        renderItem={({item}) => (
          <View style={styles.item}>
            <View style={{flexDirection: 'row'}}>
              <Image source={{uri: item.picture}} style={styles.image} />
              <Text style={styles.itemTitle}>{item.name}</Text>
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
});
