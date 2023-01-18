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
  },
});

export const { getDbCharacters } = dbCharactersSlice.actions;
