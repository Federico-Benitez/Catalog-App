import {Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {useEventDetails} from '../hooks/events';
import AddToFavouritesButton from '../components/add-to-fav';

export default function EventDetailScreen({route}) {
  const {params} = route;

  const {data} = useEventDetails(params.id);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{params.title}</Text>
      <AddToFavouritesButton />
      {data && (
        <>
          <Image source={{uri: data?.image_url}} style={styles.image} />
          <Text>{cleanText(data?.description)}</Text>
          <Text style={styles.text}>
            {data.is_sold_out ? 'Is sold out' : 'Is available'}{' '}
          </Text>
          <Text style={styles.text}>
            {data.is_free ? 'Is free' : 'Is paid'}
          </Text>
        </>
      )}
    </ScrollView>
  );
}

function cleanText(value: string) {
  const regex = /(<([^>]+)>)/gi;
  return value.replace(regex, '');
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  image: {
    width: '100%',
    height: 300,
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
  },
});
