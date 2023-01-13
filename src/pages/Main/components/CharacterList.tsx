import { ErrorCharacterNotFound, LoadingCharacter } from "@/components";
import { CharacterListContext } from "@/contexts";
import { AppStore } from "@/models";
import React, { lazy, Suspense, useContext } from "react";
import { useSelector } from "react-redux";
import { SCCharacterList } from "../styled-components";
const Character = lazy(() => import("./Character"));

export interface ICharacterList {}

const CharacterList: React.FC<ICharacterList> = () => {

  const characters = useSelector((state: AppStore) => state.characters.results);

  const { loading } = useContext(CharacterListContext);

  return (
    <SCCharacterList>
      {characters === undefined ? (
        <ErrorCharacterNotFound />
      ) : (
        characters.map((character) => (
          <Suspense fallback={<LoadingCharacter />}>
            <Character loading={loading} {...character} />
          </Suspense>
        ))
      )}
    </SCCharacterList>
  );
};

export default CharacterList;
