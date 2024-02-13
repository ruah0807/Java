<template>
    <div>
        <h1>msg = {{ msg }}</h1>
        <input v-model="msg">
    </div>
</template>
<script setup>
import { reactive, toRef } from 'vue'
const words = reactive({ a: 'a', b: 'b' })
const msg = toRef(words, 'b')
</script>
