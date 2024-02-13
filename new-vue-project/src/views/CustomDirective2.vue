<template>
    <div style="height:1000px;">
        <p v-pin="position">페이지 고정영역(position:fixed;top:50%,left:50%;)</p>
    </div>
</template>

<script>
export default {
  directives: {
    pin: {
      mounted ( el, binding ) {
        el.style.position = 'fixed';
        el.style.top = binding.value.top + '%';
        el.style.left = binding.value.left + '%';
      }
    }
  },
  data () {
    return {
      position: { top:50, left:50 }
    }
  }
}
</script>
