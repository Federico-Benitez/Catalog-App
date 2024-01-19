import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {useMemo} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../store';
import {toggleEvent} from '../services/event-slice';
import Animated, {FadeIn} from 'react-native-reanimated';
import notifee from '@notifee/react-native';
import {RootStackParamList} from '../screens';

export default function AddToFavoritesButton() {
  const {params} = useRoute<RouteProp<RootStackParamList, 'EventDetail'>>();
  const dispatch = useAppDispatch();
  const isSaved = useIsSaved();
  const color = isSaved ? 'red' : 'white';

  const handlePress = () => {
    dispatch(
      toggleEvent({
        id: params.id,
        name: params.title,
        picture: params.image_url,
        date: params.date,
      }),
    );
    onDisplayNotification();
  };

  async function onDisplayNotification() {
    if (isSaved) {
      return;
    }
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: `${params.title} added on favorites`,
      body: `Remember to go on ${params.date}`,
      android: {
        channelId,

        pressAction: {
          id: 'default',
        },
      },
    });
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Animated.View key={color} entering={FadeIn}>
        <MaterialIcons
          name={`favorite${isSaved ? '' : '-outline'}`}
          size={20}
          color={color}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}

const useIsSaved = () => {
  const {params} = useRoute();
  const eventId = (params as {id: number}).id;

  const savedEventsIds = useAppSelector(state => state.events.ids);
  const isSaved = useMemo(() => {
    return savedEventsIds.find(id => id === eventId);
  }, [savedEventsIds, eventId]);

  return isSaved;
};

const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderRadius: 20,
    alignSelf: 'flex-end',
    backgroundColor: '#dedede',
  },
});
