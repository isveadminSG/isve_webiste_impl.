<script>
    import Head from './models/Head.vue'
    import Header from './models/Header.vue'
    import Footer from './models/Footer.vue'

export default {
  name: 'BasePage',
  components: {
    Head,
    Header,
    Footer,
  },
};
    
</script>

<template>
    <div>
        <!-- Head Component -->
        <Head />
    
        <!-- Header Section -->
        <section>
          <div>
            <Header />
          </div>
        </section>
    
        <!-- Main Content (Router View) -->
        <section>
          <router-view />
        </section>
    
        <!-- Footer Section -->
        <section>
          <Footer />
        </section>
      </div>
</template>