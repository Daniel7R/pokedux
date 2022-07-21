import axios from "axios";

const getPokemons = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    .then(res => res.data.results)
    .catch(err => console.error(err));

};

const getPokemonDetails = pokemon => {
  return axios.get(pokemon.url)
    .then(res => res.data)
    .catch(err => console.error(err));

}

export { getPokemons, getPokemonDetails };
