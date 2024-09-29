<template>
    <div class="image-container" v-if="file">
      <h4>{{ folderName }}</h4>
      <h5>{{ folderDescription }}</h5>
  
      <img
        :src="getImageUrl(file.id)"
        :alt="file.name"
        class="single-image"
        @click="openImage(file)"
        @error="handleImageError"
      />
  
      <!-- Modal for Large Image View -->
      <div v-if="showModal" class="modal-overlay" @click="closeImage">
        <div class="modal-content">
          <button class="close-button" @click="closeImage">X</button>
          <img :src="getImageUrl(selectedFile.id)" :alt="selectedFile.name" class="large-image" />
        </div>
      </div>
    </div>
    <div v-else class="loading-container">
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  import { getImageUrl, getFolderName, getFolderItems } from "@/services/imageService";
  
  export default {
    props: {
      folderId: {
        type: String,
        required: true,
      },
      folderDescription: {
        type: String,
        required: false,
      },
    },
    data() {
      return {
        file: null, // To store a single image file
        folderName: "",
        showModal: false,
        selectedFile: null, // To store the clicked image for the modal
        loading: true, // Loading state
        error: null, // Error state
      };
    },
    methods: {
      async getFolderName() {
        try {
          this.folderName = await getFolderName(this.folderId);
        } catch (error) {
          console.error("Failed to load folder name:", error);
          this.error = "Failed to load folder name.";
        }
      },
      async getFolderItem() {
        try {
          const files = await getFolderItems(this.folderId);
          if (files.length > 0) {
            this.file = files[0]; // Set the first file as the single image to display
          } else {
            this.error = "No images found in this folder.";
          }
        } catch (error) {
          console.error("Error fetching files:", error);
          this.error = "Failed to load folder items.";
        } finally {
          this.loading = false; // End loading state
        }
      },
      getImageUrl(fileId) {
        return getImageUrl(fileId);
      },
      openImage(file) {
        this.selectedFile = file; // Set the selected file to the clicked image
        this.showModal = true; // Show the modal
      },
      closeImage() {
        this.showModal = false; // Close the modal
        this.selectedFile = null; // Clear the selected file
      },
      handleImageError(event) {
        console.error("Error loading image:", event.target.src);
        event.target.src = "path/to/placeholder/image.png"; // Optional: set a placeholder image
      },
    },
    async mounted() {
      await this.getFolderName();
      await this.getFolderItem();
    },
  };
  </script>
  
  <style scoped>
  .image-container {
    text-align: center;
    padding: 20px;
  }
  
  .single-image {
    width: 80%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.5s ease-in-out;
    cursor: pointer;
  }
  
  .single-image:hover {
    transform: scale(1.05); /* Image zoom on hover */
  }
  
  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .modal-content {
    position: relative;
  }
  
  .large-image {
    max-width: 70%;
    max-height: 70%;
    border-radius: 10px;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #fff;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  </style>
  