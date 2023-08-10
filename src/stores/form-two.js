import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFormTwoStore = defineStore('form-two', () => {
    const form = ref({
        name: '',
        secondName: '',
        age: ''
    })

    return { form }
})
