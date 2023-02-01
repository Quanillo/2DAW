import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useListaCursos = defineStore('listaCursos', () => {
  const listaCursos = ref([])
  const addCurso = (newCurso) => listaCursos.value.push(newCurso)
  const showListaCursos = computed(()=>listaCursos.value)
  const deleteCurso = (curso) => listaCursos.value = listaCursos.value.filter(x=> x.id != curso.id)
  const addAlumnos = (curso) => listaCursos.value.map(x=> x.id===curso.id? x.alumnos ++: x)
  const deleteAlumnos = (curso) => listaCursos.value.map(x=> x.id===curso.id? x.alumnos --: x)
  return { listaCursos, addCurso, showListaCursos, deleteCurso, addAlumnos, deleteAlumnos }
})

/*
curso : id, nombre, fecha de inicio, fecha finalizacion, numero de matriculados en el curso.

que se muestre un listado de cursos

que haya otra pagina que se pueda añadir alumnos a los cursos, o dar debaja alumnos.

que se puedan añadir y borrar cursos
**/