import { DataModeContext } from "@/contexts";
import { SCButtonPagination } from "@/styled-components";
import React, { useContext } from "react";
import { SCDataModeSwitcher } from "../styled-components";

export interface IDataModeSwitcher {}

const DataModeSwitcher: React.FC<IDataModeSwitcher> = () => {
  const { dataMode, setDataMode } = useContext(DataModeContext);

  const handleClick = (): void => {
    dataMode == "database"
      ? setDataMode("rickandmorty")
      : setDataMode("database");
  };
  return (
    <SCDataModeSwitcher>
      <SCButtonPagination onClick={handleClick}>{dataMode}</SCButtonPagination>
    </SCDataModeSwitcher>
  );
};

export default DataModeSwitcher;
