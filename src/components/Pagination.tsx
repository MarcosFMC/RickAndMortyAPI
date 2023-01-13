import {
  CharacterListContext,
  FilterCharacterContext,
  PaginationContext,
} from "@/contexts";
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

  const { filterForm } = useContext(FilterCharacterContext);
  const { setLoading } = useContext(CharacterListContext);

  const paginationInfo = useSelector(
    (state: AppStore) => state.characters.info
  );

  const getNumbersFromURL = (url: string) => {
    const matches: any = url.match(/(\d+)/);
    setPaginationCount(matches[0]);
  };

  const handleNext = async () => {
    if (paginationInfo !== undefined) {
      setLoading(true);
      const data = await GetFetch(paginationInfo.next);
      getNumbersFromURL(paginationInfo.next);
      dispatch(getCharacters(data));
      setLoading(false);
    }
  };

  const handlePrevious = async () => {
    if (paginationInfo !== undefined) {
      setLoading(true);
      const data = await GetFetch(paginationInfo.prev);
      getNumbersFromURL(paginationInfo.prev);
      dispatch(getCharacters(data));
      setLoading(false);
    }
  };

  return (
    <SCPagination>
      {filterForm.created != "bd" ? (
        <>
          {paginationInfo !== undefined ? (
            <>
              <ButtonPagination type={false} onClick={handlePrevious} />

              <span className="pages-text">
                <b>{currentPage}</b> de {paginationInfo.pages}
              </span>

              <ButtonPagination type={true} onClick={handleNext} />
            </>
          ) : undefined}
          <span className="characters-found-text">
            Personajes encontrados :
            {paginationInfo !== undefined ? paginationInfo.count : null}
          </span>
        </>
      ) : undefined}
    </SCPagination>
  );
};

export default Pagination;
