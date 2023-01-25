import { AppStore } from "@/models";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { createContext, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";

interface IDbPaginationContext {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  dataPerPage: number;
  setDataPerPage: React.Dispatch<React.SetStateAction<number>>;
  input: number;
  setInput: React.Dispatch<React.SetStateAction<number>>;
  maxLength: number;
}
const defaultState: IDbPaginationContext = {
  page: 0,
  setPage: () => {},
  dataPerPage: 0,
  setDataPerPage: () => {},
  maxLength: 0,
  input: 0,
  setInput: () => {},
};

export const DbPaginationContext =
  createContext<IDbPaginationContext>(defaultState);

interface IDbPaginationProvider {
  children?: ReactJSXElement | ReactJSXElement[];
}
export const DbPaginationProvider: React.FC<IDbPaginationProvider> = ({
  children,
}) => {
  const [page, setPage] = useState<number>(1);
  const [dataPerPage, setDataPerPage] = useState<number>(20);

  const [input, setInput] = useState<number>(1);

  const dbCharacters = useSelector((state: AppStore) => state.dbCharacters);

  const maxLength = dbCharacters.length / dataPerPage;
  return (
    <DbPaginationContext.Provider
      value={{
        page,
        setPage,
        dataPerPage,
        setDataPerPage,
        input,
        setInput,
        maxLength,
      }}
    >
      {children}
    </DbPaginationContext.Provider>
  );
};
