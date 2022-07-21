import PokemonCard from "./Card";
import "../styles/components/CardList.css";

const CardList = ({ pokemons }) => {
  return (
    <div className="card-list">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            image={pokemon.sprites.front_default}
            key={pokemon.id}
            favorite={pokemon.favorite}
          />
        );
      })}
    </div>
  );
};

export default CardList;
