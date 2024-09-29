<script lang="ts">
import { ref } from 'vue';
import { defineComponent } from 'vue';
import EventItem from '../models/EventItem.vue';
import useGuideLineController from '../services/Stadgar/guidelineController';
import { useEventController } from '../composables/useEventController';
import { Carousel, Slide } from 'vue3-carousel';
import Image from "../models/Image.vue"

export default defineComponent({
  name: 'HomePage',
  components: {
    Carousel,
    Slide,
    EventItem,
    Image,
  },
  setup() {
    const { valuesList } = useGuideLineController();
    const { firstTwoEvents, pending, error } = useEventController();

    return {
      firstTwoEvents,
      error,
      pending,
      valuesList,

    };
  }
});
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-img-wrapper">
        <img src="@/assets/images/covers/hero-img-design.png" alt="Celebration" class="hero-img" />
      </div>
      <div class="hero-text">
        <h1>Välkommen till <br> Ingen ska vara ensam <br> Högtider i gemenskap</h1>
        <p>Delta i våra evenemang och fira tillsammans i enighet.</p>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="introduction">
      <div class="container">
        <h2>Välkommen till Vår Förening</h2>
        <p>
          Vi är engagerade i att främja en samarbetsvillig och stödjande miljö. Vårt uppdrag är att skapa en plats där
          varje individ känner sig uppskattad och stärkt. Genom gemenskapsdrivna evenemang och delade upplevelser
          strävar vi efter att bygga relationer och främja inkludering.
        </p>
      </div>
    </section>

    <section>
      <div class="container">
            <Image folderId="1ajMsVSHAcEXyFbbFwu79edITIvAq8qit" folderDescription="Vi kan med stolthet presentera vår huvudsponsor"/>
      </div>
    </section>

    <!-- Company Info Section (Stadgar) -->
    <section class="stadgar">
      <div class="container">
        <div class="s-header">
          <h2>Våra stadgar:</h2>
        </div>
        <div class="s-body">
          <li>
            <p><strong>1.</strong> Att anordna öppna firanden för ensamma vid stora högtider såsom <strong>Jul</strong> &
              <strong>Midsommar</strong></p>
          </li>
          <li>
            <p><strong>2.</strong> Att hjälpa och stötta andra i Sverige som även vill anordna liknande firanden.</p>
          </li>
          <li>
            <p><strong>3.</strong> Skapa och bedriva nätverkande för människor som vill anordna firanden i syfte att
              motverka & minska ofrivillig ensamhet vid högtider</p>
          </li>
        </div>
        <div class="s-footer">
          <p>Föreningen är religiöst och politiskt obunden och arbetar för demokrati, jämlikhet, mångfald och
            eftersträvar ekonomisk, social, hållbarhet</p>
        </div>
      </div>
    </section>

    <!-- Guide Lines Section -->
    <section class="comapany-guidlines-homepage">
      <div class="container">
        <h2>Våra Värderord</h2>
        <ul>
          <li v-for="gl in valuesList" :key="gl.id">
            <strong>{{ gl.title }}</strong>
          </li>
        </ul>
      </div>
      <div class="link-to-about wrapper">
        <button>
          <router-link to="/about">Mer om oss...</router-link>
        </button>
      </div>
    </section>

    <!-- Events Preview Section -->
    <section class="events-preview">
      <div class="container">
        <h2 class="section-title">Kommande händelser</h2>

        <!-- Use vue3-carousel here -->
        <div v-if="firstTwoEvents.length">
          <Carousel>
            <Slide v-for="event in firstTwoEvents" :key="event.id">
              <EventItem v-for="event in firstTwoEvents" :key="event.id" :event="event" />
            </Slide>
          </Carousel>
        </div>
        
        <div v-else-if="pending">Laddar evenemang...</div>
        <div v-else-if="error">Kunde inte ladda evenemang: {{ error }}</div>
        <div v-else>Inga kommande evenemang att visa.</div>
        
        <router-link to="/kalandarium" class="see-all">Se fler händelser...</router-link>
      </div>
    </section>
  </div>
</template>


<style src="../assets/css/homepage.css" scoped></style>
<style src="../assets/css/stadgar.css" scoped></style>
<style src="../assets/css/global.css" scoped></style>
<style src="../assets/css/kalandarium.css" scoped></style>