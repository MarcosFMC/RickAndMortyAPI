import { PaginationContext } from "@/contexts";
import { AppStore } from "@/models";
import { getAllCharacters, GetFetch } from "@/pages";
import { getAll, getCharacters } from "@/redux";
import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PaginationButton from "./PaginationButton";

export interface PaginationInterface {}

const Pagination: React.FC<PaginationInterface> = () => {
  const dispatch = useDispatch();

  const { setPaginationCount, currentPage } = useContext(PaginationContext);

  const paginationInfo = useSelector(
    (state: AppStore) => state.filterCharacters.info
  );

  const getCurrentPageFromURL = (url: string) => {
    const matches: any = url.match(/(\d+)/);
    setPaginationCount(matches[0]);
  };
  const setChars = async () => {
    const data = await GetFetch(getAllCharacters);
    dispatch(getCharacters(data.results));
    dispatch(getAll(data));
  };

  useEffect(() => {
    setChars();
  }, []);

  const handleNext = async () => {
    if (paginationInfo !== undefined) {
      const data = await GetFetch(paginationInfo.next);
      getCurrentPageFromURL(paginationInfo.next);
      dispatch(getCharacters(data.results));
      dispatch(getAll(data));
    }
  };

  const handlePrevious = async () => {
    if (paginationInfo !== undefined) {
      const data = await GetFetch(paginationInfo.prev);
      getCurrentPageFromURL(paginationInfo.prev);
      dispatch(getCharacters(data.results));
      dispatch(getAll(data));
    }
  };
  return (
    <PaginationStyle>
      {paginationInfo !== undefined ? (
        <>
          {currentPage !== "1" ? (
            <PaginationButton
              type={false}
              onClick={handlePrevious}
            ></PaginationButton>
          ) : undefined}
          <span>
            {currentPage} de {paginationInfo.pages}
          </span>
          {paginationInfo.pages === 1 ? undefined : (
            <PaginationButton
              type={true}
              onClick={handleNext}
            ></PaginationButton>
          )}
          <span className="characters-found-text">
            Personajes encontrados : {paginationInfo.count}
          </span>
        </>
      ) : undefined}
    </PaginationStyle>
  );
};

export const PaginationStyle = styled.div`
  margin: 2rem 2rem;
  span {
    margin: 1rem;
  }
  @media screen and (max-width: 600px) {
    .characters-found-text {
      display: block;
      text-align: center;
    }
  }
`;

export default Pagination;
