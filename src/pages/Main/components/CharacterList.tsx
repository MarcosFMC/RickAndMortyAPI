import { ErrorCharacterNotFound, LoadingCharacter } from "@/components";
import { DataModeContext, DbPaginationContext } from "@/contexts";
import { AppStore } from "@/models";
import React, { lazy, Suspense, useContext } from "react";
import { useSelector } from "react-redux";
import { SCCharacterList } from "../styled-components";
const CharacterCard = lazy(() => import("./CharacterCard"));

export interface ICharacterList {}

const CharacterList: React.FC<ICharacterList> = () => {
  const rickAndMortyCharacters = useSelector(
    (state: AppStore) => state.rickAndMortyCharacters.results
  );
  const dbCharacters = useSelector((state: AppStore) => state.dbCharacters);

  const { page, maxLength, dataPerPage } = useContext(DbPaginationContext);
  const { dataMode } = useContext(DataModeContext);

  return (
    <SCCharacterList>
      {dataMode == "rickandmorty" ? (
        rickAndMortyCharacters === undefined ? (
          <ErrorCharacterNotFound />
        ) : (
          rickAndMortyCharacters.map((character, i) => (
            <Suspense fallback={<LoadingCharacter />}>
              <CharacterCard key={i} {...character} />
            </Suspense>
          ))
        )
      ) : dbCharacters === undefined ? (
        <ErrorCharacterNotFound />
      ) : (
        dbCharacters
          .slice(
            (page - 1) * dataPerPage,
            (page - 1) * dataPerPage + dataPerPage
          )
          .map((character, i) => (
            <Suspense fallback={<LoadingCharacter />}>
              <CharacterCard key={i} {...character} />
            </Suspense>
          ))
      )}
    </SCCharacterList>
  );
};

export default CharacterList;
