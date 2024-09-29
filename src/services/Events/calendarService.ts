// services/calendarService.js

import axios from 'axios'
import {Event} from '../../store/Event'
import {AxiosError} from 'axios'

export default {
  async getEvents(): Promise<Event[]> {
    try {
      const response = await axios.get<Event[]>(`http://localhost:3001/api/events`);
      return response.data;
    } catch (error) {
      if(error instanceof AxiosError) {

        console.error('Error fetching events: ', error.response?.data?.message);
        throw new Error(error.response?.data?.message || 'Failed to fetch events')
      }
      console.error('Unexpected error:', error);
      throw new Error('Unexpected error occurred.')
    }
  }
}