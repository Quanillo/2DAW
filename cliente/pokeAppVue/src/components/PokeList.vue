<template>
<h1>Find pokemon</h1>
        <input type="text" v-model.trim="newPokemon" @keyup.enter="showPokemon"/>
        <button @click="showPokemon">🔍︎</button>

        <div v-if="exist">
            <h2>{{ pokemon.name }}</h2>
            <img v-bind:src="urlImage">
            <ul>
                <h3>Moves: </h3>
                <li v-for="(item, index) in moves" :key="index">
                    {{ item.move.name }}
                </li>
            </ul>
            <button @click="listLess"  v-if="listAll">Show less</button>
            <button @click="listMore"  v-else>Show more</button>
        </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'PokeBrowser',
  data() {
        return {
            newPokemon: '',
            pokemon: [],
            moves: [],
            urlImage: '',
            exist: false,
            listAll: false,
        }
    },
    methods:{
        async showPokemon(){
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + this.newPokemon);
                this.exist = true;
                this.pokemon = response.data;
                this.urlImage = response.data.sprites.front_default;
                this.listLess();
                console.log(this.pokemon.types);
              } catch (error) {
                console.log(error)
              }
        },
        async listMore(){
            this.listAll = true;
            try{
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + this.newPokemon);
                this.moves = response.data.moves;
            }catch (error) {
                console.log(error)
            }
        },
        async listLess(){
            this.listAll = false;
            try{
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + this.newPokemon);
                this.moves = response.data.moves.slice(0, 5);
            }catch (error) {
                console.log(error)
            }
        },
    },
}
    
</script>
