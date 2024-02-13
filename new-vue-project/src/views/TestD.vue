<template>
    <div>
    <h1>msg={{ msg }}</h1>
    <input v-model="msg">
    </div>
</template>
<script setup>
import { ref } from 'vue'
const msg = ref('')
</script>
