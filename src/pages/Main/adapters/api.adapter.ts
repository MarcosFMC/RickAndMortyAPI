import { APIData, APIInfoInitialState } from "@/models";

export const apiDataAdapter = (characters: any): APIData => {
  const InitialState: APIData = {
    results: characters,
    info: APIInfoInitialState,
  };
  return InitialState;
};
