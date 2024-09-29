<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero hero-about">
      <div class="container about-container">
        <h1>Om Oss</h1>
        <p>
          Vi är tre bröder med säte i Munkedals Kommun som driver denna förening med
          huvudsakligt syfte att motverka ofrivillig ensamhet vid högtider.
        </p>
      </div>
    </section>

    <!-- Team Section -->
    <section id="team-section" class="team-section">
      <h2>Vårt Team</h2>
      <div id="team-container" class="team-container">
        <div id="team-member" class="team-member" v-for="member in memberList" :key="member.id"
          @click="updateCurrentMember(member)">
          <img :src="getImage(member.profilePic)" alt="Team Member" />
          <h3>
            <strong>{{ member.name || "N/A" }}</strong>
          </h3>
          <h5>
            <strong>{{ member.secondaryTitle }}</strong>
          </h5>
          <h6>
            {{ member.position }}
          </h6>
          <h6>
            E-post: <strong>{{ member.email }}</strong>
          </h6>
          <h6>
            Telefon: <strong>{{ member.phone }}</strong>
          </h6>
          <button @click="openInterview">{{ member.interview }}</button>
        </div>
      </div>
    </section>

    <!-- Interview Modal, shown if showInterview -->
    <section v-if="showInterview" class="team-overlay" @click.self="closeInterview">
      <div class="modal-container">
        <!-- Close Button -->
        <div class="close-button" @click="closeInterview"></div>

        <div class="modal-member-info">
          <img :src="getImage(currentMember.profilePic)" alt="Team Member" />
          <h2>Q & A med:</h2>
          <h3>{{ currentMember.name }}</h3>
          <h5 class="role">{{ currentMember.position }}</h5>
          <h6 class="role">{{ currentMember.secondaryTitle }}</h6>
        </div>

        <div class="interview">
          <h4>Interview</h4>
          <div class="qa" v-for="(qa, qIndex) in currentMember.qas" :key="qIndex">
            <p>
              <strong>Q: {{ qa.question }}</strong>
            </p>
            <p>A: {{ qa.answer }}</p>
          </div>
        </div>
      </div>
    </section>
    <div class="section-devider"></div>
    <!-- Company History Section -->
    <section class="company-history">
      <div class="container wrapper">
        <h2>Vår Historia</h2>
        <p>
          <span>Ingen ska vara ensam</span> grundades med en vision att förändra sättet
          människor arbetar och samarbetar på. Med årtionden av erfarenhet inom branschen
          har vi vuxit till att bli en ledande aktör, men vårt engagemang för gemenskapen
          och våra värderingar har alltid varit konstant.
        </p>
      </div>
    </section>
    <div class="section-devider"></div>
    <section class="image-carousel-section">
      <div>
        <h2>Bilder:</h2>
        <ImageCarousel :folderId="'17yBwdRfyeXhTlWYnBgavqS7gtUXQLmoi'"
          :folderDescription="'Ett collage av bilder från årets midsommarfirande :)'" />
      </div>
    </section>
    <div class="section-devider"></div>
    <!--Our guidelines section -->
    <section class="company-guidelines">
      <div class="container">
        <h2>Våra Värdeord</h2>
        <ul>
          <li v-for="gl in valuesList" :key="gl.id">
            <h3>
              <strong>{{ gl.title }}</strong>: {{ gl.info }}
            </h3>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import useTeamController from "@/services/Team/teamController";
import useGuideLineController from '../services/Stadgar/guidelineController'
import { ref } from "vue";
import Sebastian from "@/assets/images/covers/seb_isve.jpg";
import Thomas from "@/assets/images/covers/thomas.jpg";
import Daniel from "@/assets/images/covers/daniel.jpg";
import ImageCarousel from "../models/ImageCarousel.vue";

export default {
  components: {
    ImageCarousel,
  },
  setup () {
    const { memberList, currentMember, updateCurrentMember } = useTeamController();
    const { valuesList } = useGuideLineController();

    // Additional reactive state for managing modal visibility and show more functionality
    const showInterview = ref( false );
    const showMore = ref( false );

    const toggleShowMore = () => {
      showMore.value = !showMore.value;
    };

    const closeInterview = () => {
      showInterview.value = false;
    };

    const openInterview = () => {
      showInterview.value = true;
    };

    const getImage = ( id ) => {
      const imgArr = [
        { id: 2, img: Sebastian },
        { id: 1, img: Thomas },
        { id: 3, img: Daniel },
      ];

      const foundImg = imgArr.find( ( img ) => img.id === id );
      return foundImg ? foundImg.img : null;
    };
    return {
      valuesList,
      getImage,
      memberList,
      currentMember,
      updateCurrentMember,
      showInterview,
      showMore,
      toggleShowMore,
      closeInterview,
      openInterview,
    };
  },
};
</script>

<style src="@/assets/css/about.css" scoped></style>
<style src="@/assets/css/stadgar.css" scoped></style>
<style src="@/assets/css/global.css" scoped></style>