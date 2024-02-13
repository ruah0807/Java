<script>
export default {
  mixins: [mixin],
  mounted() {
    console.log("컴포넌트 component");
  },
  unmounted() {
    console.log("컴포넌트 unmounted");
  },
};
</script>
