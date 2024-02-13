<template>
    <p>Count : {{ count }}</p>
    <button type="button" @click="increment">increment</button>
    <p> {{ cartCount }}</p>
</template>
<script>
export default {
  computed: {
    count () {
      return this.$store.state.count
    },
    cartCount() {
      return this.$store.getters.cartCount
    }
  },
  methods: {
    increment () {
        this.$store.commit('increment')
    }
  }
}
</script>
