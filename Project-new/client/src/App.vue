<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import Header from './layouts/HeaderA.vue'
import Footer from './layouts/FooterB.vue'

export default {
  components: { Header, Footer },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}

</script>
<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->
