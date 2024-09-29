<template>
  <div>
    <button @click="showModal">Open Modal</button>

    <Modal :title="modalTitle" :isVisible="isModalVisible" @close="isModalVisible = false">
      <p>This is the content of the modal.</p>
    </Modal>
  </div>
</template>


<script>
import Modal from '../services/Modal/Modal.vue';

export default {
  components: {
    Modal
  },
  data () {
    return {
      isModalVisible: false,
      modalTitle: 'Interview'
    }
  },
  methods: {
    showModal () {
      this.isModalVisible = true; // Show the modal
    }
  }
}
</script>
