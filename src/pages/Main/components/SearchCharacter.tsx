import { PaginationContext, PaginationInitialStatePage } from "@/contexts";
import { GetCharacterByFilter } from "@/pages";
import { getCharacters } from "@/redux";
import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { SCSearchCharacter } from "../styled-components";

export interface ISearchCharacter {}

const SearchCharacter: React.FC<ISearchCharacter> = () => {
  const dispatch = useDispatch();

  const { setPaginationCount } = useContext(PaginationContext);

  const filterRickAndMortyCharacters = async (e: any) => {
    const filterData = await GetCharacterByFilter(e.target.value);
    setPaginationCount(PaginationInitialStatePage);
    dispatch(getCharacters(filterData));
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
