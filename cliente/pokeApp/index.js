import { fetchPokemon, fetchPokemonA, axiosPokemon, fetchPokemonInfo, axiosPokemonInfo, fetchPokemonInfoA } from './pokemon.mjs';

//lista con axios
console.log(await axiosPokemon(10));

//pokemon con axios
const ditto = await axiosPokemonInfo('ditto');

console.log(dittoObj);

