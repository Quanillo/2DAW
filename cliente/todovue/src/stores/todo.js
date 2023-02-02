import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoList = defineStore('todoList', () => {
  const todoList = ref([])
  const addTodo = (newTodo) => todoList.value.push(newTodo)
  const showTodoList = computed(()=>todoList.value)
  const deleteTodo = (todo) => todoList.value = todoList.value.filter(x=> x.id != todo.id)

  return { todoList, addTodo, showTodoList, deleteTodo }
})
