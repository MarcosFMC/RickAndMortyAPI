import { PaginationContext, PaginationInitialStatePage } from "@/contexts";
import { GetCharacterByName } from "@/pages";
import { getAll } from "@/redux";
import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export interface SearchInputInterface {}

const SearchInput: React.FC<SearchInputInterface> = () => {
  const dispatch = useDispatch();

  const { setPaginationCount } = useContext(PaginationContext);

  const handleChange = async (e: any) => {
    const filterData = await GetCharacterByName(e.target.value);
    setPaginationCount(PaginationInitialStatePage);
    dispatch(getAll(filterData));
  };

  return (
    <SearchInputStyle>
      <input
        className="form-input"
        type="text"
        placeholder="Search characters..."
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
  color: #f9f9f9;

  .form-input {
    color: #f9f9f9;
    background: #303040;
    border: none;
    font-family: "Kanit";
    font-size: 1rem;
    font-weight: 300;
    width: 40vw;
    padding: 0.6rem;
  }

  .form-icon {
    background: #303040;
    font-size: 1.5rem;
    height: 43px;
    padding: 0rem 1rem;
  }

  .form-input::placeholder {
    color: grey;
  }
  .form-input:focus {
    color: #f9f9f9;
    outline: none;
  }
`;

export default SearchInput;
