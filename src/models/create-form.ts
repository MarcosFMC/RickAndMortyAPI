import { CreateForm } from "@/pages";
import { APICharacter, URLData } from "./rick-and-morty";

export interface CreateForm {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
}

export const createFormInitialState: CreateForm = {
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
  origin: "",
  location: "",
  image: "",
};

export const apiCharacterAdapter = (apiCharacter: CreateForm): APICharacter => {
  const urlDataOrigin: URLData = {
    name: apiCharacter.origin,
    url: "",
  };
  const urlDataLocation: URLData = {
    name: apiCharacter.location,
    url: "",
  };

  const APICharacterAdapter: APICharacter = {
    name: apiCharacter.name,
    status: apiCharacter.status,
    species: apiCharacter.species,
    type: apiCharacter.type,
    gender: apiCharacter.gender,
    origin: urlDataOrigin,
    location: urlDataLocation,
    image: apiCharacter.image,
    episode: [],
    url: "",
    created: "",
    loading: null,
  };

  return APICharacterAdapter;
};
