import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {useEventDetails} from '../hooks/events';
import AddToFavoritesButton from '../components/add-to-fav';

export default function EventDetailScreen({route}) {
  const {params} = route;

  const {data} = useEventDetails(params.id);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{params.title}</Text>
      <Text style={styles.time}>{data?.date_display}</Text>
      <View
        style={[
          styles.header,
          data?.is_sold_out ? {justifyContent: 'space-between'} : null,
        ]}>
        {data?.is_sold_out && <Text style={styles.soldOut}>Sold Out</Text>}
        <AddToFavoritesButton />
      </View>
      <Image source={{uri: params.image_url}} style={styles.image} />

      {data && (
        <>
          <Text>{cleanText(data?.description)}</Text>

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
  time: {fontSize: 18, color: '#565656', marginVertical: 5},
  image: {
    width: '100%',
    height: 300,
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  soldOut: {
    backgroundColor: '#e05e5e',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 2,
    alignItems: 'center',
  },
});
