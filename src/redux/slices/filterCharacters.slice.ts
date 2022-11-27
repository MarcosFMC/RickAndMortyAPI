import { APIAllData, APIAllDataInitialState } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const emptyCharactersState: APIAllData = APIAllDataInitialState;

export const charactersSlice = createSlice({
  name: "characters",
  initialState: emptyCharactersState,
  reducers: {
    getAll: (state, action) => {
      return action.payload;
    },
  },
});

export const { getAll } = charactersSlice.actions;
