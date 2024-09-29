
<template>
    <section class="container">
        <div class="">
        <h4>{{ folderName }}</h4>
        <h5>{{ folderDescription }}</h5>
        </div>

        <!-- Image Carousel -->
        <Carousel :itemsToShow="1" :wrapAround="true" :autoplay="2000" class="carousel-container">
        <Slide v-for="(file, index) in files" :key="index">
            <div class="slide-content">
            <img
                :src="getImageUrl(file.id)"
                :alt="file.name"
                class="carousel-image"
                @click="openImage(file)"
            />
            </div>
        </Slide>
        <template #addons>
            <Navigation class="carousel-navigation" />
            <Pagination class="carousel-dots" />
        </template>
        </Carousel>

        <!-- Modal for Large Image View -->
        <div v-if="showModal" class="modal-overlay" @click="closeImage">
        <div class="modal-content">
            <button class="close-button" @click="closeImage">X</button>
            <img :src="getImageUrl(selectedFile.id)" :alt="selectedFile.name" class="large-image" />
        </div>
        </div>
    </section>
</template>
      
<script>
      import { getImageUrl, getFolderName, getFolderItems } from "@/services/imageService";
      import 'vue3-carousel/dist/carousel.css';
      import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
      
      export default {
        components: {
          Carousel,
          Slide,
          Pagination,
          Navigation,
        },
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
            files: [],
            folderName: "",
            showModal: false,
            selectedFile: null, // To store the clicked image
            loading: true, // Loading state
            error: null, // Error state
            getImageUrl,
          };
        },
        methods: {
          handleImageError(event) {
            console.error("Error loading image:", event.target.src);
            event.target.src = "/home/seb_gransonn/Documents/GitHub/ISVE/src/assets/images/placeholders/placeholder.png"; // Optional: set a placeholder
          },
          async getFolderName() {
            try {
              this.folderName = await getFolderName(this.folderId);
            } catch (error) {
              this.error = "Failed to load folder name.";
            }
          },
          async getFolderItems() {
            try {
              this.files = await getFolderItems(this.folderId);
            } catch (error) {
              console.error("Error fetching files: ", error);
              this.error = "Failed to load folder items.";
            } finally {
              this.loading = false; // End loading state
            }
          },
          openImage(file) {
            this.selectedFile = file; // Set the selected file to the clicked image
            this.showModal = true; // Show the modal
          },
          closeImage() {
            this.showModal = false; // Close the modal
            this.selectedFile = null; // Clear the selected file
          },
        },
        async mounted() {
          await this.getFolderName();
          await this.getFolderItems();
        },
      };
</script>
      
      

<style scoped>
.carousel-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px 0;
    position: relative; /* Allows absolute positioning of buttons */
  }
  
  .carousel-image {
    width: 100%;
    height: 800px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-image:hover {
    transform: scale(1.05); /* Image zoom on hover */
  }
  
  .carousel-navigation {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 1000;
  }
  
  .carousel-navigation.prev {
    left: 10px;
  }
  
  .carousel-navigation.next {
    right: 10px;
  }
  
  .carousel-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  .carousel-dots button {
    width: 12px;
    height: 12px;
    margin: 0 5px;
    background: #ddd;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .carousel-dots button.active {
    background: #333;
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
