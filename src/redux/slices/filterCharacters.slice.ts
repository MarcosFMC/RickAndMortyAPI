import { APICharacter } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const emptyFilterCharactersState: APICharacter[] = [];

export const filterCharactersSlice = createSlice({
  name: "filterCharacters",
  initialState: emptyFilterCharactersState,
  reducers: {
    getFilterCharacters: (state, action) => {
      return action.payload;
    },
    filterCharactersByName: (state, action) => {
      let regularExpresion = new RegExp(action.payload.value, "gi");

      const filtered = action.payload.characters.filter(
        (character: APICharacter) => {
          return character.name.match(regularExpresion) !== null;
        }
      );

      return filtered;
    },
  },
});

export const { getFilterCharacters, filterCharactersByName } =
  filterCharactersSlice.actions;
