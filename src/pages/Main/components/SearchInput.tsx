import { AppStore } from "@/models";
import { filterCharactersByName } from "@/redux";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export interface SearchInputInterface {}

const SearchInput: React.FC<SearchInputInterface> = () => {
  const dispatch = useDispatch();

  const characters = useSelector((state: AppStore) => state.characters);

  const handleChange = (e: any) => {
    dispatch(
      filterCharactersByName({ value: e.target.value, characters: characters })
    );
  };

  return (
    <SearchInputStyle>
      <input
        className="form-input"
        type="text"
        placeholder="Buscar Personaje..."
        onChange={handleChange}
      />
      <AiOutlineSearch className="form-icon"></AiOutlineSearch>
    </SearchInputStyle>
  );
};

export const SearchInputStyle = styled.div`
  margin: 5rem auto;
  display: flex;
  align-items: center;

  .form-input {
    background: #303040;
    border: none;
    font-family: "Kanit";
    width: 100%;
    padding: 1rem;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
  }

  .form-icon {
    background: #303040;
    font-size: 2rem;
    height: 52px;
    padding: 0rem 1rem;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  .form-input::placeholder {
    color: #f9f9f9;
  }
  .form-input:focus {
    background: #303050;
    color: #f9f9f9;
    outline: none;
  }
`;

export default SearchInput;
