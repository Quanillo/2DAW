<script setup>
import { useMainUser } from '@/stores/user.js'
import { useTodoList } from '@/stores/todo.js'
import { getTodoDB } from '@/firebase/firebase.js'
import { onMounted } from 'vue';
import { ref } from 'vue'

const todoListP = useTodoList()
const mainUser = useMainUser()

</script>

<template>
    <div>
        <h1>Lista de tareas de {{ mainUser.mainUser.name }}</h1>
       
        <div v-for="(todo, index) in todoListP.todoList" :key="index">
            <h3>{{ todo.name }}</h3>
            <p>{{ todo.des }}</p>
            <p>{{ todo.date }}</p>
        </div>

    </div>
</template>


<style scoped>

</style>