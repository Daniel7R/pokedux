import PokemonCard from "./Card";
import "../styles/components/CardList.css"

const CardList = ({ pokemons }) => {
    console.log(pokemons)
    return (
        <div className="card-list">
            {
                pokemons.map(pokemon => {
                    return <PokemonCard name={pokemon.name} key={pokemon.name} />
                })
            }
        </div>
    );
}


export default CardList;