import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { createContext, useState } from "react";

interface IDataModeContext {
  dataMode: "database" | "rickandmorty";
  setDataMode: React.Dispatch<
    React.SetStateAction<"database" | "rickandmorty">
  >;
}
const defaultState: IDataModeContext = {
  dataMode: "rickandmorty",
  setDataMode: () => {},
};

export const DataModeContext = createContext<IDataModeContext>(defaultState);

interface IDataModeProvider {
  children?: ReactJSXElement | ReactJSXElement[];
}

export const DataModeProvider: React.FC<IDataModeProvider> = ({ children }) => {
  const [dataMode, setDataMode] = useState<"database" | "rickandmorty">(
    "rickandmorty"
  );

  return (
    <DataModeContext.Provider
      value={{
        dataMode,
        setDataMode,
      }}
    >
      {children}
    </DataModeContext.Provider>
  );
};
