import { APIInfo, APIInfoInitialState } from "@/models";
import { getAllCharacters, GetFetch } from "@/pages";
import { getCharacters, getFilterCharacters } from "@/redux";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import PaginationButton from "./PaginationButton";
export interface PaginationInterface {}

const Pagination: React.FC<PaginationInterface> = () => {
  const dispatch = useDispatch();

  const [paginationData, setPagination] =
    useState<APIInfo>(APIInfoInitialState);

  const [currentPage, setpaginationCount] = useState<number>(1);

  const setChars = async () => {
    const data = await GetFetch(getAllCharacters);
    setPagination(data.info);
    dispatch(getCharacters(data.results));
    dispatch(getFilterCharacters(data.results));
  };

  useEffect(() => {
    setChars();
  }, []);

  const handleNext = async () => {
    const data = await GetFetch(paginationData.next);
    dispatch(getCharacters(data.results));
    dispatch(getFilterCharacters(data.results));
    setpaginationCount(currentPage + 1);
    setPagination(data.info);
  };

  const handlePrevious = async () => {
    const data = await GetFetch(paginationData.prev);
    dispatch(getCharacters(data.results));
    dispatch(getFilterCharacters(data.results));
    setpaginationCount(currentPage - 1);
    setPagination(data.info);
  };
  return (
    <PaginationStyle>
      {currentPage !== 1 ? (
        <PaginationButton
          type={false}
          onClick={handlePrevious}
        ></PaginationButton>
      ) : undefined}
      <span>
        {currentPage} de {paginationData.pages}
      </span>
      <PaginationButton type={true} onClick={handleNext}></PaginationButton>
    </PaginationStyle>
  );
};

export const PaginationStyle = styled.div`
  margin: 1rem 1rem;
  span {
    margin: 1rem;
  }
`;

export default Pagination;
