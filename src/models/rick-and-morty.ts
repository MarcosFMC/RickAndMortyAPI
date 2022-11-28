//API CHARACTER
export interface URLData {
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
  origin: URLData;
  location: URLData;
  image: string;
  episode: string[];
  url?: string;
  created?: string;
  loading?: any;
}

//API PAGINATIONINFO
export interface APIPaginationInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
export const APIInfoInitialState: APIPaginationInfo = {
  count: 0,
  pages: 0,
  next: "",
  prev: "",
};

//API ALL DATA
export interface APIData {
  results: APICharacter[];
  info: APIPaginationInfo;
}

export const APIDataInitialState = {
  results: [],
  info: APIInfoInitialState,
};
