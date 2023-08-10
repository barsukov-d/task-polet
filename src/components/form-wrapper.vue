<script setup>
import FormOne from './form-one.vue'
import FormTwo from './form-two.vue'

import { ref } from 'vue'

const condition = ref(true)
</script>

<template>
    <div class="buttons-form">
        <button @click="condition = true">Form One</button>
        <button @click="condition = false">Form Two</button>
    </div>

    <FormOne v-if="condition" />
    <FormTwo v-else />
</template>

<style scoped>
.buttons-form {
    display: flex;
}
</style>
