import axios from 'axios';

// Lista de pokemoin con axios
const axiosPokemon = async (limit) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}/`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }


//pokemon con axios
const axiosPokemonInfo = async (name) => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + name);
      return response.data;
    } catch (error) {
      console.log(error)
    }
  }

//lista con axios
//console.log(await axiosPokemon(10));

//pokemon con axios
const ditto = await axiosPokemonInfo('ditto');
console.log(ditto);

