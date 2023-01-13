//API CHARACTER
export interface URLData {
  name: string;
  url: string;
}

export const URLDataInitialState: URLData = {
  name: "",
  url: "",
};

export interface APICharacter {
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

export const APICharacterInitialState: APICharacter = {
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
export interface APIInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
export const APIInfoInitialState: APIInfo = {
  count: 0,
  pages: 0,
  next: "",
  prev: "",
};

//API ALL DATA
export interface APIData {
  results: APICharacter[];
  info: APIInfo;
}

export const APIDataInitialState: APIData = {
  results: [],
  info: APIInfoInitialState,
};
