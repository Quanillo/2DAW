<script setup>
import { ref } from "vue"
import { 
  actualizaDoc,
  borraDoc,
  dameDoc,
  dameDocsFiltro,
  dameDocs,
  onCambioDoc,

 } from "@/API/firebase"

const valor = ref("")

//Vamos a lanzar el método que va a estar a la escucha de nuestro cambio de valores

onCambioDoc(<Pon aquí la colección que quieres escuchar>, <Pon aquí el id que quieres escuchar>,
   (dato) => valor.value = dato.data().<Pon aquí el campo que quieres mostrar de manera reactiva>)

const actualizaTaller = async ( ref, id ) => 
   await actualizaDoc(ref, id, {hora:23,nombre:"pedro", tipo:"Ejecutor"})

const borraTaller = async (ref, id) => 
    await borraDoc(ref, id)

const dameTaller = async(ref, id) => {
  const taller = await dameDoc(ref, id)
  console.log(taller.data())
}
const dameTalleresFiltrados = async(ref, campo, valor) => {
  const talleres = await dameDocsFiltro(ref, campo, valor)
  console.log("el taller", talleres.docs)
  talleres.docs.map(el =>  console.log(el.id, "..", el.data()))
  }


</script>

<template>
  <h2>Hola</h2>
  <h1>{{ valor }}</h1>
  
  <button @click="actualizaTaller('talleres', 'fenomeno2')">Crea</button>
  <button @click="borraTaller('talleres', 'fenomeno')">borra</button>
  <button @click="dameTaller('talleres', 'fenomeno')">Obtén</button>
  <button @click="dameTalleresFiltrados('talleres', 'tipo', 'Ejecutor')">Obtén</button>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
