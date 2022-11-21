import { APICharacter } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const emptyCharactersState: APICharacter[] = [];

export const charactersSlice = createSlice({
  name: "characters",
  initialState: emptyCharactersState,
  reducers: {
    getCharacters: (state, action) => {
      return action.payload;
    },
  },
});

export const { getCharacters } = charactersSlice.actions;
