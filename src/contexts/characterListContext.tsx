import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { createContext, useState } from "react";

interface ICharacterListContext {
  loading: boolean;
  setLoading: any;
}
const defaultState: ICharacterListContext = {
  loading: false,
  setLoading: undefined,
};

export const CharacterListContext =
  createContext<Partial<ICharacterListContext>>(defaultState);

export const CharacterListInitialState = "1";

interface ICharacterListProvider {
  children?: ReactJSXElement;
}
export const CharacterListProvider: React.FC<ICharacterListProvider> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <CharacterListContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </CharacterListContext.Provider>
  );
};
