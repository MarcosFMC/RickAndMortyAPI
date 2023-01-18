//API CHARACTER
export interface URLData {
  name: string;
  url: string;
}

export const URLDataInitialState: URLData = {
  name: "",
  url: "",
};

export interface Character {
  id?: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: URLData;
  location: URLData;
  image: string;
  episode: string[];
  url?: string;
  created?: string;
  loading?: any;
}

export const CharacterInitialState: Character = {
  id: 0,
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
  origin: URLDataInitialState,
  location: URLDataInitialState,
  image: "",
  episode: [],
  url: "",
  created: "",
  loading: null,
};

//API PAGINATIONINFO
export interface RickAndMortyInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
export const rickAndMortyInfoInitialState: RickAndMortyInfo = {
  count: 0,
  pages: 0,
  next: "",
  prev: "",
};

//API ALL DATA
export interface RickAndMortyData {
  results: Character[];
  info: RickAndMortyInfo;
}

export const rickAndMortyDataInitialState: RickAndMortyData = {
  results: [],
  info: rickAndMortyInfoInitialState,
};
