<script setup>
import { useTodoList } from '@/stores/todo.js'

const todoList = useTodoList()

const deleteTodo = (todo) => todoList.deleteTodo(todo)

</script>


<template>
    <div>
        <h1>Todo List:</h1>
        <ul v-for="(todo, index) in todoList.showTodoList" :key="index">
        <li>{{ todo.name }} {{ todo.des }} {{ todo.date }}<button @click="deleteTodo(todo)">delete</button> </li>
    </ul>

    </div>
</template>


<style scoped>

</style>