import { RickAndMortyData, rickAndMortyInfoInitialState } from "@/models";

export const apiDataAdapter = (characters: any): RickAndMortyData => {
  const InitialState: RickAndMortyData = {
    results: characters,
    info: rickAndMortyInfoInitialState,
  };
  return InitialState;
};
