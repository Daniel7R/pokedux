import PokemonCard from "./Card";
import "../styles/components/CardList.css";

const CardList = ({ pokemons }) => {
  return (
    <div className="card-list">
      {pokemons.length === 0 ? (
        <p>No se encontraron resultados</p>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default CardList;
