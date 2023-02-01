import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHeroeList = defineStore('heroeList', () => {
  const heroeList = ref([])
  const addHeroeList = (newHeroe) => heroeList.value.push(newHeroe)
  const showHeroeList = computed(()=>heroeList.value)

  return { heroeList, addHeroeList, showHeroeList }
})
