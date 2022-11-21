export interface APICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

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
