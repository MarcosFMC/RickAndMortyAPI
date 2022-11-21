import { APICharacter } from "./character";

export interface AppStore {
  characters: APICharacter[];
  filterCharacters: APICharacter[];
}
