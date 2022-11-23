import { APIAllData, APIAllDataInitialState } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const emptyFilterCharactersState: APIAllData = APIAllDataInitialState;

export const filterCharactersSlice = createSlice({
  name: "filterCharacters",
  initialState: emptyFilterCharactersState,
  reducers: {
    getAll: (state, action) => {
      return action.payload;
    },
  },
});

export const { getAll } = filterCharactersSlice.actions;
