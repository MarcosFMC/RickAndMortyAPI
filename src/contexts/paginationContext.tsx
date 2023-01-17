import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { createContext, useState } from "react";
interface IPaginationContext {
  currentPage: string;
  setPaginationCount: any;
}
const defaultState: IPaginationContext = {
  currentPage: "1",
  setPaginationCount: undefined,
};

export const PaginationContext =
  createContext<Partial<IPaginationContext>>(defaultState);

export const PaginationInitialStatePage = "1";

interface IPaginationProvider {
  children?: ReactJSXElement | ReactJSXElement[];
}
export const PaginationProvider: React.FC<IPaginationProvider> = ({
  children,
}) => {
  const [currentPage, setPaginationCount] = useState(
    PaginationInitialStatePage
  );

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        setPaginationCount,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
