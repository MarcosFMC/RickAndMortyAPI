import { Nav, Pagination } from "@/components";
import {
  CharacterListProvider,
  FilterCharacterProvider,
  PaginationProvider,
} from "@/contexts";
import { getCharacters } from "@/redux";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  CharacterList,
  FilterCharacterForm,
  MainBackground,
  SearchCharacter,
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
      <FilterCharacterProvider>
        <PaginationProvider>
          <CharacterListProvider>
            <>
              <Nav />
              <MainBackground />
              <SearchCharacter />
              <FilterCharacterForm />
              <CharacterList />
              <Pagination />
            </>
          </CharacterListProvider>
        </PaginationProvider>
      </FilterCharacterProvider>
    </SCMain>
  );
};

export default Main;
