import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useEventDetails} from '../hooks/events';

export default function EventDetailScreen({route}) {
  const {params} = route;

  const {data} = useEventDetails(params.id);

  return (
    <View>
      <Text>{params.title}</Text>
      {data && (
        <>
          <Image source={{uri: data?.image_url}} style={styles.image} />
          <Text>{data?.description}</Text>
          <Text>Is sold out: {JSON.stringify(data?.is_sold_out)} </Text>
          <Text>Is free: {JSON.stringify(data?.is_free)}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
});
