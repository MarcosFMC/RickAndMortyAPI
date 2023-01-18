import { FilterForm } from "@/models";

export const rickAndMortyCharactersURL =
  "https://rickandmortyapi.com/api/character";

export const GetCharacterByFilter = async (inputObject: FilterForm) => {
  let urlQueries = "";
  for (const [clave, valor] of Object.entries(inputObject)) {
    urlQueries += valor != "" ? `${clave}=${valor}&` : "";
  }
  const filterUrl = `https://rickandmortyapi.com/api/character/?${urlQueries}`;
  return fetch(filterUrl).then((res) => res.json());
};

export const GetFetch = async (url: string) => {
  return fetch(url).then((res) => res.json());
};
