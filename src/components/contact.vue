<script setup lang="js">


</script>


<template>
  <section>
    <h1>Contact Us</h1>
    <p>Email: contact@company.com</p>
    <p>Phone: +123 456 7890</p>
    <p>Address: 123 Company Street, City, Country</p>
  </section>
</template>

<script lang="js">

export default defineComponent( {
  setup () {

  },
  data () {
    return {
      title: 'ContactUsPage',
      guideLines: 'Some guide lines here',
      props: 'props here'
    }
  }
} )

</script>

<style scoped>
section {
  padding: 20px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

p {
  margin: 10px 0;
}
</style>