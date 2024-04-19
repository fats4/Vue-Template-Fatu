import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {

  const items = ref([
    { name: 'Beras', quantity: 10 },
    { name: 'Gula', quantity: 4 },
    { name: 'Teh', quantity: 2 }
  ]);

  const increment = (index) => {
    items.value[index].quantity++;
  }

  const decrement = (index) => {
    if (items.value[index].quantity > 0) {
      items.value[index].quantity--;
    }
  }

  return { items, increment, decrement }
})