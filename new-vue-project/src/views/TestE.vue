<template>
    <h1> List: {{ list.join(',') }}</h1>
    <button @click="onClick">add</button>
</template>
<script setup>
import { ref } from 'vue'
const list = ref([])
const onClick = () => {
  list.value = [...list.value, 'a']
}
</script>
