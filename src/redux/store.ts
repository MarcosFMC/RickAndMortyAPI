import { AppStore } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { dbCharactersSlice, rickAndMortyCharactersSlice } from "./slices";

export default configureStore<AppStore>({
  reducer: {
    rickAndMortyCharacters: rickAndMortyCharactersSlice.reducer,
    dbCharacters: dbCharactersSlice.reducer,
  },
});
