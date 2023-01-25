import { DbPaginationContext } from "@/contexts";
import { filterFormInitialState } from "@/models";
import {
  getDbCharacters,
  getDbCharactersByGender,
  getDbCharactersByName,
  getDbCharactersBySpecies,
  getDbCharactersByStatus,
  getDbCharactersByType,
} from "@/redux";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bdCharactersUrl, getAllDbCharacters } from "../service";

import { SCFilterRickAndMorty } from "../styled-components";
import DataModeSwitcher from "./DataModeSwitcher";
export interface IDbFilter {}

const DbFilter: React.FC<IDbFilter> = () => {
  const dispatch = useDispatch();

  const { setPage, setInput } = useContext(DbPaginationContext);

  const setCharacters = async () => {
    const data = await getAllDbCharacters(bdCharactersUrl);
    dispatch(getDbCharacters(data));
  };
  const [dbFilterForm, setDbFilterForm] = useState(filterFormInitialState);
  useEffect(() => {
    setCharacters();
  }, []);

  const resetDbPagination = () => {
    setPage(1);
    setInput(1);
  };
  //Corregir tipado
  const handleChange = async (e: any) => {
    setDbFilterForm({ ...dbFilterForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await setCharacters();
    dispatch(getDbCharactersByName(dbFilterForm.name));
    dispatch(getDbCharactersByStatus(dbFilterForm.status));
    dispatch(getDbCharactersBySpecies(dbFilterForm.species));
    dispatch(getDbCharactersByType(dbFilterForm.type));
    dispatch(getDbCharactersByGender(dbFilterForm.gender));
    resetDbPagination();
  };

  const handleRefresh = async (e: any) => {
    setDbFilterForm(filterFormInitialState);
    setCharacters();
    resetDbPagination();
  };

  return (
    <SCFilterRickAndMorty onSubmit={handleSubmit}>
      <h2>DB Filter</h2>
      <span>Name : </span>
      <input
        type="text"
        placeholder="Search characters..."
        onChange={handleChange}
        name="name"
        value={dbFilterForm.name}
      />
      <span>Status : </span>
      <select name="status" onChange={handleChange} value={dbFilterForm.status}>
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
        value={dbFilterForm.species}
      />
      <span>Type: </span>
      <input
        type="text"
        onChange={handleChange}
        name="type"
        placeholder="Search type..."
        value={dbFilterForm.type}
      />
      <span>Gender: </span>
      <select name="gender" onChange={handleChange} value={dbFilterForm.gender}>
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

export default DbFilter;
