<template>
    <div>
        <h1>message : {{ msg }}</h1>
        <input v-model="msg">
    </div>
</template>

<script setup>
import { reactive } from 'vue'
const msg = reactive('A')
</script>
