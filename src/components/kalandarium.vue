<script lang="ts">
import { ref, watch } from 'vue';
import EventItem from "../models/EventItem.vue";
import { useEventController } from "../composables/useEventController";

// Using the composable to fetch and manage event data
const { searchTerm, filteredEvents, hasFilteredEvents, pending, error } = useEventController();
const searchInput = ref(searchTerm.value);

// Watcher to update searchTerm based on user input
watch(searchInput, (newVal: string) => {
  searchTerm.value = newVal;
});
</script>

<template>
    <div class="kalandarium-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1>Kalandarium</h1>
          <p>Kommande händelser</p>
        </div>
      </section>
  
      <!-- Events Section -->
      <section class="events-section">
        <div class="container">
          <h2 class="section-title">Upcoming Events</h2>
          <input v-model="searchInput" class="search-input" placeholder="Sök efter evenemang..." />
  
          <!-- Conditional rendering for loading, error, and events -->
          <div v-if="pending" class="loading-text">Laddar evenemang...</div>
          <div v-if="error" class="error-text">Kunde inte ladda evenemang: {{ error }}</div>
          <div v-if="!hasFilteredEvents && !pending" class="no-events-text">
            Inga evenemang hittades.
          </div>
  
          <div class="events-list" v-if="hasFilteredEvents">
            <!-- Only render EventItem if there are events -->
            <EventItem v-for="event in filteredEvents" :key="event.id" :event="event" />
          </div>
        </div>
      </section>
    </div>
  </template>

<style src="../assets/css/kalandarium.css" scoped></style>
<style src="../assets/css/global.css" scoped></style>
