import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFormOneStore = defineStore('form-one', () => {
    const form = ref({
        name: '',
        secondName: '',
        age: ''
    })

    return { form }
})
