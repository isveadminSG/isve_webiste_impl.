import { ref, computed } from 'vue';
// Import the events data from the events.js file
import { } from '../services/errors.js'
import calendarService from '../services/Events/calendarService.js';
import type { Event } from '../store/Event.js';


export function useEventController() {
  const events = ref<Event[]>([]);
  const searchTerm = ref('');
  const pending = ref(false);
  const error = ref('');

  const fetchEvents = async () => {
    pending.value = true;
    error.value = '';

 
    try {
        events.value = await calendarService.getEvents();
      } catch (err) {
        error.value = "Failed to load events.";
        if (err instanceof Error) {
          error.value += ` ${err.message}`; // Append error message if available
        }
        console.error(err);
      } finally {
        pending.value = false;
      }
}

  fetchEvents();

  // Filter events based on search term
  const filteredEvents = computed(() => {
    if (!searchTerm.value) return events.value;
    return events.value.filter((event: { summary: string; }) =>
      event.summary.toLowerCase().includes(searchTerm.value.toLowerCase()),
      
    );
  });

  const hasFilteredEvents = computed(() => filteredEvents.value.length > 0);

    // Return only the first two events
  const firstTwoEvents = computed(() => {
    return events.value.slice(0, 2); // Return only the first two
  });
  
  return {
    events,
    searchTerm,
    filteredEvents,
    firstTwoEvents,
    hasFilteredEvents,
    pending,
    error,
    fetchEvents
  };
}
