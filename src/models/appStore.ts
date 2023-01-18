import { Character, RickAndMortyData } from "./rick-and-morty";

export interface AppStore {
  rickAndMortyCharacters: RickAndMortyData;
  dbCharacters: Character[];
}
