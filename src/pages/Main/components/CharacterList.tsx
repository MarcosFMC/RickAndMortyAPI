import { ErrorCharacterNotFound, LoadingCharacter } from "@/components";
import { AppStore } from "@/models";
import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { SCCharacterList } from "../styled-components";
const Character = lazy(() => import("./CharacterCard"));

export interface ICharacterList {}

const CharacterList: React.FC<ICharacterList> = () => {
  const characters = useSelector(
    (state: AppStore) => state.rickAndMortyCharacters.results
  );

  return (
    <SCCharacterList>
      {characters === undefined ? (
        <ErrorCharacterNotFound />
      ) : (
        characters.map((character) => (
          <Suspense fallback={<LoadingCharacter />}>
            <Character {...character} />
          </Suspense>
        ))
      )}
    </SCCharacterList>
  );
};

export default CharacterList;
