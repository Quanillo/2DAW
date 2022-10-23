const app = Vue.createApp({
    data() {
        return {
            numPokemon: 0,
            PokemonList: [],
            newPokemon: '',
            pokemon: [],
            moves: [],
            urlImage: '',
            exist: false,
            listAll: false,
        }
    },
    methods:{
        async ListPokemon(){
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${this.numPokemon}/`)
                this.PokemonList = (response.data.results);
            } catch (error) {
              console.log(error)
            }  
        },
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
        putPokemon(name){
            this.newPokemon = name;
            this.showPokemon();
        }
    },
});
app.mount('#miApp');

