import {Text, StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Event} from '../../types';

import {useAppNavigation} from '../../hooks/useNavigate';

export default function ListItem({data}: {data: Event}) {
  const {id, title, image_url, date_display} = data;

  const {navigate} = useAppNavigation();
  const onPress = () => {
    navigate('EventDetail', {id, title, image_url, date: date_display});
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.image} alt={title} source={{uri: image_url}} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>

        <Text style={styles.text}>{date_display}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#c0c0c0',
    borderRadius: 12,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  text: {
    flex: 1,
    color: '#292929',
  },
});
