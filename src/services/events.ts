import API from '../config';
import {Event, EventResponse} from './types';

const endpoints = {
  events: '/events',
};

export async function getAllEvents() {
  const response = await API.get<EventResponse>(endpoints.events);

  return response.data;
}

export async function getEvent(id: number) {
  const response = await API.get<{data: Event}>(endpoints.events + `/${id}`);

  return response.data.data;
}
