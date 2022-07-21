import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { useDispatch } from "react-redux";

import { setFavorite } from "../actions";
import StarButton from "./StarButton";

const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typeString = types.map(element => element.type.name).join(", ")
  
  const handleFavorite = () => {
    dispatch(setFavorite({pokemonId: id}));
  }
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={ handleFavorite}/>}
    >
      <h2>Abilities</h2>
      <Meta
        description={typeString}
      />
    </Card>
  );
};

export default PokemonCard;
