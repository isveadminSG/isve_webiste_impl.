<template>
    <section v-if="showInterview" class="team-overlay" @click.self="closeModal">
      <div class="modal-container">
        <h2>Meet Our Team</h2>
        <h3>{{ member.name }}</h3>
        <p class="role">{{ member.position }}</p>
        <p class="role">{{ member.sekondTitle }}</p>
        <div class="interview">
          <h4>Interview</h4>
          <div class="qa" v-for="(qa, qIndex) in displayedQAs" :key="qIndex">
            <p><strong>Q: {{ qa.question }}</strong></p>
            <p>A: {{ qa.answer }}</p>
          </div>
          <button @click="toggleShowMore">
            {{ showMore ? 'Show Less' : 'Show More' }}
          </button>
          <button class="close-btn" @click="closeInterview">Close</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Default Title'
      },
      isVisible: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close() {
        this.$emit('close'); // Emit event to parent to notify about closing
      }
    }
  }
  </script>
  
  <style scoped>
.team-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7); /* dark overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  text-align: left;
  position: relative;
}

.close-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
}

.close-btn:hover {
  background-color: #c82333;
}

.interview h4 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.qa {
  text-align: left;
  margin-bottom: 1rem;
}

.qa p {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
}

.qa strong {
  display: block;
  color: #333;
}

button {
  background-color: transparent;
  color: rgb(99, 97, 97);
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e2e0e0;
  color: rgb(173, 171, 171);
}
</style>
