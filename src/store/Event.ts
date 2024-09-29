export interface Event {
  id: string;
  summary: string;
  start: {
    dateTime?: string; // Use dateTime for events with specific times
    date?: string; // Use date for all-day events
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
}