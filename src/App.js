import { Col, Spin } from "antd";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchPokemonsWithDetails } from "./slices/dataSlice";
import Searcher from "./components/Searcher";
import logo from "./statics/logo.svg";
import CardList from "./components/CardList";
import "./styles/App.css";


function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.ui.loading);
  
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());

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
