import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserList = defineStore('userList', () => {
  const userList = ref([])
  const addUser = (newUser) => userList.value.push(newUser)
  const showUserList = computed(()=>userList.value)
  const deleteUser = (user) => userList.value = userList.value.filter(x=> x.id != user.id)

  return { userList, addUser, showUserList, deleteUser }
})
