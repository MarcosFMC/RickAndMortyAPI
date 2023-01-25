import {
  DataModeContext,
  rickAndMortyPaginationInitialStatePage,
  RickAndMortyPaginationContext,
  DbPaginationContext,
} from "@/contexts";
import { SCButtonPagination } from "@/styled-components";
import React, { useContext } from "react";
import { SCDataModeSwitcher } from "../styled-components";

export interface IDataModeSwitcher {}

const DataModeSwitcher: React.FC<IDataModeSwitcher> = () => {
  const { dataMode, setDataMode } = useContext(DataModeContext);

  const { setPaginationCount } = useContext(RickAndMortyPaginationContext);

  const { setPage, setInput } = useContext(DbPaginationContext);

  const resetPagination = (): void => {
    setPaginationCount(rickAndMortyPaginationInitialStatePage);
    setPage(1);
    setInput(1);
  };
  const handleClick = (): void => {
    dataMode == "database"
      ? setDataMode("rickandmorty")
      : setDataMode("database");

    resetPagination();
  };
  return (
    <SCDataModeSwitcher>
      <SCButtonPagination onClick={handleClick}>
        {dataMode == "rickandmorty" ? "Db" : "RickAndMorty"}
      </SCButtonPagination>
    </SCDataModeSwitcher>
  );
};

export default DataModeSwitcher;
