import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {getAllEvents, getEvent} from '../services/events';

export function useEvents() {
  return useInfiniteQuery({
    queryKey: ['events'],
    initialPageParam: 1,
    queryFn: getAllEvents,
    getNextPageParam: lastPage => {
      if (lastPage.pagination.next_url) {
        return lastPage.pagination.current_page + 1;
      }

      return null;
    },
  });
}

export function useEventDetails(id: number) {
  return useQuery({
    queryKey: ['event', id],
    queryFn: () => getEvent(id),
  });
}
