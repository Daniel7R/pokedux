import axios from "axios";

const getPokemons = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
    .then(res => res.data.results)
    .catch(err => console.error(err));

};

export { getPokemons };
