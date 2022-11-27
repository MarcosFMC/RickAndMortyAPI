import { AppStore } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { charactersSlice } from "./slices";

export default configureStore<AppStore>({
  reducer: {
    characters: charactersSlice.reducer,
  },
});
