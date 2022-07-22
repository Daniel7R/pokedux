import { Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  fetchPokemonsWithDetails,
  fetchPokemonWithDetails,
} from "../slices/dataSlice";

const Searcher = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setInputValue(inputValue);

    if (inputValue.trim().length === 0) {
      dispatch(fetchPokemonsWithDetails());
    } else if (inputValue.trim().length > 2) {
      dispatch(fetchPokemonWithDetails(inputValue));
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    if (inputValue.trim().length > 2) {
      dispatch(fetchPokemonWithDetails(inputValue));
    }
  };

  return (
    <Input.Search
      allowClear
      onSearch={handleSearch}
      onChange={handleInputChange}
      style={{ marginBottom: 10 }}
      placeholder="Search ..."
    />
  );
};

export default Searcher;
