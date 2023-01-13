import { FilterCharacterContext } from "@/contexts";
import { getCharacters } from "@/redux";
import React, { useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { apiDataAdapter } from "../adapters";
import {
  apiCharactersURL,
  getApiCharacters,
  GetFetch,
  rickAndMortyCharactersURL,
} from "../service";

import { SCFilterCharacterForm } from "../styled-components";
export interface FilterCharacterFormInterface {}

const FilterCharacterForm: React.FC<FilterCharacterFormInterface> = () => {
  const dispatch = useDispatch();

  const { filterForm, setFilterForm } = useContext(FilterCharacterContext);

  const setRickAndMortyCharacters = async () => {
    const data = await GetFetch(rickAndMortyCharactersURL);
    dispatch(getCharacters(data));
  };
  const setAPICharacters = async () => {
    const data = await getApiCharacters(apiCharactersURL);
    const adaptData = apiDataAdapter(data);
    dispatch(getCharacters(adaptData));
  };

  const handleChange = async (e: any) => {
    setFilterForm({ ...filterForm, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (filterForm.created == "bd") {
      setAPICharacters();
    }
    if (filterForm.created == "") {
      setRickAndMortyCharacters();
    }
    if (filterForm.created == "api") {
      setRickAndMortyCharacters();
    }
  }, [filterForm]);

  return (
    <SCFilterCharacterForm>
      <h2>Ordenar</h2>
      <span>Created : </span>
      <select name="created" onChange={(e) => handleChange(e)}>
        <option value="">-</option>
        <option value="api">API</option>
        <option value="bd">Base de datos</option>
      </select>
      <h2>Filtros</h2>
      <span>Status : </span>
      <select name="status" onChange={(e) => handleChange(e)}>
        <option value="">-</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
      </select>
      <span>Gender: </span>
      <select name="gender" onChange={(e) => handleChange(e)}>
        <option value="">-</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </SCFilterCharacterForm>
  );
};

export default FilterCharacterForm;
