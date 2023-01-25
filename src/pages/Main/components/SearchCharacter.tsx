import {
  RickAndMortyPaginationContext,
  rickAndMortyPaginationInitialStatePage,
} from "@/contexts";
import { GetCharacterByFilter } from "@/pages";
import { getDbCharacters } from "@/redux";
import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { SCSearchCharacter } from "../styled-components";

export interface ISearchCharacter {}

const SearchCharacter: React.FC<ISearchCharacter> = () => {
  const dispatch = useDispatch();

  const { setPaginationCount } = useContext(RickAndMortyPaginationContext);

  const filterRickAndMortyCharacters = async (e: any) => {
    const filterData = await GetCharacterByFilter(e.target.value);
    setPaginationCount(rickAndMortyPaginationInitialStatePage);
    dispatch(getDbCharacters(filterData));
  };

  const handleChange = async (e: any) => {
    filterRickAndMortyCharacters(e);
  };

  return (
    <SCSearchCharacter>
      <input
        className="form-input"
        type="text"
        placeholder="Search characters..."
        onChange={handleChange}
      />
      <AiOutlineSearch className="form-icon" />
    </SCSearchCharacter>
  );
};

export default SearchCharacter;
