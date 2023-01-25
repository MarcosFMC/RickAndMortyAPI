import {
  CharacterListContext,
  RickAndMortyPaginationContext,
} from "@/contexts";
import { AppStore } from "@/models";
import { GetFetch } from "@/pages";
import { getRickAndMortyCharacters } from "@/redux";
import { SCPagination } from "@/styled-components";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonPagination } from "@/components";

export interface IRickAndMortyPagination {}

const RickAndMortyPagination: React.FC<IRickAndMortyPagination> = () => {
  const dispatch = useDispatch();

  const { setPaginationCount, currentPage } = useContext(
    RickAndMortyPaginationContext
  );

  const { setLoading } = useContext(CharacterListContext);

  const paginationInfo = useSelector(
    (state: AppStore) => state.rickAndMortyCharacters.info
  );

  const getNumbersFromURL = (url: string) => {
    const matches: any = url.match(/(\d+)/);
    setPaginationCount(matches[0]);
  };

  const handleNext = async () => {
    setLoading(true);
    const nextData = await GetFetch(paginationInfo.next);
    getNumbersFromURL(paginationInfo.next);
    dispatch(getRickAndMortyCharacters(nextData));
    setLoading(false);
  };

  const handlePrevious = async () => {
    setLoading(true);
    const prevData = await GetFetch(paginationInfo.prev);
    getNumbersFromURL(paginationInfo.prev);
    dispatch(getRickAndMortyCharacters(prevData));
    setLoading(false);
  };

  return (
    <SCPagination>
      {paginationInfo !== undefined ? (
        <>
          <ButtonPagination
            text="PREV"
            disabled={!paginationInfo.prev}
            onClick={handlePrevious}
          />
          <span className="pages-text">
            <b>{currentPage}</b> de {paginationInfo.pages}
          </span>
          <ButtonPagination
            text="NEXT"
            onClick={handleNext}
            disabled={!paginationInfo.next}
          />
        </>
      ) : undefined}
      <span className="characters-found-text">
        Personajes encontrados : {""}
        {paginationInfo !== undefined ? paginationInfo.count : null}
      </span>
    </SCPagination>
  );
};

export default RickAndMortyPagination;
