<script setup>
import { useListaCursos } from '@/stores/cursos.js'

const listaCursos = useListaCursos()

const deleteCurso = (curso) => listaCursos.deleteCurso(curso)
const addAlumno = (curso) => listaCursos.addAlumnos(curso)
const deleteAlumnos = (curso) => listaCursos.deleteAlumnos(curso)

</script>


<template>
    <div>
        <h1>Lista de cursos:</h1>
        <ul v-for="(curso, index) in listaCursos.showListaCursos" :key="index">
        <li>{{ curso.nombre }} {{ curso.alumnos }}<button @click="deleteCurso(curso)">delete</button> <button @click="addAlumno(curso)">añade alumno</button> <button @click="deleteAlumnos(curso)">elimina alumno</button></li>
    </ul>

    </div>
</template>


<style scoped>

</style>