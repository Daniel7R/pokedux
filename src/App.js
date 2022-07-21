import { Col, Spin } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Searcher from "./components/Searcher";
import logo from "./statics/logo.svg";
import CardList from "./components/CardList";
import { getPokemons } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions";
import "./styles/App.css";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(setLoading(true));
    const fetchPokemons = async () => {
      const responsePokemons = await getPokemons();

      dispatch(getPokemonsWithDetails(responsePokemons));
      dispatch(setLoading(false));
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading && (
        <Col offset={12} >
          <Spin spinning size="large" />
        </Col>
      )}
      {!loading && <CardList pokemons={pokemons} />}
    </div>
  );
}

export default App;
