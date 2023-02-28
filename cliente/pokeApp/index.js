import axios from 'axios';
let poke = []
// Lista de pokemoin con axios
const axiosPokemon = async (limit) => {

  await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}/`)
                    .then(response=>{
                      const res = response
                      return res.data.results
                    })
                    .catch((error)=>{
                      console.log(error)
                    })
    /*
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}/`)
      return response.data.results
    } catch (error) {
      console.log(error)

  }*/
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
const ditto = await axiosPokemon(5);
console.log(ditto);

