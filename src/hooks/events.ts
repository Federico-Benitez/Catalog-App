import {useQuery} from '@tanstack/react-query';
import {getAllEvents, getEvent} from '../services/events';

export function useEvents() {
  return useQuery({
    queryKey: ['events'],
    queryFn: getAllEvents,
  });
}

export function useEventDetails(id: number) {
  return useQuery({
    queryKey: ['event', id],
    queryFn: () => getEvent(id),
  });
}
