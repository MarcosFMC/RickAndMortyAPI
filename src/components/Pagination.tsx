import { CharacterListContext, PaginationContext } from "@/contexts";
import { AppStore } from "@/models";
import { GetFetch } from "@/pages";
import { getCharacters } from "@/redux";
import { SCPagination } from "@/styled-components";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonPagination from "./ButtonPagination";

export interface PaginationInterface {}

const Pagination: React.FC<PaginationInterface> = () => {
  const dispatch = useDispatch();

  const { setPaginationCount, currentPage } = useContext(PaginationContext);

  const { setLoading } = useContext(CharacterListContext);

  const paginationInfo = useSelector(
    (state: AppStore) => state.characters.info
  );

  const getNumbersFromURL = (url: string) => {
    const matches: any = url.match(/(\d+)/);
    setPaginationCount(matches[0]);
  };

  const handleNext = async () => {
    setLoading(true);
    const nextData = await GetFetch(paginationInfo.next);
    getNumbersFromURL(paginationInfo.next);
    dispatch(getCharacters(nextData));
    setLoading(false);
  };

  const handlePrevious = async () => {
    setLoading(true);
    const prevData = await GetFetch(paginationInfo.prev);
    getNumbersFromURL(paginationInfo.prev);
    dispatch(getCharacters(prevData));
    setLoading(false);
  };

  return (
    <SCPagination>
      {paginationInfo !== undefined ? (
        <>
          {paginationInfo.prev ? (
            <ButtonPagination type={false} onClick={handlePrevious} />
          ) : null}
          {paginationInfo.next ? (
            <ButtonPagination type={true} onClick={handleNext} />
          ) : null}
          <span className="pages-text">
            <b>{currentPage}</b> de {paginationInfo.pages}
          </span>
        </>
      ) : undefined}
      <span className="characters-found-text">
        Personajes encontrados :
        {paginationInfo !== undefined ? paginationInfo.count : null}
      </span>
    </SCPagination>
  );
};

export default Pagination;
