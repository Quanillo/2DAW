<template>
    <div id="PokeBrowser">
        <h1>How many pokemon do you want to list?</h1>
        <input type="number" v-model.trim="numPokemon" @keyup.enter="ListPokemon" @click="ListPokemon"/>

        <ul>
            <li v-for="(pokemon, index) in PokemonList" :key="index">
                {{ pokemon.name }}
                <button @click="putPokemon(pokemon.name)">🔍︎</button>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'PokeBrowser',
  data() {
    return {
        numPokemon: 0,
        PokemonList: [],
    }
  },
  methods:{
        putPokemon(name){
            this.newPokemon = name;
            this.showPokemon();
        },
    },
    computed: {
        async ListPokemon(){
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${this.numPokemon}/`)
                this.PokemonList = (response.data.results);
            } catch (error) {
              console.log(error)
            }  
        },
    }
}
    
</script>
