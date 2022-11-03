<template>
   <div id="entradaAniade" class="w-full sm:max-w-md p-5 mx-auto">
    <div class="mb-4">
      <label class="block mb-1" for="cajaEntrada">Añade</label>
      <input
        ref="inputAniade"
        v-model="entradaAniade"
        id="personaje"
        type="text"
        name="CajaEntrada"
        class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
        @keydown.enter="enviaEntradaAniade"
      />
    </div>    
  </div> 
  <div id="entradaFiltra" class="w-full sm:max-w-md p-5 mx-auto">
    <div class="mb-4">
      <label class="block mb-1" for="cajaEntrada">Filtra</label>
      <input
        ref="inputFiltra"
        v-model="entradaFiltra"
        id="personaje"
        type="text"
        name="CajaEntrada"
        class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
        @keydown.enter="enviaEntradaFiltra"
      />
    </div>    
  </div> 

  <div id="entradaCheck" class="w-full sm:max-w-md p-5 mx-auto">
    <div class="mb-4">
      <label class="block mb-1" for="cajaEntrada">{{ marcado }}</label>
      <input
        id="cajaEntrada"
        v-model="checked"
        type="checkbox"
        class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
      />
    </div>
  </div>

  <div id="lista" class="mt-32">
    <div class="px-4 sm:px-8 max-w-5xl m-auto">
      <h1 class="text-center font-semibold text-sm">{{ cabecera }}</h1>
      <p class="mt-2 text-center text-xs mb-4 text-gray-500">
        {{ subcabecera }}
      </p>
      <ul class="border border-gray-200 rounded overflow-hidden shadow-md">
        <li
          v-for="(el, idx) in elementos"
          :key="idx"
          class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
        >

        <div>
          <p>{{ el }} 
              <button @click="eliminar" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
                Eliminar
              </button>
          </p>   
        </div>
        
        </li>
      </ul>
    </div>
  </div>
</template>
  
  <script>
 export default {
  name: "Component",
  emits: ["enviaEntradaAniade", "enviaEntradaFiltra", "enviaRespuesta", "eliminar"],
  props: {
    blanquear:{
      type: Boolean,
      default: true,
    },
    entrada:{
      type: String,
    },
    elementos: {
      type: Array,
    },
    cabecera: {
      type: String,
    },
    subcabecera: {
      type: String,
    },
  },
  data() {
    return {
      entradaAniade: "",
      entradaFiltra: "",
      checked: "",
      marca: "",
    };
  },
  methods:{
    enviaEntradaAniade(){   
      this.$emit("recibido", this.entradaAniade);  
      if (this.blanquear)  this.entradaAniade = "";   
      this.$refs.inputAniade.focus();
    },
    enviaEntradaFiltra(){   
      this.$emit("filtra", this.entradaFiltra);  
      if (this.blanquear)  this.entradaFiltra = "";   
      this.$refs.inputFiltra.focus();
    },
    eliminaElemento(data){
      this.$emit("eliminar", data);
    },
    eliminar() { //Aquí, en breve, utilizaremos una modal para trabajar los slots....
      if (confirm(`¿Estás seguro de eliminar a ${ this.el }?`)) this.$emit("eliminar", this.el);
    },
  },
  computed: {
    marcado() {
      this.$emit("enviaRespuesta", this.checked);
      return this.checked ? `Filtrado por ${ this.entrada}` : "No Filtrado";
    },
  },
  
};
  </script>
  <style scoped></style>
  