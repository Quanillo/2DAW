<script setup>
import { useTodoList } from '@/stores/todo.js'
import { ref } from 'vue'

const todoList = useTodoList()

const id = ref('')
const name = ref('')
const des = ref('')
const date = ref('')

const addTodo = () => {
    todoList.addTodo({id: id.value, name: name.value, des: des.value, date: date.value})
}
</script>


<template>
    <div>
        <h1>Crear Todo!</h1>
            <p>id</p>
            <input v-model.trim="id"  type="text">
            <p>nombre de la tarea</p>
            <input v-model.trim="name"  type="text">
            <p>descripción</p>
            <input v-model.trim="des"  type="text">
            <p>fecha</p>
            <input v-model.trim="date"  type="text">
            <button @click="addTodo">enviar</button>

    </div>
</template>


<style scoped>

</style>