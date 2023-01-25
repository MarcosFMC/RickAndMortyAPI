import { Character } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const dbCharactersInitialState: Character[] = [];

export const dbCharactersSlice = createSlice({
  name: "dbCharacters",
  initialState: dbCharactersInitialState,
  reducers: {
    getDbCharacters: (state, action) => {
      return action.payload;
    },
    getDbCharactersByName: (state, action) => {
      const name: string = action.payload;

      return [...state].filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
    },
    getDbCharactersByStatus: (state, action) => {
      const status: string = action.payload;

      if (status == "") return;
      return [...state].filter(
        (e) => e.status.toLowerCase() == status.toLowerCase()
      );
    },
    getDbCharactersBySpecies: (state, action) => {
      const species: string = action.payload;

      return [...state].filter((e) =>
        e.species.toLowerCase().includes(species.toLowerCase())
      );
    },
    getDbCharactersByType: (state, action) => {
      const type: string = action.payload;

      return [...state].filter((e) =>
        e.type.toLowerCase().includes(type.toLowerCase())
      );
    },
    getDbCharactersByGender: (state, action) => {
      const gender: string = action.payload;
      if (gender == "") return;
      return [...state].filter(
        (e) => e.gender.toLowerCase() == gender.toLowerCase()
      );
    },
  },
});

export const {
  getDbCharacters,
  getDbCharactersByName,
  getDbCharactersByStatus,
  getDbCharactersBySpecies,
  getDbCharactersByType,
  getDbCharactersByGender,
} = dbCharactersSlice.actions;
