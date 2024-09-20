import { defineStore } from 'pinia';

export const useTempStore = defineStore('tempstore', {
    state: () => ({
        children: [],
        personalDate: {id: Date.now(), name:'', age:''},
    }),
})