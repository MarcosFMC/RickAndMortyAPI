export const bdCharactersUrl = "http://localhost:8080/api/character";

export const getAllDbCharacters = async (url: string) => {
  return fetch(url).then((res) => res.json());
};

export const getDbCharacterByName = async (name: string) => {
  const apiNameUrl = `http://localhost:8080/api/name/${name}`;
  return fetch(apiNameUrl).then((res) => res.json());
};
