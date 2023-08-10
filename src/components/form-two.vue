<script setup>
import { useFormTwoStore } from '../stores/form-two'
const { form } = useFormTwoStore()
</script>

<template>
    <form>
        <h2>Form Two</h2>
        <input v-model="form.name" type="text" placeholder="name" />
        <input v-model="form.secondName" type="text" placeholder="second name" />
        <input v-model="form.age" type="text" placeholder="age" />
    </form>
</template>

<style lang="scss" scoped></style>
