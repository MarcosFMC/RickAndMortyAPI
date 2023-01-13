export const apiCharactersURL = "http://localhost:8080/api/character";

export const getApiCharacters = async (url: string) => {
  return fetch(url).then((res) => res.json());
};

export const getApiCharactersByName = async (name: string) => {
  const apiNameUrl = `http://localhost:8080/api/name/${name}`;
  return fetch(apiNameUrl).then((res) => res.json());
};
