<script setup>
import { ref } from 'vue'

import { useUserList } from '@/stores/user.js'
import { getTodoDB } from '@/firebase/firebase.js'

const userList = useUserList()
const todoList = getTodoDB(userList.mainUser)

console.log(todoList)
</script>


<template>
    <div>
        <h1>Lista de tareas de {{ userList.mainUser.name }}</h1>
            <ul v-for="(todo, index) in todoList" :key="index">
        <li><b>{{ todo.name }}</b> {{ todo.des }} <i>{{ todo.date }}</i> </li>
    </ul>

    </div>
</template>


<style scoped>

</style>