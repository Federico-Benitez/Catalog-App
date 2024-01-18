import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function AddToFavouritesButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>Add to favourites</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e41212',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
});
