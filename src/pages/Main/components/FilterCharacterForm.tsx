import { PaginationContext } from "@/contexts";
import { filterFormInitialState } from "@/models";
import { getCharacters } from "@/redux";
import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { GetCharacterByFilter } from "../service";

import { SCFilterCharacterForm } from "../styled-components";
export interface FilterCharacterFormInterface {}

const FilterCharacterForm: React.FC<FilterCharacterFormInterface> = () => {
  const dispatch = useDispatch();

  const [filterForm, setFilterForm] = useState(filterFormInitialState);
  const { setPaginationCount } = useContext(PaginationContext);

  const handleChange = async (e: any) => {
    setFilterForm({ ...filterForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = await GetCharacterByFilter(filterForm);
    dispatch(getCharacters(data));
    setPaginationCount(1);
  };

  const handleRefresh = async (e: any) => {
    setFilterForm(filterFormInitialState);
  };

  return (
    <SCFilterCharacterForm onSubmit={handleSubmit}>
      <h2>FILTERS</h2>
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
        value={filterForm.species}
      />
      <span>Type: </span>
      <input
        type="text"
        onChange={handleChange}
        name="type"
        value={filterForm.type}
      />
      <span>Gender: </span>
      <select name="gender" onChange={handleChange} value={filterForm.gender}>
        <option value="">-</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input type="submit" value="Filtrar" />
      <input type="button" value="Refresh" onClick={handleRefresh} />
    </SCFilterCharacterForm>
  );
};

export default FilterCharacterForm;
