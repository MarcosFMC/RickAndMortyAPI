export interface nameData {
  name: string;
  url: string;
}

export interface APICharacter {
  id?: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: nameData;
  location: nameData;
  image: string;
  episode: string[];
  url?: string;
  created?: string;
}

export interface APIInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface APIAllData {
  results: APICharacter[];
  info: APIInfo;
}

export const APIInfoInitialState: APIInfo = {
  count: 0,
  pages: 0,
  next: "",
  prev: "",
};

export const APIAllDataInitialState = {
  results: [],
  info: APIInfoInitialState,
};
