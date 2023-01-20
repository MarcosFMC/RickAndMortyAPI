import { PaginationContext } from "@/contexts";
import { filterFormInitialState } from "@/models";
import { getDbCharacters, getRickAndMortyCharacters } from "@/redux";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  GetCharacterByFilter,
  GetFetch,
  rickAndMortyCharactersURL,
} from "../service";

import { SCFilterRickAndMorty } from "../styled-components";
import DataModeSwitcher from "./DataModeSwitcher";
export interface IRickAndMortyFilter {}

const RickAndMortyFilter: React.FC<IRickAndMortyFilter> = () => {
  const dispatch = useDispatch();

  const setCharacters = async () => {
    const data = await GetFetch(rickAndMortyCharactersURL);
    dispatch(getRickAndMortyCharacters(data));
  };
  useEffect(() => {
    setCharacters();
  }, []);

  const [filterForm, setFilterForm] = useState(filterFormInitialState);
  const { setPaginationCount } = useContext(PaginationContext);

  const handleChange = async (e: any) => {
    setFilterForm({ ...filterForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = await GetCharacterByFilter(filterForm);
    dispatch(getRickAndMortyCharacters(data));
    setPaginationCount(1);
  };

  const handleRefresh = async (e: any) => {
    setFilterForm(filterFormInitialState);
  };

  return (
    <SCFilterRickAndMorty onSubmit={handleSubmit}>
      <h2>Rick and Morty Filter</h2>
      <span>Name : </span>
      <input
        type="text"
        placeholder="Search characters..."
        onChange={handleChange}
        name="name"
        value={filterForm.name}
      />
      <span>Status : </span>
      <select name="status" onChange={handleChange} value={filterForm.status}>
        <option value="">-</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <span>Species: </span>
      <input
        type="text"
        onChange={handleChange}
        name="species"
        placeholder="Search species..."
        value={filterForm.species}
      />
      <span>Type: </span>
      <input
        type="text"
        onChange={handleChange}
        name="type"
        placeholder="Search type..."
        value={filterForm.type}
      />
      <span>Gender: </span>
      <select name="gender" onChange={handleChange} value={filterForm.gender}>
        <option value="">-</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <div className="buttons-container">
        <input type="submit" value="Filter" />
        <input type="button" value="Refresh" onClick={handleRefresh} />
      </div>
      <DataModeSwitcher />
    </SCFilterRickAndMorty>
  );
};

export default RickAndMortyFilter;
