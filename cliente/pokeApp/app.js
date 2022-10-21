import { axiosPokemonInfo } from './pokemon.mjs';

const app = Vue.createApp({
    data() {
        return {
            pokemon: '',
            newPokemon: '',
        }
    },
    methods:{
        async findPokemon(){
            const ditto = await axiosPokemonInfo(this.newPokemon);
            console.log(ditto)
            this.pokemon = ditto; 
        }
    },
});
app.mount('#miApp');

