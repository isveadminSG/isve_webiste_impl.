<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';

// State management
const route = useRoute();
const isMenuActive = ref(false);
const isScrolled = ref(false);

// Function to toggle the mobile menu
const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value;
};

// Handle scroll event for dynamic header changes
const handleScroll = () => {
  isScrolled.value = window.scrollY > 200;
  
};

// Set up scroll event listeners
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Check if the current route is active
const isActive = (path) => route.path === path;
</script>

<template>
  <header :class="{ scrolled: isScrolled }">
    <nav class="navbar">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/images/logos/logo-transparent(1).png" alt="Company Logo" />
        </router-link>
      </div>
      <div>
        <ul class="nav-links" :class="{ 'nav-active': isMenuActive }">
          <div class="nav-link">
            <li :class="{ active: isActive('/') }">
              <router-link to="/">Startsida</router-link>
            </li>
          </div>
          <div class="nav-link">
            <li :class="{ active: isActive('/kalandarium') }">
              <router-link to="/kalandarium">Kalandarium</router-link>
            </li>
          </div>
          <div class="nav-link">
            <li :class="{ active: isActive('/about') }">
              <router-link to="/about">Information</router-link>
            </li>
          </div>
          <div class="nav-link">
            <li :class="{ active: isActive('/contact') }">
              <router-link to="/contact">Kontakt</router-link>
            </li>
          </div>
        </ul>
      </div>
      
      <div class="hamburger" @click="toggleMenu()">
        <div class="line" v-for="i in 3" :key="i"></div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

/* Navbar styling */
header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0;
  background: linear-gradient(to bottom, rgba(51, 51, 51, 0.8), rgba(51, 51, 51, 0));
  transition: background-color 0.5s ease;
  z-index: 1000;
  display: flex;
  justify-content: center; /* Center the content within the header */
  align-items: center; /* Align items vertically */
}

header.scrolled {
  background: linear-gradient(to bottom, rgba(51, 51, 51, 0.8), rgba(51, 51, 51, 0.3));
  transition: background-color 0.5s ease, padding 0.5s ease;
  height: 58px; /* Height change when scrolled */
}

.navbar {
  display: flex;
  justify-content: space-between; /* Distribute space between logo and menu */
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Limit the maximum width */
}

.logo {
  padding-left: 20px;
}

.logo img {
  width: 100px;
  transition: width 0.5s ease;
}

/* Nav links */
.nav-links {
  list-style: none;
  display: flex;
  margin-left: auto; /* Push menu items to the right */
  padding: 0;
  
}

.nav-link {
  text-align: center;
  margin-left: 2rem; /* Spacing between menu items */
}

.nav-links li a {
  color: rgb(253, 216, 216);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: rgb(51,51,51, 0.8);
}

.nav-active {
  display: flex;
  flex-direction: column;
}

/* Mobile Menu */
.hamburger {
  display: none;
  cursor: pointer;
}

.hamburger .line {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 0px;
  transition: transform 0.3s ease;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 60px;
    background-color: rgba(51, 51, 51, 0.8);
    padding: 1rem;
    width: 100%;
  }

  .hamburger {
    display: block;
  }
}

header.scrolled .nav-link:hover {
  background: linear-gradient(to bottom, rgba(99, 99, 99, 0.8), rgba(51, 51, 51, 0));
  /* Gradient from semi-transparent grey to transparent */

}

header.scrolled .nav-link:active {
  background-color: rgba(108, 107, 107, 0.8);

}


header.scrolled .logo img {
width:50px;
}

header.scrolled .nav-links {
  transition: color 0.5s ease;

  /* Smooth color transition */
}

</style>
