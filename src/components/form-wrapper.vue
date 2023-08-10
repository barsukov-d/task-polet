<script setup>
import FormOne from './form-one.vue'
import FormTwo from './form-two.vue'

import { ref } from 'vue'

const condition = ref(true)
const formOneData = ref({
    name: '',
    secondName: '',
    age: ''
})

const formTwoData = ref({
    name: '',
    secondName: '',
    age: ''
})
</script>

<template>
    <div class="buttons-form">
        <button @click="condition = true">Form One</button>
        <button @click="condition = false">Form Two</button>
    </div>

    <FormOne v-model="formOneData" v-if="condition" />
    <FormTwo v-model="formTwoData" v-else />
</template>

<style scoped>
.buttons-form {
    display: flex;
}
</style>
