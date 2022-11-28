import { PaginationContext, PaginationInitialStatePage } from "@/contexts";
import { GetCharacterByName } from "@/pages";
import { getCharacters } from "@/redux";
import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { SCSearchCharacter } from "../styled-components";

export interface ISearchCharacter {}

const SearchCharacter: React.FC<ISearchCharacter> = () => {
  const dispatch = useDispatch();

  const { setPaginationCount } = useContext(PaginationContext);

  const handleChange = async (e: any) => {
    const filterData = await GetCharacterByName(e.target.value);
    setPaginationCount(PaginationInitialStatePage);
    dispatch(getCharacters(filterData));
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
