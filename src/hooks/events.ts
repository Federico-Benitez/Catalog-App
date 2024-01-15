import {useQuery} from '@tanstack/react-query';
import getEvents from '../services/events';

export function useGetEvents() {
  return useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  });
}
