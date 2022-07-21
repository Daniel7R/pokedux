import { Col } from "antd";
import { useEffect, useState } from "react";

import Searcher from './components/Searcher';
import logo from "./statics/logo.svg";
import CardList from "./components/CardList";
import { getPokemons } from "./api";
import './styles/App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async() => {

      const responsePokemons = await getPokemons();
      setPokemons(responsePokemons);
    };

    fetchPokemons();
  }, [])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="logo" />
      </Col>
      <Col span={ 8 } offset={8} >
        <Searcher />
      </Col>
      < CardList pokemons={pokemons} />
    </div>
  );
}

export default App;
