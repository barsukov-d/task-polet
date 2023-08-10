<script setup>
import { defineProps, defineEmits, computed } from 'vue'
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})
</script>

<template>
    <form>
        <h2>Form Two</h2>
        <input v-model="value.name" type="text" placeholder="name" />
        <input v-model="value.secondName" type="text" placeholder="second name" />
        <input v-model="value.age" type="text" placeholder="age" />
    </form>
</template>

<style lang="scss" scoped></style>
