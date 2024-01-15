import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Event} from '../../services/types';

export default function ListItem({data}: {data: Event}) {
  const {id, title, image_url} = data;

  const onPress = () => {
    console.log('event', id);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{title}</Text>
      <Image style={styles.image} alt={title} source={{uri: image_url}} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
});
