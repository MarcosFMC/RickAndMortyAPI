import { RickAndMortyData, rickAndMortyDataInitialState } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const rickAndMortyCharactersInitialState: RickAndMortyData =
  rickAndMortyDataInitialState;

export const rickAndMortyCharactersSlice = createSlice({
  name: "rickAndMortyCharacters",
  initialState: rickAndMortyCharactersInitialState,
  reducers: {
    getRickAndMortyCharacters: (state, action) => {
      return action.payload;
    },
  },
});

export const { getRickAndMortyCharacters } =
  rickAndMortyCharactersSlice.actions;
