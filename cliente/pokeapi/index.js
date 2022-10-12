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
*/



//pokemon con axios
const ditto = await axiosPokemonInfo('ditto');

try {
    dittoObj = ditto;
} catch (e) {
    return undefined; // Or whatever action you want here
}


console.log(dittoObj);

