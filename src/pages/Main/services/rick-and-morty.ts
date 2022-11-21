export const getAllCharacters = "https://rickandmortyapi.com/api/character";

export const GetFetch = async (url: string) => {
  return fetch(url).then((res) => res.json());
};
