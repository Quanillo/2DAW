<script setup>
import { useListaCursos } from '@/stores/cursos.js'
import { ref } from 'vue'

const listaCursos = useListaCursos()

const id = ref('')
const nombre = ref('')
const inicio = ref('')
const final = ref('')

const addCurso = () => {
    listaCursos.addCurso({id: id.value, nombre: nombre.value, inicio: inicio.value, final: final.value, alumnos: 0})
}
</script>


<template>
    <div>
        <h1>Añade Cursos</h1>
            <p>id del curso</p>
            <input v-model.trim="id"  type="text">
            <p>nombre del curso</p>
            <input v-model.trim="nombre"  type="text">
            <p>fecha de inicio</p>
            <input v-model.trim="inicio"  type="text">
            <p>fecha final</p>
            <input v-model.trim="final"  type="text">
            <button @click="addCurso">enviar</button>

    </div>
</template>


<style scoped>

</style>