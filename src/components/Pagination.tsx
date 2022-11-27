import { CharacterListContext, PaginationContext } from "@/contexts";
import { AppStore } from "@/models";
import { getAllCharacters, GetFetch } from "@/pages";
import { getAll } from "@/redux";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PaginationButton from "./PaginationButton";

export interface PaginationInterface {}

const Pagination: React.FC<PaginationInterface> = () => {
  const dispatch = useDispatch();

  const { setPaginationCount, currentPage } = useContext(PaginationContext);

  const { setLoading } = useContext(CharacterListContext);

  const paginationInfo = useSelector(
    (state: AppStore) => state.characters.info
  );

  const getCurrentPageFromURL = (url: string) => {
    const matches: any = url.match(/(\d+)/);
    setPaginationCount(matches[0]);
  };
  const setChars = async () => {
    const data = await GetFetch(getAllCharacters);
    dispatch(getAll(data));
  };

  useEffect(() => {
    setLoading(true);
    setChars();
    setLoading(false);
  }, []);

  const handleNext = async () => {
    if (paginationInfo !== undefined) {
      setLoading(true);
      const data = await GetFetch(paginationInfo.next);
      getCurrentPageFromURL(paginationInfo.next);
      dispatch(getAll(data));
      setLoading(false);
    }
  };

  const handlePrevious = async () => {
    if (paginationInfo !== undefined) {
      setLoading(true);
      const data = await GetFetch(paginationInfo.prev);
      getCurrentPageFromURL(paginationInfo.prev);
      dispatch(getAll(data));
      setLoading(false);
    }
  };
  return (
    <PaginationStyle>
      {paginationInfo !== undefined ? (
        <>
          <PaginationButton
            type={false}
            onClick={handlePrevious}
          ></PaginationButton>

          <span className="pages-text">
            <b>{currentPage}</b> de {paginationInfo.pages}
          </span>

          <PaginationButton type={true} onClick={handleNext}></PaginationButton>
        </>
      ) : undefined}
      <span className="characters-found-text">
        Personajes encontrados :
        {paginationInfo !== undefined ? paginationInfo.count : null}
      </span>
    </PaginationStyle>
  );
};

export const PaginationStyle = styled.div`
  margin: 1rem;

  .characters-found-text {
    display: block;
    text-align: center;
    margin-top: 1rem;
  }
  .pages-text {
    margin: 1rem;
  }

  .pages-text b {
    background: rgb(249, 249, 249, 5%);
    padding: 0px 1rem;
  }
`;

export default Pagination;
