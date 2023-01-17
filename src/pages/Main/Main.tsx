import { Nav, Pagination } from "@/components";
import { CharacterListProvider, PaginationProvider } from "@/contexts";
import { getCharacters } from "@/redux";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  CharacterList,
  FilterCharacterForm,
  MainBackground,
} from "./components";
import { GetFetch, rickAndMortyCharactersURL } from "./service";
import { SCMain } from "./styled-components/SCMain";

export interface MainInterface {}

const Main: React.FC<MainInterface> = () => {
  const dispatch = useDispatch();

  const setCharacters = async () => {
    const data = await GetFetch(rickAndMortyCharactersURL);
    dispatch(getCharacters(data));
  };
  useEffect(() => {
    setCharacters();
  }, []);

  return (
    <SCMain>
      <PaginationProvider>
        <CharacterListProvider>
          <Nav />
          <MainBackground />
          <FilterCharacterForm />
          <CharacterList />
          <Pagination />
        </CharacterListProvider>
      </PaginationProvider>
    </SCMain>
  );
};

export default Main;
