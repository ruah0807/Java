<template>
    <div>
        <h1>message : {{ msg.value }}</h1>
        <input v-model="msg.value">
    </div>
</template>

<script setup>
import { reactive } from 'vue'
const msg = reactive({ value: '' })
</script>
