<template>
    <div class="event-item">
        <h3>{{ event.summary }}</h3>
        <p><strong>Date:</strong> {{ event.start }}</p>
        <p><strong>Location:</strong> {{ event.location }}</p>
        <button @click="addToCalendar">Add to Calendar</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { Event as EventType } from '../store/Event'; // Ensure this is the correct path

export default defineComponent({
    name: 'EventItem',
    props: {
        event: {
            type: Object as PropType<EventType>, // Define the prop type
            required: true
        }
    },
    methods: {
        addToCalendar() {
            alert(`Added ${this.event.summary} to your calendar!`); // Use this.event
        }
    }
})
</script>

<style scoped>
.event-item {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
}
</style>
