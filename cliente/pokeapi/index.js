import { fetchPokemon, fetchPokemonA, axiosPokemon, fetchPokemonInfo, axiosPokemonInfo, fetchPokemonInfoA } from './pokemon.mjs';
/*
//lista con fetch
fetchPokemon();

//lista con async await
console.log("Con async-await");
const pokemonFetch = await fetchPokemonA();
console.log(pokemonFetch);

//lista con axios
console.log(await axiosPokemon(10));

//pokemon con fetch
fetchPokemonInfo('charmander');

//pokemon con async
const pokemonFetch = await fetchPokemonInfoA('ditto');
console.log(pokemonFetch);
//pokemon con axios
const ditto = await axiosPokemonInfo('ditto');
*/


//lista con axios
let lista = await axiosPokemon(10);
const ditto = await axiosPokemonInfo('ditto');


console.log(ditto.name);

