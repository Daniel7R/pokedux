import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = ({ name, image, abilities }) => {
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <h2>Abilities</h2>
      <Meta
        description={abilities.map((ability) => (
          <p>{ability.ability.name}</p>
        ))}
      />
    </Card>
  );
};

export default PokemonCard;
