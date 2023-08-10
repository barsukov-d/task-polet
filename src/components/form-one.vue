<script setup>
import { useFormOneStore } from '../stores/form-one'
const { form } = useFormOneStore()
</script>

<template>
    <form>
        <h2>Form One</h2>
        <input v-model="form.name" type="text" placeholder="name" />
        <input v-model="form.secondName" type="text" placeholder="second name" />
        <input v-model="form.age" type="text" placeholder="age" />
    </form>
</template>

<style lang="scss" scoped></style>
