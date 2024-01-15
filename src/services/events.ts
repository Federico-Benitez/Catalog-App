import API from '../config';
import {EventResponse} from './types';

const endpoints = {
  events: '/events',
};

export default async function getEvents() {
  const response = await API.get<EventResponse>(endpoints.events);

  return response.data;
}
