<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
  import Header from './layouts/header.vue'
  import Footer from './layouts/footer.vue'
  export default {
    components: {Header, Footer},
    computed: {
      user() {
        return this.$store.state.user
      }
    }
  }
</script>
