<template>
  <h1>Rick and Morty</h1>
  <h3>Introduce capitulo</h3>
  <input type="number" v-model.trim="epInput" @keydown.enter="findEpisode" />
  <button @click="findEpisode">Busca</button>
  <div v-if="cargaEpisode"> 
    <Episode :episode="this.episode "/>
  </div>
  
</template>

<script>
  import axios from 'axios';
  import Episode from '@/components/Episode.vue'

  export default {
    name: 'App',
    components: {
      Episode
    },
    data() {
        return {
          epInput: null,
          episode: {},
          cargaEpisode: false,
        }
    },
    methods: {
      async findEpisode(){
        const numEpisodes = await axios.get('https://rickandmortyapi.com/api/episode'); //Con esta llamada conseguimos el número máximo de episodios, así si añaden episodios el método sigue funcionando
        if(this.epInput < 1 || this.epInput > numEpisodes.data.info.count){
          this.episode = null;
          console.log(this.episode);
        }
        else{
          console.log('adioss')
          const response = await axios.get(`https://rickandmortyapi.com/api/episode/${this.epInput}`);
          this.episode = response.data;
        }
        this.cargaEpisode = true;
      }
    },
    computed: {

    },
}
</script>

<style scoped>

</style>
