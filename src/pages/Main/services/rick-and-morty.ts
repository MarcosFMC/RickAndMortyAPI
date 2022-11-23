export const getAllCharacters = "https://rickandmortyapi.com/api/character";

export const GetFetch = async (url: string) => {
  return fetch(url).then((res) => res.json());
};

export const GetCharacterByName = async (input: string) => {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${input}`).then(
    (res) => res.json()
  );
};
