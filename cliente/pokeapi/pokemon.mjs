import axios from 'axios';

//lista de pokemon con fetch
const fetchPokemon = ()=> {
   fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
     .then((response) => response.json())
     .then((allpokemon) => console.log(allpokemon.results))
 }

// lista de pokemon con async
 const fetchPokemonA = async () => {
   try {
     const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
     const allpokemon = await response.json();
     return allpokemon.results;
   } catch (error) {
     console.log(error);
   }
}

// Lista de pokemoin con axios
const axiosPokemon = async (limit) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}/`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

// pokemon con fetch
const fetchPokemonInfo = (name)=> {
  fetch('https://pokeapi.co/api/v2/pokemon/' + name)
    .then((response) => response.json())
    .then((pokemon) => console.log(pokemon))
}

//pokemon con axios
const axiosPokemonInfo = async (name) => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + name);
    return response;
  } catch (error) {
    console.log(error)
  }
}

// pokemon con await
const fetchPokemonInfoA = async (name) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokeInfo = await response.json();
    return pokeInfo;
  } catch (error) {
    console.log(error);
  }
}



export { fetchPokemon, fetchPokemonA, axiosPokemon, axiosPokemonInfo, fetchPokemonInfoA, fetchPokemonInfo}
