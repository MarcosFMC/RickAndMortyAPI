import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { createContext, useState } from "react";
interface IRickAndMortyPagination {
  currentPage: number;
  setPaginationCount: React.Dispatch<React.SetStateAction<number>>;
}
const defaultState: IRickAndMortyPagination = {
  currentPage: 0,
  setPaginationCount: () => {},
};

export const RickAndMortyPaginationContext =
  createContext<IRickAndMortyPagination>(defaultState);

export const rickAndMortyPaginationInitialStatePage = 1;

interface IRickAndMortyProvider {
  children?: ReactJSXElement | ReactJSXElement[];
}
export const RickAndMortyPaginationProvider: React.FC<
  IRickAndMortyProvider
> = ({ children }) => {
  const [currentPage, setPaginationCount] = useState(
    rickAndMortyPaginationInitialStatePage
  );

  return (
    <RickAndMortyPaginationContext.Provider
      value={{
        currentPage,
        setPaginationCount,
      }}
    >
      {children}
    </RickAndMortyPaginationContext.Provider>
  );
};
