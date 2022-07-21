import PokemonCard from "./Card";
import "../styles/components/CardList.css"

const CardList = ({ pokemons }) => {
    return (
        <div className="card-list">
            {
                pokemons.map(pokemon => {
                    return <PokemonCard name={pokemon.name} abilities={pokemon.abilities} image={pokemon.sprites.front_default} key={pokemon.name} />
                })
            }
        </div>
    );
}


export default CardList;