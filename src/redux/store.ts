import { AppStore } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { charactersSlice, filterCharactersSlice } from "./slices";

export default configureStore<AppStore>({
  reducer: {
    characters: charactersSlice.reducer,
    filterCharacters: filterCharactersSlice.reducer,
  },
});
