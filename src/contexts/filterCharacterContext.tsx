import { FilterForm, filterFormInitialState } from "@/models";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { createContext, useState } from "react";

interface IFilterCharacterContext {
  filterForm: FilterForm;
  setFilterForm: any;
}
const defaultState = {
  filterForm: filterFormInitialState,
  setFilterForm: undefined,
};

export const FilterCharacterContext =
  createContext<IFilterCharacterContext>(defaultState);

interface IFilterCharacterProvider {
  children?: ReactJSXElement;
}
export const FilterCharacterProvider: React.FC<IFilterCharacterProvider> = ({
  children,
}) => {
  const [filterForm, setFilterForm] = useState(filterFormInitialState);
  return (
    <FilterCharacterContext.Provider
      value={{
        filterForm,
        setFilterForm,
      }}
    >
      {children}
    </FilterCharacterContext.Provider>
  );
};
