<script setup>
import { useTodoList } from '@/stores/todo.js'
import { useUserList } from '@/stores/user.js'
import { addTodoDB } from '@/firebase/firebase.js'
import { ref } from 'vue'

const todoList = useTodoList()
const userList = useUserList()

const name = ref('')
const des = ref('')
const date = ref('')

const addTodo = () => {
    addTodoDB(userList.mainUser, {name: name.value, des: des.value, date: date.value})
    name.value = ''
    des.value = ''
    date.value = ''
}
</script>


<template>
    <div>
        <h1>Crear Todo!</h1>
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