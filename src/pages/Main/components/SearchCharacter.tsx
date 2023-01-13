import {
  FilterCharacterContext,
  PaginationContext,
  PaginationInitialStatePage,
} from "@/contexts";
import {
  apiCharactersURL,
  apiDataAdapter,
  getApiCharacters,
  getApiCharactersByName,
  GetCharacterByName,
} from "@/pages";
import { getCharacters } from "@/redux";
import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { SCSearchCharacter } from "../styled-components";

export interface ISearchCharacter {}

const SearchCharacter: React.FC<ISearchCharacter> = () => {
  const dispatch = useDispatch();

  const { setPaginationCount } = useContext(PaginationContext);
  const { filterForm } = useContext(FilterCharacterContext);

  const setAPICharacters = async () => {
    const data = await getApiCharacters(apiCharactersURL);
    const adaptData = apiDataAdapter(data);
    dispatch(getCharacters(adaptData));
  };

  const handleChange = async (e: any) => {
    if (filterForm.created != "bd") {
      const filterData = await GetCharacterByName(e.target.value);
      console.log(filterData);
      setPaginationCount(PaginationInitialStatePage);
      dispatch(getCharacters(filterData));
    } else {
      if (e.target.value != "") {
        const filterData = await getApiCharactersByName(e.target.value);
        const data = apiDataAdapter(filterData);
        dispatch(getCharacters(data));
        console.log(data);
      } else {
        setAPICharacters();
      }
    }
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
