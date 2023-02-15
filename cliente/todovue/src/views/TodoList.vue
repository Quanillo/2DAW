<script setup>
import { useMainUser } from '@/stores/user.js'
import { useTodoList } from '@/stores/todo.js'
import { getTodoDB } from '@/firebase/firebase.js'
import { onMounted } from 'vue';
import { ref } from 'vue'

const todoListP = useTodoList()
const mainUser = useMainUser()
const todoList = ref([])
const loaded = ref(false)

onMounted(() => {
    todoList.value =  getTodoDB(mainUser.mainUser)
    console.log(todoList.value)
    loaded.value = true;
})

</script>

<template>
    <div>
        <h1>Lista de tareas de {{ mainUser.mainUser.name }}</h1>
        <div v-if="loaded">
            <ul v-for="(todo, index) in todoListP.todoList" :key="index">
            <li>{{ todo.name }}</li>
        </ul>
        </div>

    </div>
</template>


<style scoped>

</style>