import { defineStore } from 'pinia';

export const useChildrenStore = defineStore('children', {
    state: () => ({
        children: [],
        personalDate: {},
    }),
})